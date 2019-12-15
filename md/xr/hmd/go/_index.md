* [overview](#overview)
* [record!](./record)
* building
    1. [oculus utilities](#oculus-utilities)
    2. [quality settings](#quality-settings)
    3. [build settings](#build-settings)
    4. [player settings](#player-settings)
    5. [connect](#connect)
    6. [sideload](#sideload)
* debug
    1. [logcat](#logcat)
* [optimize!](#optimize)
    * [gpu-instancing](#gpu-instancing)
    * [fixed-foveated rendering](#fixed-foveated-rendering)
    * [dynamic-throttling](#dynamic-throttling)
    * [72-hertz mode](#72-hertz-mode)

## Overview <a name="overview"></a>

---

* `IMPORTANT!` - don't let lenses:
  * get exposed to direct sunlight! (can get burned.)
  * get scratched (clean with micro-cloth!)
* `1280 x 1440` - per eye (& 3 sub-pixels):
  ![Overview](_asset/img/16.png)
* `bluetooth transmitter!` - get this to attach to the 3.5mm jack (velcro to top of hmd) to send bluetooth audio to wireless bluetooth headphones; Reportedly near-zero latency!
  ![Bluetooth Transmitter](_asset/img/12.png)
* `folder paths` - on device:
  ![Folder paths](_asset/img/13.png)
* `360 vids on youtube` - on device, oculus browser?
  ![360 Vids (youtube)](_asset/img/14.png)  

  NOTE: Be sure to maximize `QUALITY`!

  ![360 Vids (youtube)](_asset/img/15.png)

* 3-dof vr headset
* runs apps build with oculus mobile sdk (with unity or unreal integrations)
* comes with orientation-tracked controller
* is binary compatible with gear-vr for most apps. thus, most gear-vr apps will run unmodified on o-go - as is compatible with the same mobile sdk. Note, some very old g-vr apps are still running on pre-1.0 releases of the mobile sdk, & aren't supported on o-go.
* unlike g-vr, does not - include google-play services, have camera, have hmd touchpad, require osig file for install.
* comes with spatial audio:
  ![Spatial Audio](_asset/img/3.png)
* has a multi-core cpu.
* [more from oculus...](https://www.oculus.com/go/)

## Building

---

### 1. oculus utilities <a name="oculus-utilities"></a>\

* import oculus utilities package - into unity project:

  [Oculus Utilities](https://developer.oculus.com/downloads/package/oculus-utilities-for-unity-5/)

### 2. set quality settings <a name="quality-settings"></a>\

* edit -> project -> quality:

  ![Quality Settings](_asset/img/2.png)

### 3. set build settings <a name="build-settings"></a>\

* target android - with apk build from unity.
* set texture compression - to astc.

  ![Texture Compression](_asset/img/1.png)

### 4. set player settings <a name="player-settings"></a>\

* set `android api` >= 19 (per oculus requirement)
* set `Single Pass` rendering:

  ![Single-pass Rendering](_asset/img/4.png)

### 5. connect hmd <a name="connect"></a>\

* via usb - connect headset to computer.

### 6. sideload (via adb) <a name="sideload"></a>\

* enable "dev mode" - on hmd to access adb (which in turn requires you create an `Organization` on oculus developer dashboard).

is binary compatible with gear-vr for most apps.

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

## Debug\

### logcat (via adb) <a name="logcat"></a>\

* to see a running debug stack trace from your app on the oculus-go:

  ```Markdown
      adb logcat -s Unity ActivityManager PackageManager dalvikvm DEBUG
  ```

## Optimize! <a name="optimize"></a>\  

---

### gpu-instancing<a name="gpu-instancing"></a>

* use [gpu-instancing!](./../../../game-engine/unity/optimize/index.html)

### fixed-foveated rendering <a name="fixed-foveated-rendering"></a>

* aka FFR.
* a technology that allows the edges of the eye texture to be rendered at a lower resolution than the center. The effect, which is nearly imperceptible, lowers the fidelity of the scene in the viewer's peripheral vision. Because fewer total pixels need to be shaded, FFR can produce a significant improvement in GPU fill performance.
* using this, many apps can dramatically increase the resolution of the eye texture that they render to on Oculus Go, improving the final image. Complex fragment shaders also benefit from this form of multi-resolution rendering.
* not based on eye tracking (unlike some other forms of foveation tech). The high-resolution pixels are “fixed” in the center of the eye texture.

  ![Fixed-Foveated Rendering](_asset/img/5.png)

  ![Fixed-Foveated Rendering](_asset/img/6.png)

  ![Fixed-Foveated Rendering](_asset/img/7.png)

  ![Fixed-Foveated Rendering](_asset/img/8.png)

  ![Fixed-Foveated Rendering](_asset/img/9.png)

### dynamic-throttling <a name="dynamic-throttling"></a>

  ![Dynamic-throttling](_asset/img/10.png)

  ![Dynamic-throttling](_asset/img/11.png)  

### 72-hertz mode <a name="72-hertz-mode"></a>

* running at 72 Hz is optional.

* you can switch modes seamlessly at run time.

* another new feature introduced by O-Go is 72 Hz Mode. With this mode O-Go apps can choose to target 72 frames per second instead of the normal 60 frames per second. This mode is strictly optional, & in some cases prohibitively expensive, but can be a significant quality improvement for apps that choose to support it.

* the purpose of this mode? - to improve the visual quality of the display. Typically,high frame rates for VR devices are associated with lowering latency, particularly when it comes to positional tracking. O-Go is not a positionally-tracked device, and though lower head tracking latency is comfortable, it's not the primary reason to run at 72 Hz. The Oculus Go display has been tuned to be comfortable at 60 Hz. 72 Hz Mode allows the display to become brighter without causing a perceptible flicker, which improves the visual quality of the screen. In particular, this mode makes the display brighter, and causes colors to pop and appear warmer.

* optimizing for 72 hertz - any app that can accommodate 72 frames per second rendering should use 72 Hz Mode when running on O-Go. This means rendering at least 2.8 ms faster than usual, which is not always possible. Combined with Dynamic Throttling and Fixed Foveated Rendering, some apps may be able to simply toggle this mode on and run at a higher frame rate. Others may need to do significant optimization to achieve this level of performance. Again, running at 72 Hz is optional.

* regarding video - apps should carefully consider 72 Hz Mode. An app that renders video at 30 or 60 frames per second will look better at 60 fps than at 72. However, 24 Hz video looks a lot better when running in 72 Hz Mode because the display & the video frame rates can be synchronized to avoid tears (24 is an even divisor of 72).