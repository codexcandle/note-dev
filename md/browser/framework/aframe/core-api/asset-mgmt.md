* [overview](#overview)
* [cors](#cors)
* [preloading audio + video](#preloading-av)
* [setting a timeout](#setting-timeout)
* [events](#event)
* [load progress on invididual assets](#load-progress)
* [specifying response type](#specifying-response-type)
* [internally](#internally)
* [accessing the file-loader & cache](#accessing-file-loader)

## Overview <a name="overview"></a>

---

* aframe has an asset management system that allows us to place our assets in one place and to preload & cache assets for better performance.

* the scene won’t render or initialize until the browser fetches (or errors out) all the assets or the asset system reaches the timeout.

* place assets within `<a-assets>`, & place `<a-assets>` within `<a-scene>`, which include:

	```js
	* <a-asset-item> - Miscellaneous assets such as 3D models and materials
	* <audio> - Sound files
	* <img> - Image textures
	* <video> - Video textures
	```

* demo:

	```js
	/*
	The scene and its entities will wait for every asset
	(up until the timeout) before initializing and rendering.
	*/
	<a-scene>
		<!-- Asset management system. -->
		<a-assets>
			<a-asset-item id="horse-obj" src="horse.obj"></a-asset-item>
			<a-asset-item id="horse-mtl" src="horse.mtl"></a-asset-item>
			<a-mixin id="giant" scale="5 5 5"></a-mixin>
			<audio id="neigh" src="neigh.mp3"></audio>
			<img id="advertisement" src="ad.png">
			<video id="kentucky-derby" src="derby.mp4"></video>
		</a-assets>

		<!-- Scene. -->
		<a-plane src="#advertisement"></a-plane>
		<a-sound src="#neigh"></a-sound>
		<a-entity geometry="primitive: plane" material="src: #kentucky-derby"></a-entity>
		<a-entity mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl"></a-entity>
	</a-scene>
	```

## CORS (cross-origin resource sharing) <a name="cors"></a>

---

![cors](_asset/img/1.png)

## Preloading Audio + Video <a name="preloading-av"></a>

---

* audio & video assets will only block the scene if we set autoplay or if we set `preload="auto"`:

	```js
	<a-scene>
		<a-assets>
			<!-- These will not block. -->
			<audio src="blockus.mp3"></audio>
			<video src="loadofblocks.mp4"></video>

			<!-- These will block. -->
			<audio src="blocky.mp3" autoplay></audio>
			<video src="blockiscooking.mp4" preload="auto"></video>
		</a-assets>
	</a-scene>
	```

## Setting a Timeout <a name="setting-timeout"></a>

---

* can set a timeout that when reached, the scene will begin rendering and entities will begin initializing regardless of whether all the assets have loaded. The default timeout is 3 seconds. To set a different timeout, we just pass in the number of milliseconds to the timeout attribute:

* if some assets are taking a long time to load, we may want to set an appropriate timeout such that the user isn’t waiting all day in case their network is slow.

	```html
	<a-scene>
		<a-assets timeout="10000">
			// you got until the count of 10 to load else the show will go on without you.
			<img src="bigimage.png">
		</a-assets>
	</a-scene>
	```

## Events <a name="events"></a>

---

![Events](_asset/img/2.png)

## Load Progress on Individual Assets <a name="load-progress"></a>

---

![Load Progress on Individual Assets](_asset/img/3.png)

## Specifying Response Type <a name="specifying-response"></a>

---

* content fetched by `<a-asset-item>` will be returned as plain text. If you want to use a different response type such as arraybuffer, use `<a-asset-item>`‘s response-type attribute:

```html
<a-asset-item response-type="arraybuffer" src="model.gltf"></a-asset-item>
```

## Internally (how it works) <a name="internally"></a>

---

![Internally](_asset/img/4.png)

## Accessing the FileLoader & Cache <a name="accessing-file-loader"></a>

---

* To access the three.js `FileLoader` if we want to listen more closely:

	```js
	console.log(document.querySelector('a-assets').fileLoader);
	```

* To access the cache that stores XHR responses:

	```js
	console.log(THREE.Cache);
	```