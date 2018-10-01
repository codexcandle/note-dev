* [overview](#overview)
* [properties](#properties)
* [methods](#methods)
* [events](#events)
* [scene component](#scene-component)
* [running content scripts](#running-content-scripts)

## Overview <a name="overview"></a>

---

* a scene is represented by the <a-scene> element.
* the scene is the global root object, & all entities are contained within it.
* the scene inherits from the Entity class so it inherits all of its properties, its methods, the ability to attach components, & the behavior to wait for all of its child nodes (e.g., <a-assets> & <a-entity>) to load before kicking off the render loop.
* handles all of the setup needed for 3D; webgl, the canvas, camera, lights, renderer, render loop, & hmd web-vr support. It takes a lot of the load off of us!
* <a-scene> handles all of the three.js and WebVR boilerplate for us:

	- Set up canvas, renderer, render loop
  - Default camera and lights
  - Set up webvr-polyfill, VREffect
  - Add UI to Enter VR that calls WebVR API
* demo:

	```js
	<a-scene>
		<a-assets>
			<img id="texture" src="texture.png">
		</a-assets>

		<a-box src="#texture"></a-box>
	</a-scene>
	```

## Properties <a name="properties"></a>

---

![Properties](_asset/img/1.png)

## Methods <a name="methods"></a>

---

![Methods](_asset/img/2.png)

## Events <a name="events"></a>

---

![Events](_asset/img/3.png)

## Scene Components <a name="scene-component"></a>

---

* Components can be attached to the scene as well as entities:

	```js
	<a-scene fog stats>
	```

* A-Frame ships with a few components to configure the scene:

	- embedded - Remove fullscreen styles from the canvas.
	- fog - Add fog.
	- keyboard-shortcuts - Toggle keyboard shortcuts.
	- inspector - Inject the A-Frame Inspector.
	- stats - Toggle performance stats.
	- vr-mode-ui - Toggle UI for entering and exiting VR.

## Running Content Scripts (on the Scene) <a name="running-content-scripts"></a>

---

* the recommended way is to write a component, and attach it to the scene element. The scene and its children will be initialized before this component:

	```js
	AFRAME.registerComponent('do-something', {
		init: function () {
			var sceneEl = this.el;
		}
	});
	```

	```html
	<a-scene do-something></a-scene>
	```

* if for some particular reason you prefer not to write a dedicated component, you need to wait for the scene to finish initializing and attaching:

	```js
	var scene = document.querySelector('a-scene');

	if (scene.hasLoaded) {
		run();
	} else {
		scene.addEventListener('loaded', run);
	}

	function run () {
		var entity = scene.querySelector('a-entity');
		entity.setAttribute('material', 'color', 'red');
	}
	```