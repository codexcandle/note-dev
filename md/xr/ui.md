* [overview](#overview)
* [types](#types)
	* [non-diegetic](#non-diegetic)
	* [spatial](#spatial)
	* [diegetic](#diegetic)
* [text](#text)
	* [distance](#distance)
	* [free anti-aliasing in vr!](#anti-aliasing)
	* [unity-0.01 scale trick!](#unity-scale-trick)

## Overview <a name="overview"></a>

---

* `diegetic & 2-3 meters!` - uis should be a part of the world (diegetic), & 2-3 meters from the viewer (recommended min dist = 0.75m).  (Oculus discourages the use of traditional HUDs  as they can quickly feel like a clunky relic, & generally should be deprecated in favor of more user-friendly options.)
* `fit inside the middle 1/3rd of the user's viewing area` - don't require the user to swivel their eyes in their sockets.  Otherwise, they should be able to examine the ui with head movements.
* `use caution for ui elements that move or scale with head movements` - (el.g. long menu that scrolls or moves as you move your head to read it).  Ensure they respond accurately to the user's movemnts & are easily readable without creating distracting motion or discomfort.
* `draw cursors at same depth level` - as the object it's targeting.
* more info @ vid -> 
[vr-ui-interaction-for-oculus-rift-&-gear-vr-in-unity](./_asset/vid/vr-ui-interaction-for-oculus-rift-&-gear-vr-in-unity.mov)

## Types <a name="types"></a>

---

### non-diegetic <a name="non-diegetic"></a>

* `usually doesn’t work in VR` - as our eyes are unable to focus on something so close, & Screen Space-Overlay is not supported in Unity VR.
* In non-VR projects, UI is frequently overlaid on top of the screen to show things like health, score, and so on as what we often refer to as a HUD (Heads Up Display). This is known as non-diegetic UI - it doesn’t exist within the world, but makes sense for the player in the context of viewing the game.

> This term is also used in film for things like non-diegetic sound - this could be music in a film or TV show. Whereas diegetic sound would be what makes sense to hear based on what you are seeing - character dialogue or sound effects for example.

* in Unity, adding HUD style non-diegetic UI is usually accomplished by using `Screen Space - Overlay` or `Screen Space - Camera` render modes on a UI Canvas.

### spatial <a name="spatial"></a>

* Instead, we generally need to position our UI within the environment itself using World Space Canvas render mode. This will allow our eyes to focus on the UI.

  ![Soatial UI](./_asset/img/1.png)

	Placement of the UI within the world also needs some consideration. Too close to the user can cause eye strain, and too far away can feel like focussing on the horizon - this might work in an outdoor environment, but not in a small room. You’ll also need to scale the size of the UI accordingly, and perhaps dynamically depending on your needs.

	If possible, it’s best to position your UI at a comfortable reading distance, and scale it accordingly. See the UI in Main Menu for an example of this: It’s positioned a few meters away, and the text and images are large and easy to view.

	If you’re positioning the UI at a certain distance from the user, you may find the UI clipping into other objects. Take a look at the Reticle in the Interaction in VR article for how to modify a shader to draw on top of other objects, or simply use the shader included in the VR Samples. This shader can be used with text if you also need to stop it from clipping.

	Many developers will initially attach the UI to the camera, so that as the player moves around the UI will stay in a fixed position. While this could be useful for a reticle or something small, for larger UI elements this often has the effect of holding a newspaper in front of your face while looking around, and can lead to user discomfort or nausea. Take a look at the UI in Shooter 360 (Target Arena), where the UI will move into view after a short delay (see gif below), allowing the user to look around and become familiar with the environment without a UI element fixed to their field of view, obscuring their vision.

  ![Soatial UI](./_asset/img/2.png)

  	While VR provides us with the opportunity to explore immersive 360-degree environments, sometimes you might need to indicate that the user needs to look in a specific direction. In some of our scenes we use arrows within the world to help direct the user’s attention towards a direction. These fade in and out depending on the direction that the user is facing.

	These can be found in the GUIArrows prefab, and are easy to reuse. They work by comparing the angle of the head compared to the desired direction. If the head is outside of a predefined angle (see Show Angle in the GUIArrows component below), then the arrows will fade in. When the user looks back towards the desired direction, they will begin to fade out.

  ![Spatial UI](./_asset/img/3.png)
  
* some examples:

	![Spatial UI](./_asset/img/5.png)

	![Spatial UI](./_asset/img/6.png)

	![Spatial UI](./_asset/img/7.png)

	![Spatial UI](./_asset/img/8.png)

### digetic <a name="diegetic"></a>

* elements in the environment itself display information to the user. This could be a working clock on the wall, a TV, computer display, mobile phone, or a holographic display on a futuristic gun.

* some examples:

	![Diegetic UI](./_asset/img/9.png)

	![Diegetic UI](./_asset/img/10.png)

	![Diegetic UI](./_asset/img/14.png)

## Text <a name="text"></a>

---

* As the resolution on DK2 is 1920 x 1080 (960 x 1080 per eye), and the Gear VR is 2560 x 1440 (1280 x 1440 per eye), this can lead to some noticeable pixelation on anything that occupies a few pixels in width or height.

	Of particular note are UI elements; bear in mind how large these will appear on-screen. One approach is to use larger or bold fonts, and designing UI without thin lines that can become pixelated when viewed in VR.

### distance <a name="distance"></a>

> If text shows up more than 20-30 feet away from the player, it won’t be immediately readable.

### anti-aliasing <a name="anti-aliasing"></a>

* `canvas scaler` - Use a Canvas Scaler on a Worldspace Canvas to achieve free (from a rendering cost standpoint) anti-aliasing on text in Unity. The UI should have a `Reference Pixels Per Unit` setting of `1`, then alter `Dynamic Pixels Per Unit` until you slightly soften the edges of the text.
* below you can see the difference between a setting of `3 Dynamic Pixels Per Unit` - where the edges look sharp - and an example of the Dynamic Pixels Per Unit being set to `1.75`, which gives a much softer edge.

	![Diegetic UI](./_asset/img/11.png)

### unity-0.01 scale trick! <a name="unity-scale-trick"></a>

![0.01 scale trick!](./_asset/img/17.png)

![0.01 scale trick!](./_asset/img/18.png)

![0.01 scale trick!](./_asset/img/19.png)