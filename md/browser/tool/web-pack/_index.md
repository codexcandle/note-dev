* [overview](../lang/js)
* [setup](#setup)
* [babel](#babel)
* [dev-server](#dev-server)

## Overview <a name="overview"></a>

---

* `module bundler`

	![overview](_asset/img/01.png)

## Setup <a name="setup"></a>

---

1. `init repo`

	```txt
	// confirm node-js is installed
	npm -v

	// init repo
	npm init
	```

	This creates `package.json`:

	![setup](_asset/img/02.png)

2.  `install web-pack`

	```txt
	// assuming v3.10.0 is latest
	npm install webpack@3.10.0 --save
	```

	![setup](_asset/img/03.png)

3. create `public/index.html` & `src/app.js`

	![setup](_asset/img/04.png)

	![setup](_asset/img/05.png)		

4.  create `webpack.config.js`

	![setup](_asset/img/16.png)

	![setup](_asset/img/35.png)

5.  add `webpack script`

	![setup](_asset/img/18.png)

6. update `index.html`

	![setup](_asset/img/28.png)

7. create `modules` (& import)

	![setup](_asset/img/31.png)

	![setup](_asset/img/32.png)

	![setup](_asset/img/33.png)

	![setup](_asset/img/56.png)

8.  run `webpack`

	```txt
	// assuming v3.10.0 is latest
	npm run webpack

	// ..or just?
	webpack

	// ..or just?
	webpack --watch
	```

	Notice how it created `bundle.js`

	![setup](_asset/img/22.png)

9. `confirm`

	![setup](_asset/img/66.png)

## Babel <a name="babel"></a>

---

![babel](_asset/img/57.png)

* `loaders`

	![babel](_asset/img/54.png)

	![babel](_asset/img/55.png)

1.  install `babel`

	![babel](_asset/img/39.png)

	![babel](_asset/img/58.png)

	![babel](_asset/img/59.png)

	![babel](_asset/img/41.png)

2.  update `config`

	![babel](_asset/img/60.png)

	![babel](_asset/img/44.png)

	![babel](_asset/img/61.png)

	![babel](_asset/img/62.png)

	![babel](_asset/img/63.png)

	![babel](_asset/img/64.png)		

## Dev-server <a name="dev-server"></a>

---

* ![dev-server](_asset/img/49.png)

* ![dev-server](_asset/img/50.png)

* ![dev-server](_asset/img/51.png)

* ![dev-server](_asset/img/52.png)