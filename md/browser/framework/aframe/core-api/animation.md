* [overview](#overview)
* [attribute](#attribute)
* [animating different property types](#animating-property-types)
	* [vec3](#vec-3)
	* [boolean](#boolean)
	* [numeric](#numeric)
	* [color](#color)
	* [component](#component)
* [begin](#begin)
* [direction](#direction)
* [easing](#easing)
* [fill](#fill)
* [repeat](#repeat)
* [evemt](#event)

## Overview <a name="overview"></a>

---

* can add animations in A-Frame attaching an <a-animation> element as a child of the entity to animate.
* demo:

	```js
	/*
	to define a 5-meter orbit on an entity about the Y-axis that takes 10 seconds...

	- You can offset its position & animate the rotation of a parent entity. 
	- This animation starts with the initial rotation about the Y-axis of 0 degrees & goes to 360 degrees.
	- It’s:
		* defined with a duration of 10000 milliseconds
		* maintains the final value on each cycle of the animation
		* loops indefinitely.
	*/
	<a-entity>
		<a-entity position="5 0 0"></a-entity>
		<a-animation attribute="rotation"
								 dur="10000"
								 fill="forwards"
								 to="0 360 0"
								 repeat="indefinite"></a-animation>
	</a-entity>
	```
* check out [K-FRAME ANIMATION](https://github.com/ngokevin/kframe/tree/master/components/animation/)

## Attributes <a name="attribute"></a>

---

![Attributes](_asset/img/1.png)

## Animating Different Property Types <a name="animating-property-types"></a>

---

### vec3 <a name="vec-3"></a>

* aframe has standard vec3 components (i.e., position, rotation, and scale)
* these components consist of 3 factors: `X`, `Y`, & `Z`.
* can pass 3 space-delimited numbers to the `from` & `to` attributes just as we would define them on an entity. (In this case, the animation system will assume we are animating a vec3 value.)
* demo:

	```js
	// animate an entity going from one spot to another (using the postion component)
	<a-entity>
		<a-animation attribute="position" from="1 1 1" to="2 4 -8"></a-animation>
	</a-entity>
	```

### boolean <a name="boolean"></a>

* aframe has standard components that accept a single boolean value.
* boolean values can be `animated` by flipping the boolean at the end of each anim cycle.
* demo:

	```js
	// an animation that toggles the visibility of an entity after 5 seconds.
	<a-entity>
		<a-animation attribute="visible" dur="5000" to="false" repeat="indefinite"></a-animation>
	</a-entity>
	```

### numeric <a name="numeric"></a>

* demo:

	```js
	// animate the intensity of the light primitive
	<a-light intensity="1">
		<a-animation attribute="intensity" to="3"></a-animation>
	</a-light>
	```

### color <a name="color"></a>

* demo:

	```js
	// animate a box from white to red
	<a-entity id="blushing-cube" geometry="primitive: box">
		<a-animation attribute="material.color" from="white" to="red" dur="1000"></a-animation>
	</a-entity>
	```

### component <a name="component"></a>

* can animate a certain property of a multi-property component (e.g. `componentName.propertyName`)
* demo:

	```js
	// animate a cone’s top radius, we can select the radiusTop value with geometry.radiusTop
	<a-entity geometry="primitive: cone; radiusTop: 1">
		<a-animation attribute="geometry.radiusTop" to="0.5"></a-animation>
	</a-entity>
	```

## Begin <a name="begin"></a>

---

* the `begin` attribute defines when the animation should start playing.
* can either be a number, representing milliseconds to wait, or an event name to wait for.
* demo:

	```js
	// we can define an animation that waits 2 secs - before scaling an entity
	<a-entity>
		<a-animation attribute="scale" begin="2000" to="2 2 2"></a-animation>
	</a-entity>
	```

	```js
	// an anim that waits for the parent element to trigger an event named fade - before fading an entity
	<a-entity id="fading-cube" geometry="primitive: box" material="opacity: 1">
		<a-animation attribute="material.opacity" begin="fade" to="0"></a-animation>
	</a-entity>
	```

	```js
	// trigger an event to begin fading.
	document.querySelector('#fading-cube').emit('fade');
	```

## Direction <a name="direction"></a>

---

* the direction attribute defines which way to animate - between the starting value & the final value.
* when we define an alternating direction, the animation will go back and forth between the from and to values like a yo-yo. Alternating directions only take affect when we repeat the animation.

![Direction](_asset/img/2.png)

## Easing <a name="easing"></a>

---

* the `easing` attribute defines the easing function of the animation, which defaults to `ease`. There are too many easing functions to list, but we can implicitly explain them.
* one possible value is `linear`. And the basic easing functions are:

	- ease
	- ease-in
	- ease-out
	- ease-in-out

* then there are more groups of easing functions. The above basic easing functions prefix each group of easing functions. The groups of easing functions are:

	- cubic
	- quad
	- quart
	- quint
	- sine
	- expo
	- circ
	- elastic
	- back
	- bounce

* for example, the `cubic` group of easing functions would consist of:

	- ease-cubic
	- ease-in-cubic
	- ease-out-cubic
	- ease-in-out-cubic

## Fill <a name="fill"></a>

---

* the `fill` attribute defines the effect of animation when not actively in play. Think of `fill` as what values the animation sets on the entity before and/or after each animation cycle. Below are the possible values for `fill` and their effects.

![Fill](_asset/img/3.png)

## Repeat <a name="repeat"></a>

---

* the `repeat` attribute defines how often the animation repeats.
* each repeat of the animation is called a `cycle`.
* repeat can either be a number that counts down on each animation cycle until it reaches `0` - at which point the animation will end, or we can set `repeat` to `indefinite` & the animation will loop continuously - until the animation is manually removed or stopped.

## Event <a name="event"></a>

---

* The <a-animation> element emits a couple of events:

	![Events](_asset/img/4.png)