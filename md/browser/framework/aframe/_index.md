* [overview](#overview)
* [setup](./setup)
* [asset-mgmt](./asset-mgmt)
* [primitive](./primitive)
* [component](./component)
* core-api
	* [entity](./core-api/entity)
	* [system](./core-api/system)
	* [scene](./core-api/scene)
	* [animation](./core-api/animation)
	* [mixins](./core-api/mixin)
	* [globals](https://aframe.io/docs/0.8.0/core/globals.html)
	* [utils](https://aframe.io/docs/0.8.0/core/utils.html)
* [3rd party](#3rd-party)
	* [d3](#d3)
	* [node](#node)
	* [react](#react)
* [record](./record)
* [debug](#debug)
* [tip](#tip)
* [example](#example)

## Overview <a name="overview"></a>

---

* open-source & originally from mozilla, is a javascript framework for building VR using custom HTML tags.

* built atop the three.js framework (& other technologies).

* uses `webvr` js api:

	> ...a JS API which provides data, which shouldn't be confused with WebGL, which provides graphics & rendering.) Via the WebVR API, you can gain access to VR headset sensor data (position, orientation) to transform the camera & to render content directly to VR headsets.  Note, WebVR started with the conceptualization of VRML (virtual reality markup langauage), but it never took off.  Also, WebVR is a low-barrier entry point to develop VR for the web without having to be familiar with WebGL.

		Besides aframe, other ways to create WebVR include:

		* three.js
		* amazon sumerian
		* react-vr
		* argon.js
		* bablylon.js
		* play-canvas
		* janus-vr
		* primrose
		* (google)
		* (oculus)
		* (samsung internet)

* provides a declarative, composoable, reusable entity-component structure (ECS).  If a feature doesn't exist, you can write (or find) a component to enable it.  If one of the standard components doesn't fit your use cases, you can copy & modify it.
* supports most modern mobile browsers that don't have WebVR support through the WebVR `polyfill`.
* performance-wise - aframe is optimized from the ground up for WebVR.  While aframe uses the DOM, it's elements don't touch the browser layout engine.  3D object updates are all done in memory with little overhead under a single "requestAnimationFrame" call.  (For ref, see `A-Painter`, a `Tilt Brush` clone built in aframe that runs like native; +90 fps).
* tool agnostic - aframe is built on top of the DOM - so compatible with most frameworks, libs, & tools (web).
* `meters` - are used with a 1:1 ratio (since WebVR API also uses meters when returning pose data).
* `right-hand coordinate system` - positive x-axis extends right, positive y extends up, & z extends out of the screen TOWARD you:

	![right-hand coordiante system](_asset/img/1.png)

* rotational unit is in degrees (then will be internally converted to radians when passing to three.js).

* [more @ aframe.io](https://aframe.io)
* [more @ web-vr rocks](https://webvr.rocks)

## 3rd-Party <a name="3rd-party"></a>

---

### d3 <a name="d3"></a>\

* & aframe work very well together!

	![3rd-Party](_asset/img/10.png)

### node-js <a name="node"></a>\

* although aframe can load in node, aframe isn't (yet) able to run any simulations at run time.  it's possible to run aframe in node - to get access to its globals.  however, you need to supply a browser `window` mock since node lacks a window object.  aframe is tested with `jsdom` - although any js-based browser implementation should work:

	```markdown
		global.window = require('jsdom').jsdom().defaultView;
		var aframe = require('aframe/src');
		console.log(aframe.version);
	```

### react <a name="react"></a>

* ![3rd-Party](_asset/img/6.png)

## Debug <a name="debug"></a>

---

![Debug](_asset/img/4.png)

* `inspector` component - aframe provides a handy built-in visual 3D inspector:

  ```js
  	CNTRL + ALT + i
  ```

	![Debug](_asset/img/2.png)

	![Debug](_asset/img/7.png)

* `stats` component - use this to keep an eye on various metrics (fps, vertex & face count, geometry & material count, draw calls, # of entities).  (-maximize FPS & minimize everything else!)

	![Debug](_asset/img/42.png)

## Tip <a name="tip"></a>

---

* `components` - the core structure of aframe is ecs (entity-component).  Place & structure app code within purely aframe components for:

	- reusability
	- modularity
	- composability
	- decoupling
	- encapsulation
	- declaritiveness
	- testability

	It's ok at first to start out using content "script" tags, but look to move towards components!

* `mixins` - & templating are useful to reuse & reduce repeated html.

* use `recommended hardware specifications`.

* `asset-management system` - make use of this to benefit from browser caching & preloading.  Trying to fetch assets while rendering is slower than fetching all assets before rendering.

* if using models, look to bake your lights into textures rather than relying on real-time lighting & shadows.

* generally, the fewer the # of entitites & lights in the scene, the better.

* make sure your textures' resolutions are sized to power of two (e.g. 256x256, 512x1024) in order to avoid the renderer having to resize the texture during runtime.

* limit the # of faces & vertices on models.

* some further techniques (not yet documented) include geometry instancing, geometry merging, level of detail (LOD).

* when using raycasters or colliders, select which entitites are to be raycasted against rather than raycasting against every object in the scene.

* when adding continuously running behaviors, use aframe component "tick handlers" to hook into the global render loop.  Use utilities such as `AFRAME.utils.throttlTick` to limit the # of times the tick handler is run if appropriate.

* how to display iframe's or render hmtl in aframe? - There is NO way for the browser to display iframes within WebGL.  While it's possible to overlay an iframe on top of the canvas, the iframe will not display in VR nor can it integrate with the scene.  However, you can redner basic html & css as a texture without interactivity. We can paint to a canvas & use the canvas as source for a texture.  There are components in the ecosystem that enable this:

	[HTML Shader](https://github.com/mayognaise/aframe-html-shader)

* remember to move the camera - when initially setting up your scene, as the default camera (or screen items) are positioned at the default position at the origin (0, 0, 0).  (Do this by changing the "position" component to ransform the box in 3D space.)

	```html
	<a-entity id="box" geometry="primitive: box" material="color: red"></a-entity>
	```

* when considering scale - for a scene for vr, it's important to consider the real world scale of the entites you create.  (e.g. a box with height="10" may look normal on your computer, but in VR the box will appear massive.)

* to determine the positive direction of rotation - use the right-hand-rule.

## EX <a name="example"></a>\

---

* `basic`

	```html
	<html>
		<head>
			<script src="https://aframe.io/releases/0.70./afame.min.js"></script>
		</head>
		<body>
			<a-scene>
			</a-scene>
		</body>
	</html>
	```

	`very basic`

	```html
	<script src="https://aframe.io/releases/0.70./afame.min.js"></script>

	<body>
		<a-scene></a-scene>
	</body>
	```

* `rotated box`

	```html
	<html>
		<head>
			<script src="https://aframe.io/releases/0.70./afame.min.js"></script>
		</head>
		<body>
			<!-- rotate box & double its size -->
			<a-scene>
				<a-box color="red" rotation="0 45 45" scale="2 2 2"></a-box>
			</a-scene>
		</body>
	</html>
	```

* `parent-child`

	```html
	<!--
	underneath the hood (3js), the child's position
	is calculated by multiplying the matrices of the
	parent & child's position.
	-->
	<a-scene>
		<a-box position="0 2 0" rotation="0 45 45" scale="2 4 2">
			<a-sphere position="1 0 3"></a-sphere>
		</a-box>
	</a-scene>
	```

* `panorama` (programmatic js-way vs aframe way)

	```js
	// via programmatic js

	// create scene
	var scene = document.createElement('a-scene');

	// create sky
	var sky = document.createElement("a-sky');
	sky.src = '3d-image.jpg';
	sky.setAttribute('rotation', {x:0, y:-130, z:0});

	// inject into page
	scene.appendChild(sky);
	document.body.appendChild(scene);
	```

	```html
	<!-- aframe way -->
	<a-scene>
		<a-sky src="https://davidwalsh.name/demo/3d-image.jpg"
				rotation="0 -130 0"></a-sky>
	</a-scene>
	```

* `interaction`

	![Example](_asset/img/9.png)

* `ground`

	![Example](_asset/img/11.png)

	![Example](_asset/img/12.png)

	![Example](_asset/img/13.png)

* `link`

	![Example](_asset/img/14.png)

* `lights`

	![Example](_asset/img/15.png)

* `camera`

	![Example](_asset/img/18.png)

	![Example](_asset/img/21.png)

	![Example](_asset/img/17.png)

	![Example](_asset/img/16.png)

	![Example](_asset/img/19.png)

	![Example](_asset/img/20.png)		

* `sky`

	![Example](_asset/img/22.png)

	![Example](_asset/img/23.png)

	![Example](_asset/img/24.png)

	![Example](_asset/img/25.png)

	![Example](_asset/img/26.png)