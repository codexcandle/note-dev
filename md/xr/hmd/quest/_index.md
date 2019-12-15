* [overview](#overview)
* building
    * [hello world](./hello-world)
    * [texture compression](#texture-compression)
* debug
    * [ovr-debug-info](#enable-ovrdebuginfo)

## Overview <a name="overview"></a>

---

* [more @ oculus](https://www.oculus.com/quest/)

## Building

---

### Texture Compression <a name="texture-compression"></a>\

* use `ASTC`

    NOTE: however, for perf reasons when importing new assets, always 1st disable this compression!

## Debug

---

### Enable OVRDebugInfo <a name="enable-ovrdebuginfo"></a>\

* enable the default "in-app" frame-rate debug panel (that comes with `OVRUtils`):

  ```Markdown
      1.  find the OVRDebugInfo class.
      2.  find the UPDATE method.
      3.  find the conditonal checking for SPACE BAR.
      4.  replace SB button id w/:
        OVRInput.GetDown(OVRInput.Button.PrimaryThumbstick
  ```

![Enable OVRDebugInfo](./_asset/img/01.png)