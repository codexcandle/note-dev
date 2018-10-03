* [overview](#overview)
* [setup](./setup)
* [asset-mgmt](./asset-mgmt)
* [primitive](./primitive)
* [component](./component)
* [core-api](./core-api)
* [3rd-party](./3rd-party)
* [link](./link)
* [record](./record)
* [debug](./debug)
* [example](#example)
	* [basic](#basic)
	* [rotated-box](#rotated-box)
	* [parent-child](#parent-child)
	* [panaorama (js-way!)](#panorama)
	* [ground](#ground)
	* [lights](#lights)
	* [camera](#camera)
	* [sky](#sky)
	* [gallery](#gallery)
	* [martian-rover](#martian-rover)
	* [physics](#physics)

## Overview <a name="overview"></a>

---

* open-source & originally from mozilla, is a javascript framework for building VR using custom HTML tags.

* built atop the three.js framework (& other technologies).

* uses `WebVR` js api:

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

* `a-painter`

	[demo](https://github.com/aframevr/a-painter)

* [more @ aframe.io](https://aframe.io)
* [more @ web-vr rocks](https://webvr.rocks)
* [more @ web-vr info](https://webvr.info/)

## EX <a name="example"></a>

---

* `basic` <a name="basic"></a>

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

* `rotated-box`<a name="rotated-box"></a>

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

* `parent-child` <a name="parent-child"></a>

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

* `panorama` (programmatic js-way vs aframe way) <a name="panorama"></a>

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

* `ground` <a name="ground"></a>

	![Example](_asset/img/11.png)

	![Example](_asset/img/12.png)

	![Example](_asset/img/13.png)

* `lights` <a name="lights"></a>

	![Example](_asset/img/15.png)

* `camera` <a name="camera"></a>

	![Example](_asset/img/18.png)

	![Example](_asset/img/21.png)

	![Example](_asset/img/17.png)

	![Example](_asset/img/16.png)

	![Example](_asset/img/19.png)

	![Example](_asset/img/20.png)		

* `sky` <a name="sky"></a>

	![Example](_asset/img/22.png)

	![Example](_asset/img/23.png)

	![Example](_asset/img/24.png)

	![Example](_asset/img/25.png)

	![Example](_asset/img/26.png)

* `gallery` <a name="gallery"></a>

	`# 1`

	![Example](_asset/img/43.png)

	![Example](_asset/img/44.png)

	![Example](_asset/img/45.png)

	![Example](_asset/img/46.png)

	![Example](_asset/img/47.png)

	![Example](_asset/img/48.png)

	![Example](_asset/img/49.png)

	![Example](_asset/img/50.png)

	![Example](_asset/img/51.png)

	![Example](_asset/img/52.png)

	![Example](_asset/img/53.png)

	![Example](_asset/img/54.png)

	`# 2`

	[link](https://github.com/aframevr/360-image-gallery-boilerplate)

* [`martian rover`]<a name="martian-rover"></a>

	[road-to-vr](https://www.roadtovr.com/4-steps-to-start-experimenting-with-webvr-in-10-minutes/)

* [`physics`]<a name="physics"></a>

	[throw](https://github.com/bryik/aframe-ball-throw)