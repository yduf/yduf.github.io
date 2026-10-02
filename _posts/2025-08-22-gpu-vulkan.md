---
title: Vulkan
tags: vulkan gpu ffmpeg graphic
toc: true
excerpt_separator: <!--more-->
---
> Vulkan is a cross-platform, open standard set of APIs that allows programs to use GPU hardware in various ways, from drawing on screen, to doing calculations, to decoding video via custom hardware accelerators. <!--more--> Rather than using a custom hardware accelerator present, these codecs are based on compute shaders, and work on any implementation of Vulkan 1.3.
Decoders use the same hwaccel API and commands, so users do not need to do anything special to enable them, as enabling Vulkan decoding is sufficient to use them. - [ffmpeg 8.0](https://ffmpeg.org/index.html#pr8.0) / [HN](https://news.ycombinator.com/item?id=44985730)

<div class="encart blue" markdown="1">
# Check Availability

```bash
$ vulkaninfo --summary

$ vkcube    # showcase cube
```
</div>

- [Vulkan vs CUDA](https://chatgpt.com/share/6abdfeb6-2e40-83eb-b207-74ceeee6614a)

# Dev Setup  📥


<div class="encart green" markdown="1">

Vulkan is a stack: **driver (ICD)** → **loader** → **layers** → **app + shader toolchain**.
Choice: the **distro provides the GPU-facing runtime**, [nix]({% post_url 2026-01-24-package-nix %}) provides the **development / SDK side**.

</div>

| Piece | Provider | Why |
|---|---|---|
| `vulkaninfo`, `vkcube` | **system** - `vulkan-tools` 1.3.275 | must match the installed GPU driver to enumerate the *real* GPUs |
| `vulkan-loader`, `vulkan-dev`, `vulkan.pc` | **system** - 1.3.275 | the loader must NOT come from nix — see [pitfall](#pitfall-nix-profile-in-runpath) |
| `vulkan-headers` | nix - 1.4.357 | build-time headers only |
| `vulkan-validation-layers` | nix - 1.4.357 | version-matched to the nix loader, per-user, no `sudo` |
| `glslang`, `shaderc`, `spirv-tools`, `spirv-cross` | nix | shader → SPIR-V toolchain |
| `volk`, `vk-bootstrap`, `VMA`, `glm`, `glfw`, `sdl3` | nix | C++ helpers |

<details markdown="1"><summary>caveat</summary>

## vulkan-tools


<div class="encart orange" markdown="1">

 Why `vulkan-tools` is deliberately NOT taken from nix

The nix loader reads the *same* ICD manifests (via `$XDG_DATA_DIRS/.../vulkan/icd.d`) but **cannot load the driver libraries** they point at, so it sees **zero GPUs**:

</div>

```bash
$ nix shell nixpkgs#vulkan-tools -c vulkaninfo --summary
ERROR: [Loader Message] Code 0 : libvulkan_intel.so: cannot open shared object file
ERROR: [Loader Message] Code 0 : vkCreateInstance: Found no drivers!

$ vulkaninfo --summary | grep -cE 'deviceName.*(Intel|NVIDIA)'      # distro loader
2
```

So `vulkaninfo` / `vkcube` must stay the distro ones to talk to the real Intel/NVIDIA drivers.

## Validation layer

`~/.nix-profile/share` *is* on `$XDG_DATA_DIRS`, so the system loader **lists** the nix layer — but it **cannot load** it: the layer needs `GLIBC_ABI_GNU2_TLS`, a versioned symbol the distro glibc 2.42 does not export (nix glibc does).

<div class="encart orange" markdown="1">

```bash
$ VK_INSTANCE_LAYERS=VK_LAYER_KHRONOS_validation vulkaninfo --summary
ERROR: [Loader Message] Code 0 : libc.so.6: version `GLIBC_ABI_GNU2_TLS' not found
       (required by .../libVkLayer_khronos_validation.so)
```

</div>

Either run the app in a **nix-gl-host** environment (nix glibc + bound host drivers — as in `DEV/Manim/shell.nix`), or take the layer from the distro instead:

```bash
$ sudo apt install vulkan-validationlayers   # 1.3.275, loadable by the distro loader
```

### Pitfall: nix profile in RUNPATH

<div class="encart orange" markdown="1">

With **nix cmake** + **system gcc**, cmake finds the loader in the nix profile (`~/.nix-profile/lib/libvulkan.so`) and bakes that directory into the library's **RUNPATH**:

```bash
$ readelf -d libggml-vulkan.so.0.25.3 | grep RUNPATH
  Library runpath: [/…/build/bin:/home/yves/.nix-profile/lib:]
```

RUNPATH is searched **before** system paths, so the **nix** loader wins and drags in **nix libdl / nix libc** → a system-compiled binary dies at startup:

```bash
$ ./build/bin/llama
./build/bin/llama: /lib/x86_64-linux-gnu/libc.so.6: version
  `GLIBC_ABI_DT_X86_64_PLT' not found
  (required by /nix/store/…-glibc-2.42-84/lib/libdl.so.2)
```

</div>

Diagnosis: `LD_DEBUG=libs` showed `libvulkan.so.1` resolved from `~/.nix-profile/lib`, which carries `RUNPATH=/nix/store/…-glibc/lib`. Fix by forcing the distro loader (`LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu` made it run), then permanently by removing it from the profile.

**Rule:** the linker/loader for anything that must touch the real GPU comes from the **distro**. Keep `~/.nix-profile/lib` free of `libvulkan.so*`.

For an already-built binary:

```bash
$ nix shell nixpkgs#patchelf -c patchelf --set-rpath '$ORIGIN' libggml-vulkan.so.0.25.3
```

or reconfigure so the loader is on a standard path (no RUNPATH gets written):

```bash
$ cmake -S . -B build -DGGML_VULKAN=ON \
    -DVulkan_INCLUDE_DIR=/usr/include \
    -DVulkan_LIBRARY=/usr/lib/x86_64-linux-gnu/libvulkan.so.1
```

</details>

<details markdown="1"><summary>nix config</summary>

## Nix Config

Via Home Manager

```nix
home.packages = with pkgs; [
  # Vulkan / GPU shader toolchain
  # NOTE: no vulkan-loader / vulkan-tools here — the distro provides the
  # loader + libvulkan-dev + vulkaninfo/vkcube (see pitfall above).
  vulkan-headers            # C/C++ headers
  vulkan-validation-layers  # VK_LAYER_KHRONOS_validation
  vulkan-extension-layer
  glslang                   # glslangValidator: GLSL/HLSL -> SPIR-V
  shaderc                   # glslc + libshaderc
  spirv-tools               # spirv-val, spirv-opt, spirv-as, spirv-dis
  spirv-headers
  spirv-cross               # SPIR-V -> GLSL/HLSL/MSL

  volk
  vk-bootstrap
  vulkan-memory-allocator
  glm
  glfw
  sdl3
];
```

</details>


## Check Dev 

**Shader toolchain (nix)**

```bash
$ command -v glslangValidator glslc spirv-val spirv-opt spirv-cross
$ glslangValidator --version
```

**Compile + validate a shader**

```bash
$ printf '#version 450\nvoid main(){ gl_Position = vec4(0.0); }\n' > /tmp/t.vert
$ glslangValidator -V /tmp/t.vert -o /tmp/t.spv
$ spirv-val /tmp/t.spv
```

**Distro tools still in use — real GPUs visible**

```bash
$ command -v vulkaninfo vkcube                       # -> /usr/bin/...
$ vulkaninfo --summary | grep -iE 'deviceName'
	deviceName = Intel(R) UHD Graphics (CML GT2)
	deviceName = NVIDIA GeForce MX350
	deviceName = llvmpipe (LLVM 20.1.2, 256 bits)

# nix-supplied layers are enumerated from ~/.nix-profile/share (in $XDG_DATA_DIRS)
$ ls ~/.nix-profile/share/vulkan/explicit_layer.d/
VkLayer_khronos_validation.json
```


# see also
- [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api) / [HN](https://news.ycombinator.com/item?id=46293062) - _demonstrates how many parts of vulkan and DX12 are no longer needed._
- [A trip through the Graphics Pipeline (2011)](https://news.ycombinator.com/item?id=46229350)
- [ Vulkan Game Engine Development - 16FPS to 5000FPS ](https://www.youtube.com/watch?v=pbwRl3u8Dp0){: .reference-only}
