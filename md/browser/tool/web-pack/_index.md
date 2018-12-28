* [overview](../lang/js)
* [setup (with babel)](#setup)
* [dev-server](#dev-server)

## Overview <a name="overview"></a>

---

* `module bundler`

	![overview](_asset/img/01.png)

* [more @ webpack](https://webpack.js.org/)

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

2. `install web-pack` + `babel`

	```txt
	npm install -D babel-loader @babel/core @babel/preset-env webpack

	// ... old way below?
	npm install webpack@3.10.0 --save
	```

	![setup](_asset/img/03.png)

	`loaders`

	![babel](_asset/img/57.png)

	![babel](_asset/img/54.png)

	![babel](_asset/img/55.png)

3. create `webpack.config.js`

	![setup](_asset/img/35.png)

	```txt
	module.exports = {
		entry: './src/app.js',
		output: {
			path: __dirname + '/public',
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			]
		}
	};
	```

4. create `public/index.html` & `src/app.js`

	![setup](_asset/img/04.png)

	![setup](_asset/img/05.png)		

5. add `webpack script`

	![setup](_asset/img/18.png)

6. update `index.html`

	![setup](_asset/img/28.png)

7. create `modules` (& import)

	![setup](_asset/img/31.png)

	![setup](_asset/img/33.png)

	![setup](_asset/img/56.png)

8. run `webpack`

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

## Dev-server <a name="dev-server"></a>

---

* ![dev-server](_asset/img/49.png)

* ![dev-server](_asset/img/50.png)

* ![dev-server](_asset/img/51.png)

* ![dev-server](_asset/img/52.png)