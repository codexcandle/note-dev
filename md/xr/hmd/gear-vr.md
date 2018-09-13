* [overview](#overview)
* building
    1. [build settings](#build-settings)
    2. [quality settings](#quality-settings)
    3. [connect](#connect)
    4. [sideload](#sideload)

## Overview <a name="overview"></a>

---

* resolution:
  ![Overview](./_asset/img/3.png)
* compatible with:
	* note 8
	* s8, s8+
	* s7, s7 edge
	* s6, s6 edge, s6 edge plus
	* note 5
* [more on oculus site...](https://www.oculus.com/gear-vr/)

## Building

---

### 1. set build settings <a name="build-settings"></a>\

* target android - with apk build from unity.

* set texture compression - to astc.

  ![Texture Compression](./_asset/img/1.png)

### 2. set quality settings <a name="quality-settings"></a>\

* edit -> project -> quality:

  ![Quality Settings](./_asset/img/2.png)

### 3. connect <a name="connect"></a>\

* ???

### 4. sideload (via adb) <a name="sideload"></a>\

* open terminal &  type:

  ```markdown
      > adb devices
      List of devices attached
      1KWPH810728146  device
  ```

  then to install:

  ```markdown
      adb install -r C:\Users\tyler\_ty\dev\lab\unity\app\codename-spatial\CodenameSpatial\Builds\build.apk
  ```
