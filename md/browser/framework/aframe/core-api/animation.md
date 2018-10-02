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

* check out [K-FRAME ANIMATION](https://github.com/ngokevin/kframe/tree/master/components/animation/)

	![Overview](_asset/img/10.png)

* 	![Overview](_asset/img/8.png)	

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

	thus, the `cubic` group of easing functions would consist of:

	- ease-cubic
	- ease-in-cubic
	- ease-out-cubic
	- ease-in-out-cubic

* `tween`:

	![Overview](_asset/img/8.png)