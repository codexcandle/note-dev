* [overview](#overview)
* [phase](#phase)
	* [geometry](#geometry)
	* [illumination](#illumination)
	* [viewing perspective](#viewing-perspective)
	* [clipping](#clipping)
	* [screen space projection](#screen-space-projection)
	* [rasterization](#rasterization)
	* display

## Overview <a name="overview"></a>

---

* `rendering` - the process of drawing to the screen, which involves the mathmematical combo of:

	- geometry
	- textures
	- surface treatment
	- viewer's perspective
	- lighting

* `rendering pipeline` (aka `graphics pipeline`) - represents flow of processes that take place to get a virtual enviro drawn to screen.  Occurs in 3 phases:

	![overview](_asset/img/01.png)

	* `application` phase - occurs on the cpu, and involves all processes that occur in the software (including moving objects, collisions, input, etc).
	* `geometry` phase - determines how the virtual enviro is situated with respect to the player.  Involves calculations about the position of the camera, the rotation / transformations / scaling of the world, and ALL the polygons).

		![overview](_asset/img/02.png)

	* `rasterization` phase - gets the world out of the computer & onto the screen (i.e. shaders).  Involves processing the environment numerous times to draw it out with different filters that are then added together to produce a final image.

* `vector mathematics` - since shaders use real-world lighting models, studying this will help!

	![overview](_asset/img/12.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Graphics_pipeline)

## Phase <a name="phase"></a>

---

* closer look @ `geometry` & `rasterization` phases:

	![overview](_asset/img/03.png)

## geometry <a name="geometry"></a>

* 1st the geometry is processed, & the vertices of the polygon is collected.

	![overview](_asset/img/04.png)

## illumination <a name="illumination"></a>

* where the models are colored & lit  (i.e. shaders).  Before the advent of modern gpu's, the functionality of illumination was `fixed`.  However, today you can specify how this stage will run, and the order these filters occur:

	![overview](_asset/img/05.png)

	![overview](_asset/img/06.png)

## viewing perspective <a name="viewing-perspective"></a>

* before making it onto the screen, the model is then processed through a viewing perspective that considers how the cam is setup - including whether or not it's in `perspective` or `orthogrpahic`, as well as details like `fov`.

	![overview](_asset/img/07.png)

	![overview](_asset/img/08.png)

## clipping <a name="clipping"></a>

* then the scene is clipped to remove any details outside of the camera's viewing volume.

	![overview](_asset/img/09.png)

## screen space projection <a name="screen-space-projection"></a>

* then a projection of the 3d object onto 2d space occurs.

	![overview](_asset/img/10.png)

## rasterization <a name="rasterization"></a>

* any post-processing fx are added here.  (These are extra visual fx that occur to the 2d version of the image, & not in 3d space.  Includes things like `depth-of-field` & `bloom`.)

	![overview](_asset/img/11.png)
