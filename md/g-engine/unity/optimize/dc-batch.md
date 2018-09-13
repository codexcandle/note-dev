* [overview](#overview)
* type
	* [dynamic](#dynamic)
	* [static](#static)

## Overview <a name="overview"></a>

---

* `minimize draw calls!` - to draw a gameObject on screen, the engine has to issue a draw call to the graphics API (e.g. OpenGL, Direct3D). <u>Draw Calls are often resource-intesive.</u> - with the graphics API doing sigficant work for every draw call, causing performanced overhead on the CPU side.  This is <u>mostly caused by state changes done between the draw calls</u> (e.g. switching to a different material), which causes resouce-intensive validtaion & translation steps in the graphics driver.

	Unity uses 2 techniques to address this:

	* Dynamic batching - for small enough Meshes, transforms their vertices on the CPU, groups many simiilar vertices together, & drwas them all in one go.

	* Static batching - combines static (not moving) Gameobjects into big meshes, & renders them in a faster way.

* `material set-up` (for batching):

	![Overivew](_asset/img/2.png)

* you problably have a ton of static geometry in your scene (e.g. walls, chairs, lights, & meshes) that never move - mark them as `static` in the editor! So, intead of incurring a draw call for each individual object, objects marked as static can be batchd into one combined mesh.
* be sure to mark them as `lightmap static` in order to get baked lightmap textures.
* again, as noted above, `ALL THE OBJECTS MUST USE THE SAME MATERIAL!`. (If you have static walls with a wood material & static chairs with a steel material, the walls will be batched into one draw call with one combined mesh.  The chairs will be rendered in a separate draw call, with their own separate mesh.)

![Overivew](_asset/img/11.png)

### dynamic

---

* `done automatically!` - Unity can automatically batch moving GameObjects into the same draw call if they share the same Material (& fulfill other criteria.)

![Dynamic](_asset/img/6.png)

* good / bad:
	- CON = incurs some CPU overhead.
	- CON = not compatible with graphics jobs (see PlayerSettings)

![Dynamic](_asset/img/7.png)

### static

---

* allows the engine to reduce draw calls for geometry of any size provided it:
	1. shares the same material
	2. does NOT move

* to enable:

	![Static](_asset/img/8.png)

* vs `dynamic batching`:
	- PRO = more efficient (doesn't transofrm vertices on the CPU)
	- CON = uses more memory

![Static](_asset/img/9.png)

![Static](_asset/img/10.png)