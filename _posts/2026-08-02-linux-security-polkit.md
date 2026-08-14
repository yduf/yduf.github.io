---
title: polkit (iA)
tags: linux-security security ai_generated
---
> polkit is an authorization framework used by systemd-adjacent privileged services. It answers yes/no/ask for *individual privileged operations* that a daemon explicitly asks about over D-Bus.

## The key distinction: polkit ≠ sudo

These are two **separate authorization mechanisms**:

| | **sudo** | **polkit** |
|---|---|---|
| What it authorizes | **Any arbitrary command** as root (`/etc/sudoers`) | Only **specific declared actions** from **specific services** that opt in |
| How it works | setuid binary, config-based | Policy framework consulted by daemons over D-Bus |
| Scope | Unlimited, once you authenticate | Bounded to what a daemon exposes and asks polkit about |

So a flatpak rule does **not** and **cannot** extend to general "sudo behavior." Polkit has no ability to make arbitrary commands run as root — it can only answer yes/no/ask for *individual privileged operations* that a daemon explicitly asks it about.

## Example: the flatpak rule

```js
polkit.addRule(function(action, subject) {
    if ((action.id == "org.freedesktop.Flatpak.app-install" ||
         action.id == "org.freedesktop.Flatpak.runtime-install"||
         action.id == "org.freedesktop.Flatpak.app-uninstall" ||
         action.id == "org.freedesktop.Flatpak.runtime-uninstall" ||
         action.id == "org.freedesktop.Flatpak.modify-repo") &&
        subject.active == true && subject.local == true &&
        subject.isInGroup("sudo")) {
            return polkit.Result.YES;
    }

    return polkit.Result.NOT_HANDLED;
});
```

This gives members of the `sudo` group **passwordless** flatpak install/uninstall/repo ops — but only for those specific actions, not generally. Polkit's admin identity is defined by an admin rule:

```js
polkit.addAdminRule(function(action, subject) {
    return ["unix-group:sudo", "unix-group:admin"];
});
```

So for every **other** polkit-protected action, `sudo`-group members are recognized as admins and get **prompted to authenticate** — there's no blanket "allow without password".

## How far does polkit reach (non-flatpak)?

It covers all the daemons that shipped `.policy` action files — each scoped to that daemon's own operation:

- **Package management:** PackageKit / `org.aptkit` — installing GUI software updates/snap via the store (the CLI `apt`/`dpkg` still need sudo).
- **Storage:** UDisks2 — mounting, formatting, partitioning disks from a GUI.
- **Networking:** NetworkManager — changing network/wifi settings.
- **systemd services:** `hostname1` (change hostname), `login1` (reboot/shutdown/lock/suspend, session control), `machine1` (manage containers/VMs), `import1`, `locale1`, `resolve`.
- **Firmware:** fwupd — updating device firmware.
- **Accounts:** AccountsService / user management GUIs.
- **Others:** printing (cups), color profiles, fingerprint config, GeoClue location, Mint's own GUI tools (`mintsources`, `mintdrivers`, `timeshift`, `gufw`).

## The two big caveats

1. **polkit only works for services that integrate it.** It cannot make `sudo apt install`, `sudo rm -rf`, or any arbitrary shell command work without a password. That requires sudo/su/setuid, governed by `/etc/sudoers` — where `sudo` membership gives full, any-command root access *with a password*.

2. **polkit is tied to your "active local session"** (`subject.active == true`). It authorizes *your* session's requests. It's a convenience layer, not a strong boundary — any process running as you could in principle trigger these authorized operations, but again limited to the *specific declared actions*, not arbitrary command execution.

## Bottom line

- **flatpak rule scope:** only flatpak install/uninstall/repo ops — passwordless, and it does **not** generalize.
- **polkit's true reach:** a finite set of privileged operations that individual daemons choose to expose via polkit — with admin *authentication* required (you just get added to the admin list by being in `sudo`).
- **Your real "sudo power"** comes from `/etc/sudoers`, not polkit — being in the `sudo` group means you can run *any* command as root, but **only with your password**.

So nothing about a flatpak config quietly expands polkit into "normal sudo" — polkit fundamentally can't do that. Your passwordless power is confined to flatpak; your broad power is confined to normal password-authenticated sudo.
