* [overview](#overview)
* [merging component properties](#merging-component-properties)
* [order & precedence](#order-and-precedence)
* [example](#example)

## Overview <a name="overview"></a>

---

* `mixins` provide a way to compose & reuse commonly-used sets of component properties.
* they are defined using the <a-mixin> element & are placed in <a-assets>.
* should be set with an id, & when an entity sets that id as its mixin attribute, the entity will absorb all of the mixin’s attributes:

	```js
	<a-scene>
		<a-assets>
			<a-mixin id="red" material="color: red"></a-mixin>
			<a-mixin id="blue" material="color: blue"></a-mixin>
			<a-mixin id="cube" geometry="primitive: box"></a-mixin>
		</a-assets>

		<a-entity mixin="red cube"></a-entity>
		<a-entity mixin="blue cube"></a-entity>
	</a-scene>
	```

* the entity with red cube will take the properties from the red mixin & the cube mixin in that order. Likewise with the blue cube. Conceptually, the entities above expand to:

	```js
	<a-entity material="color: red" geometry="primitive: box"></a-entity>
	<a-entity material="color: blue" geometry="primitive: box"></a-entity>
	```

## Merging Component Properties <a name="overview"></a>

---

* properties of a multi-property component will merge if defined by multiple mixins and/or the entity::

	```js
	<a-scene>
		<a-assets>
			<a-mixin id="box" geometry="primitive: box"></a-mixin>
			<a-mixin id="tall" geometry="height: 10"></a-mixin>
			<a-mixin id="wide" geometry="width: 10"></a-mixin>
		</a-assets>

		<a-entity mixin="wide tall box" geometry="depth: 2"></a-entity>
	</a-scene>
	```

* all of the geometry component properties will merge since they are included as mixins and defined on the entity. The entity would then be equivalent to:

	```js
	<a-entity geometry="primitive: box; height: 10; depth: 2; width: 10"></a-entity>
	```

## Order & Precedence <a name="order-and-precedence"></a>

---

* when an entity includes multiple mixins that define the same component properties, the right-most mixin takes precedence:

	```js
	/*
	the entity includes both red and blue mixins,
	& since the blue mixin is included last,
	the final color of the cube will be blue.
	*/
	<a-scene>
		<a-assets>
			<a-mixin id="red" material="color: red"></a-mixin>
			<a-mixin id="blue" material="color: blue"></a-mixin>
			<a-mixin id="cube" geometry="primitive: box"></a-mixin>
		</a-assets>

		<a-entity mixin="red blue cube"></a-entity>
	</a-scene>
	```

* if an entity itself defines a property that is already defined by a mixin, the entity’s definition takes precedence:

	```js
	/*
	the entity includes both red & blue mixins & also
	defines a green color. Since the entity directly
	defines its own color, the final color of the
	cube will be green.
	*/
	<a-scene>
		<a-assets>
			<a-mixin id="red" material="color: red"></a-mixin>
			<a-mixin id="blue" material="color: blue"></a-mixin>
			<a-mixin id="cube" geometry="primitive: box"></a-mixin>
		</a-assets>

		<a-entity mixin="red blue cube" material="color: green"></a-entity>
	</a-scene>
	```

## EX <a name="example"></a>

---

* `voxel`

	![Example](_asset/img/01.png)

	![Example](_asset/img/02.png)