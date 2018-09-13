* [overview](#overview)
* [setup](#setup)
* [embed](#embed)
* [debug](#debug)
* [registry](#registry)
* [components](./component)
* [model formats](#model-formats)
* [using local server](#using-local-server)
* [cdn & cors](#cdn)
* [3rd party tools](#3rd-party)
	* [d3](#d3)
	* [node](#node)
* [tips](#tips)
* [alternatives](#alternatives)
* [EX](#example)

## Overview <a name="overview"></a>

---

* aframe is a javascript framework for building VR using custom HTML tags.

* built atop the three.js framework (& other technologies)

* uses webvr - a JS API which provides data, shouldn't be confused with WebGL, which provides graphics & rendering.) Via the WebVR API, you can gain access to VR headset sensor data (position, orientation) to transform the camera and to render content directly to VR headsets.  Note, WebVR started with the conceptualization of VRML (virtual reality markup langauage), but it never took off.  Also, WebVR is a low-barrier entry point to develop VR for the web without having to be familiar with WebGL.

* originally from mozilla, is open-source.

* provides a declarative, composoable, reusable entity-component structure (ECS).  If a feature doesn't exist, you can write (or find) a component to enable it.  If one of the standard components doesn't fit your use cases, you can copy & modify it.

* supports most modern mobile browsers that don't have WebVR support through the WebVR `polyfill`.

* performance-wise - aframe is optimized from the ground up for WebVR.  While aframe uses the DOM, it's elements don't touch the browser layout engine.  3D object updates are all done in memory with little overhead under a single "requestAnimationFrame" call.  For ref, see "A-Painter", a "Tilt Brush" clone built in aframe that runs like native (+90 fps).

* tool agnostic - aframe is built on top of the DOM - so compatible with most frameworks, libs, and tools (web).

* meters - are used with a 1:1 ratio (since WebVR API also uses meters when returning pose data).

* "primitives" are aframes easy-to-use html elements that wrap the underlying entity-component assembly.  They can be convenient, but underneath a-box is actually a-entity with the geometry & material components.

* uses a right-hand coordinate system - positive x-as extends right, positive y-axis extends up, & z-axis extends out of the screen toward you:

![right-hand coordiante system](_asset/img/1.png)

* rotational unit is in degrees (then will be internally converted to radians when passing to three.js).

* site -> [aframe.io](https://aframe.io)
* site -> [web-vr rocks](https://webvr.rocks)

## Setup <a name="setup"></a>\

---

* cdn or js file - include lib in head of your html:

```markdown
	<html>
		<head>
			<script src="https://aframe.io/releases/0.7.0/aframe.min.js"</script>
		</head>
		<body>
			<a-scene>
				<a box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
				<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
				<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC650"></a-cylinder>
				<a-plane position="0 0 -4" rotation="-90 0 0 width="4" height="4" color="#FF0000"></a-plane>
				<a-sky color="#ECECEC"></a-sky>
			</a-scene>
		</body>
	</html>
```

* install via npm:

```markdown
	npm insall aframe
```

Then you can bundle afrae into your app (e.g. wih browserify or webpack):

```markdown
	require('aframe');
```

If using NPM, you can use "angle", a cli for aframe; angle can initialize a scene template with a single command:

```markdown
	npm install -g angle && angle initscene
```

## Embed <a name="embed"></a>\

---

* embedded component - use this if you want to embed an aframe scene into the layout of a 2D web page, which will remove fullscreen styles & allow you to style the canvas with css.

* iframe - use these if you want multiple scenes on the page (as usually you can only embed one at a time into a page.)

## Debug <a name="debug"></a>\

---

* visual inspector - aframe provides a handy built-in visual 3D inspector:

  ```markdown
  		CNTRL + ALT + i
  ```

## Registry <a name="registry"></a>\

---

* similar to the unity asset store; a collection of curated components for use

	[aframe registry](https://aframe.io/aframe-registryp)

## Model Formats <a name="model-formats"></a>\

---

* _gltf_ - (GL Transmission Format) the ideal format as is feature-rich, compact, & efficient.  Focuses on providing a transmission format rather than an edito format, and is more interoperable with web technologies. (see aframe's gltf component)

* collada (.dae) - an xml-based format w/ a rich feature set.  Is more common in comparison to gltf (since it's older), but mor suited to nativ apps that package all their conents together.  Ultimately, not recommended since they're like the .psd files of 3d models (whereas gltf are like .png of 3d models.  They're heavy because they contain complete subscenes.)

* wavefront (.obj) - a well-known format, but has limitations (like lack of animation support & vertex color support).

* there are also ecosystem components for loading other formats:
	+ .PLY models
	+ three.js ..JSON Object
	+ three.js ..JSON Scene

## Using Local Server <a name="using local server"></a>\

---

develop projects using a local server (so that files are properly served, as otherwise the `file://` protocol doesn't provide a domain, and absolute & relative links may not work!)

Once server is running, open project in browser:

```markdown
	http://localhost:8000
```

* [mongoose](https://github.com/cesanta/mongoose) - download this & open in the same directory as your web app.  Note, Mongoose is ideal for embedded environments. It has been designed for connecting devices and bringing them online. On the market since 2004, used by vast number of open source and commercial products. It even runs on the International Space station! Mongoose makes embedded network programming fast, robust, & easy.

* [python](https://www.python.org/) simpleHttpServer - run this command in a terminal in the same directory as your html file:

	```markdown
		python -m SimpleHTTPServer

		// or python 3
		python -m http.server
	```

* [npm](https://www.npmjs.com/) live server - run this command in a terminal in the same directory as your html file:

	```markdown
		npm install -g live-server && live-server
	```

## CDN & CORS <a name="cdn"></a>\

---

If hosting assets externally, like on a CDN (content delivery network), then you should remember that the primary requirement for assets is that they be served with CORS (cross-origin resource sharing) enabled.

* plus, if using `<a-assets>`, for assets like img, audio, & video, you should usually set:

	```markdown
		crossorigin="anonymous"
	```

* some cdn host options include:

	* aframe asset uploader - uses UploadCare
	* glitch asset uploaded - the glitch code editor has a penl to uploa dassets * get cdn url in return.
	* imgur - a popular image (only) hosting service.

## 3rd Party Tools <a name="3rd-party"></a>\

---

### d3 <a name="d3"></a>\

* & aframe work very well together!

### node-js <a name="node"></a>\

* although aframe can load in node, aframe isn't (yet) able to run any simulations at run time.  it's possible to run aframe in node - to get access to its globals.  however, you need to supply a browser `window` mock since node lacks a window object.  aframe is tested with `jsdom` - although any js-based browser implementation should work:

	```markdown
		global.window = require('jsdom').jsdom().defaultView;
		var aframe = require('aframe/src');
		console.log(aframe.version);
	```

## Tips <a name="tips"></a>\

---

* the script ref to the js lib must be included before the a-scene tag (in the body of the html doc).

* the core structure of aframe is ecs (entity-component).  Place & strcutuure app code within purely aframe components for reusability, modularity, composability, decoupling, encapsulation, declaritiveness, & testability. It's ok at first to start out using content "script" tags, but look to move towards components.

* mixins & templating are useful to reuse & reduce repeated html.

* use "recommended hardware specifications".

* stats component - use this to keep an eye on various metrics (fps, vertex & face count, geometry & material count, draw calls, # of entities).  You want to maximize FPS & minimize everything else..

* asset-management system - make use of this to benefit from browser caching & preloading.  Trying to fetch assets while rendering is slower than fetching all assets before rendering.

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

	```markdown
		<a-entity id="box" geometry="primitive: box" material="color: red"></a-entity>
	```

* when considering scale - for a scene for vr, it's important to consider the real world scale of the entites you create.  (e.g. a box with height="10" may look normal on your computer, but in VR the box will appear massive.)

* to determine the positive direction of rotation - use the right-hand-rule.

* ssl / https - should be used when deploying site live due to a common security restriction of the browser's webvr api.

## Alternatives <a name="tips"></a>\

---

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

## EX <a name="example"></a>\

---

* skeleton html:

	```markdown
	<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>

	<body>
		<a-scene>
		</a-scene>
	</body>
	```

* basic:
	1. add 3d eittities (with primitives)
	2. transform entitites with pos, rot, scale
	3. add enviro
	4. add textues
	5. add basic interactivity using anims & events
	6. add text

	```markdown
		<html>
			<head>
				<script src="https://aframe.io/releases/0.70./afame.min.js"></script>
			</head>
			<body>
				// rotate box & double its size
				<a-scene>
					<a-box color="red" rotation="0 45 45" scale="2 2 2"></a-box>
				</a-scene>
			</body>
		</html>
	```

	```markdown
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

* parent-child:

	```markdown
		// underneath the hood (3js), the child's position is calculated by multiplying the matrices of the parent & child's position
		<a-scene>
			<a-box position="0 2 0" rotation="0 45 45" scale="2 4 2">
				<a-sphere position="1 0 3"></a-sphere>
			</a-box>
		</a-scene>
	```

* panorama (programmatic js-way vs aframe way):

	```markdown
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

	```markdown
		// aframe way
		<a-scene>
			<a-sky src="https://davidwalsh.name/demo/3d-image.jpg" rotation="0 -130 0"></a-sky>
		</a-scene>
	```