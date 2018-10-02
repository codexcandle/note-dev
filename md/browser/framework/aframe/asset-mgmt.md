* [overview](#overview)
* [cdn & cors](#cdn)
* [preloading audio + video](#preloading-av)
* [setting a timeout](#setting-timeout)
* [events](#event)
* [load progress on invididual assets](#load-progress)
* [specifying response type](#specifying-response-type)
* [internally](#internally)
* [accessing the file-loader & cache](#accessing-file-loader)

	---

* [sounds](#sounds)
* [3d model formats](#model-format)
* [tips](#tips)

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

## CDN & CORS (cross-origin resource sharing) <a name="cdn"></a>

---

* ![cors](_asset/img/1.png)

* if hosting assets externally, like on a CDN (content delivery network), then you should remember that the primary requirement for assets is that they be served with CORS (cross-origin resource sharing) enabled.

* plus, if using `<a-assets>`, for assets like img, audio, & video, you should usually set:

	```js
		crossorigin="anonymous"
	```

* [more @ cors](http://localhost/browser/framework/aframe/core-api/asset-mgmt/#cors)

## Preloading Audio + Video <a name="preloading-av"></a>

---

* audio & video assets will only block the scene if we set autoplay or if we set `preload="auto"`:

	```html
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
			<!--
			you got until the count of 10 to load
			else the show will go on without you.
			-->
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

## Sounds <a name="sounds"></a>

---

![Sounds](_asset/img/15.png)

![Sounds](_asset/img/16.png)

## 3D Model Formats <a name="model-format"></a>

---

* summary:

	![Model Formats](_asset/img/6.png)

	![Model Formats](_asset/img/13.png)

* `gltf` - (GL Transmission Format) the ideal format as is feature-rich, compact, & efficient.  Focuses on providing a transmission format rather than an edito format, and is more interoperable with web technologies. (see aframe's gltf component)

* `collada` (.dae) - an xml-based format w/ a rich feature set.  Is more common in comparison to gltf (since it's older), but mor suited to nativ apps that package all their conents together.  Ultimately, not recommended since they're like the .psd files of 3d models (whereas gltf are like .png of 3d models.  They're heavy because they contain complete subscenes.)

* `wavefront` (.obj) - a well-known format, but has limitations (like lack of animation support & vertex color support).

* there are also ecosystem components for loading other formats:

	* .PLY models
	* three.js ..JSON Object
	* three.js ..JSON Scene

## Tips <a name="tips"></a>

---

* `textures`

	![Tips](_asset/img/11.png)

	`no youtube textures!`

	![Tips](_asset/img/5.png)

	`using asst-mgmt-sys`

	![Tips](_asset/img/12.png)

* `magica-voxel`

	![Tips](_asset/img/14.png)

* `trouble-shoot`

	![Tips](_asset/img/7.png)

	![Debug](_asset/img/17.png)

	![Debug](_asset/img/18.png)

* `optimize`

	![Tips](_asset/img/8.png)

	![Tips](_asset/img/9.png)

	![Tips](_asset/img/10.png)		