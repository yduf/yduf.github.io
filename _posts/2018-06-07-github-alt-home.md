---
title: GitHub@Home
published: true
tags: github at_home forgejo
toc: true
---
> [On-prem GitHub Alternatives](https://chatgpt.com/share/6a5f9791-942c-83ed-9d3e-b0a8ce9a7ccc)

# [Forgejo ⮺](https://forgejo.org/)

A self-hosted lightweight software forge.
Easy to install and low maintenance, it just does the job. - fork of [Gitea](https://forgejo.org/compare-to-gitea/)

## [Setup ⮺](https://chatgpt.com/share/6a61d28d-8730-83eb-baa5-3387296aa7d6)
- [Postgres setup]({% post_url 2025-12-17-db-postgres %})
- [Podman](https://forgejo.org/docs/latest/admin/installation/docker/#podman)

<div class="encart orange" markdown="1">
Performed by Hermes

cf [Forgejo setup]({% post_url 2026-07-24-forgejo-setup %})
</div>

<div class="encart blue" markdown="1">
    Première connexion                                                                                                                        
                                                                                                                                              
    Quand tu vas sur http://192.168.0.80:3000, tu arrives sur la page d'installation. Tu devras :                                             
                                                                                                                                              
    • Remplir les infos de base (URL déjà pré-remplie en http://localhost:3000 — change-la en http://192.168.0.80:3000 si tu veux)
    • Créer le compte administrateur (premier user)                                                                                           
    • La base de données PostgreSQL est déjà configurée (type, host, db, user, password), tu n'as rien à toucher                  
                                                                                                                                              
    Mot de passe PostgreSQL est aussi dans /etc/systemd/system/forgejo.service si besoin.
</div>


<details markdown="1"><summary>Configs</summary>
### Configs

| Fichier | Rôle |
|---------|------|
| `/etc/systemd/system/forgejo.service` | Service systemd —Lance podman run avec toutes les options : network host, volumes, variables d'env (DB, UID, SSH désactivé, schéma). |
| `/var/lib/forgejo/gitea/conf/app.ini` | Config Forgejo (générée par le formulaire d'installation) |
| `/var/lib/forgejo/custom-s6-override/openssh/down` | Désactive le serveur SSH interne du container |

### DB (Postgres)
- Base : forgejo                                                     
- Rôle : forgejo                                                                                                                          
- Schéma : forgejo
</details>

## [Releases  ⮺](https://chatgpt.com/share/6a64e4cb-e5e8-83eb-a4e7-7fa3368c8824)

Can be used to host thirdpary binary assets to ease deployment with [chezmoi]({% post_url 2026-02-01-config-chezmoi %})


# Jekyll 
- this can run in the background