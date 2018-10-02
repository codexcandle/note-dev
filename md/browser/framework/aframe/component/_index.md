* [overview](#overview)
	* [html form](#html-form)
	* [register component](#register-component)
	* [schema](#schema)
	* [life-cycle handler methods](#life-cycle-handler-methods)
		* [init](#init)
		* [update](#update)
		* [remove](#remove)
		* [tick](#tick)
		* [tock](#tock)
		* [pause](#pause)
		* [play](#play)
		* [updateSchema](#update-schema)
		* [definition properties](#definition-properties)
		* [component prototype methods](#component-prototype-methods)
		* [accessing components members & methods](#members-and-methods)
* [native](./native)
* [3rd-party](./3rd-party)
* [custom](./custom)

## Overview <a name="overview"></a>

---

* in the entity-component-system pattern, a component is a reusable and modular chunk of data that we plug into an entity to add appearance, behavior, and/or functionality.

* components modify `entities`; mix & compose components together to build complex objects.

* they allow you to encapsulate `three.js` & JS code into modules that we can use declaratively from HTML.

## HTML Form <a name="html-form"></a>

---

* a component holds a bucket of data in the form of one or more component properties. Components use this data to modify entities. Consider an engine component, we might define properties such as horsepower or cylinders.

* HTML attributes represent component names and the value of those attributes represent component data.

* demo:

	```js
	// single-property component
	<!-- `position` is the name of the position component. -->
	<!-- `1 2 3` is the data of the position component. -->
	<a-entity position="1 2 3"></a-entity>

	// multi-property
	<!-- `light` is the name of the light component. -->
	<!-- The `type` property of the light is set to `point`. -->
	<!-- The `color` property of the light is set to `crimson`. -->
	<a-entity light="type: point; color: crimson"></a-entity>
	```

## Register Component <a name="register-component"></a>

---

* `AFRAME.registerComponent (name, definition)` - you must register components before using them anywhere in <a-scene>.  Meaning from an HTML file, components should come in order before <a-scene>:

    - `{string} name` - Component name. The component’s public API as represented through an HTML attribute name.
    - `{Object} definition` - Component definition. Contains schema and lifecycle handler methods.

* demo:

	```js
	// Registering component in foo-component.js
	AFRAME.registerComponent('foo', {
		schema: {},
		init: function () {},
		update: function () {},
		tick: function () {},
		remove: function () {},
		pause: function () {},
		play: function () {}
	});
	```

	```js
	<!-- Usage of `foo` component -->
	<html>
		<head>
			<script src="aframe.min.js"></script>
			<script src="foo-component.js"></script>
		</head>
		<body>
			<a-scene>
				<a-entity foo></a-entity>
			</a-scene>
		</body>
	</html>
	```

## Schema <a name="schema"></a>

---

* `schema` - an object that defines / describes the properties of the component. The schema’s keys are the names of the property.

* demo:

	```js
	AFRAME.registerComponent('bar', {
		schema: {
			color: {default: '#FFF'},
			size: {type: 'int', default: 5}
		}
	}
	```

	```js
	<a-scene>
		<a-entity bar="color: red; size: 20"></a-entity>
	</a-scene>
	```

* property types:

	![schema](_asset/img/1.png)

* property type inference:

	![schema](_asset/img/2.png)

* `custom property type` - 	can also define own property type (or parser) by providing a parse function in place of a type!

	```js
	schema: {
		// Parse slash-delimited string to an array (e.g., `foo="myProperty: a/b"` to `['a', 'b']`).
		myProperty: {
			default: [],
			parse: function (value) {
				return value.split('/');
			}
		}
	}
	```

* `single-property schema` - a component can either be a single-property component (consisting of one anonymous value) or a multi-property component (consisting of multiple named values). Aframe will infer whether a component is single-property vs. multi-property based on the structure of the schema.

	A single-property component’s schema contains type and/or default keys, & the schema’s values are plain values rather than objects:

	```js
	AFRAME.registerComponent('foo', {
		schema: {type: 'int', default: 5}
	});
	```

	```js
	<a-scene>
		<a-entity foo="20"></a-entity>
	</a-scene>
	```

## Life-cycle Handler Methods <a name="life-cycle-handler-methods"></a>

---

![Life-cycle Handler Methods](_asset/img/3.png)

* `component prototype properties` - within the methods, we have access to the component prototype via `this`:

	![Life-cycle Handler Methods](_asset/img/4.png)

* `init` <a name="init"></a>

	![Life-cycle Handler Methods](_asset/img/5.png)

* `update` <a name="update"></a>

	![Life-cycle Handler Methods](_asset/img/6.png)

* `remove` <a name="remove"></a>

	![Life-cycle Handler Methods](_asset/img/7.png)

* `tick` <a name="tick"></a>

	![Life-cycle Handler Methods](_asset/img/8.png)

* `tock` <a name="tock"></a>

	![Life-cycle Handler Methods](_asset/img/9.png)

* `pause` <a name="pause"></a>

	![Life-cycle Handler Methods](_asset/img/10.png)

* `play` <a name="play"></a>

	![Life-cycle Handler Methods](_asset/img/11.png)

* `updateSchema` <a name="update-schema"></a>

	![Life-cycle Handler Methods](_asset/img/12.png)

## Definition Properties <a name="definition-properties"></a>

---

* dependencies:

	![Definition Properties](_asset/img/13.png)

* multiple:

	![Definition Properties](_asset/img/14.png)

## Component Prototype Methods <a name="component-prototype-methods"></a>

---

* `flushToDom()`:

	![Component Prototype Methods](_asset/img/15.png)

## Accessing a Component's Members & Methods <a name="members-and-methods"></a>

---

![Accessing a Component's Members & Methods](_asset/img/16.png)