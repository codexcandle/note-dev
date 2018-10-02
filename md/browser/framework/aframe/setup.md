* [include](#include)
* [embed](#embed)
* [ssl & https](#ssl-https)
* [using local server](#using-local-server)
* 3rd-party
	* [angle-cli](#angle-cli)

## Include <a name="include"></a>

---

* simple (manual):

	```html
	<!-- cdn or js file - include lib in head of your html -->
	<html>
		<head>
			<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
		</head>
		<body>
		...
	```

	(NOTE: The script ref to the js-lib must be included before a-scene tag in body of html doc.)

* cooler! (npm):

	```js
		// install via npm
		npm install aframe
	```

	Then you can bundle aframe into your app (e.g. with browserify or webpack):

	```js
		require('aframe');
	```

	Also, if using NPM, can use `angle` (a cli for aframe), which can initialize a scene template with a single command:

	```js
		npm install -g angle && angle initscene
	```

## Embed <a name="embed"></a>

---

* embedded component - use this if you want to embed an aframe scene into the layout of a 2D web page, which will remove fullscreen styles & allow you to style the canvas with css.

* iframe - use these if you want multiple scenes on the page (as usually you can only embed one at a time into a page.)

## SSL-HTTPS <a name="ssl-https"></a>

---

* `ssl / https` - should be used when deploying site live due to a common security restriction of the browser's webvr api.

## Using Local Server <a name="using-local-server"></a>

---

* you can develop projects using a local server (so that files are properly served, as otherwise the `file://` protocol doesn't provide a domain, & absolute & relative links may not work!)

	Once server is running, open project in browser:

	```js
	http://localhost:8000
	```

* [NPM (live server)](https://www.npmjs.com/) - run this command in a terminal in the same directory as your html file:

	```js
		npm install -g live-server && live-server
	```

* [MONGOOSE](https://github.com/cesanta/mongoose) - download this & open in the same directory as your web app.

* [PYTHON (simple http server)](https://www.python.org/) - run this command in a terminal in the same directory as your html file:

	```js
		python -m SimpleHTTPServer

		// or python 3
		python -m http.server
	```

## 3rd-Party

---

### angle cli <a name="angle-cli"></a>

* [angle](https://www.npmjs.com/package/angle)

	![3rd-Party](_asset/img/01.png)