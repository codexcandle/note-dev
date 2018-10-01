* [overview](#overview)
* [property](#property)
	* [components](https://aframe.io/docs/0.8.0/core/entity.html#components)
	* [hasLoaded](https://aframe.io/docs/0.8.0/core/entity.html#hasloaded)
	* [isPlaying](https://aframe.io/docs/0.8.0/core/entity.html#isplaying)
	* [object3D](https://aframe.io/docs/0.8.0/core/entity.html#object3d)
	* [object3DMap](https://aframe.io/docs/0.8.0/core/entity.html#object3dmap)
	* [sceneEl](https://aframe.io/docs/0.8.0/core/entity.html#sceneel)
* [method](#method)
	* [addState (stateName)](https://aframe.io/docs/0.8.0/core/entity.html#addstate-statename)
	* [emit (name, detail, bubbles)](https://aframe.io/docs/0.8.0/core/entity.html#emit-name-detail-bubbles)
	* [flushToDOM (recursive)](https://aframe.io/docs/0.8.0/core/entity.html#flushtodom-recursive)
	* [getAttribute (componentName)](https://aframe.io/docs/0.8.0/core/entity.html#getattribute-componentname)
	* [getDOMAttribute (componentName)](https://aframe.io/docs/0.8.0/core/entity.html#getdomattribute-componentname)
	* [getObject3D](https://aframe.io/docs/0.8.0/core/entity.html#getobject3d-type)
	* [pause](https://aframe.io/docs/0.8.0/core/entity.html#pause)
	* [play](https://aframe.io/docs/0.8.0/core/entity.html#play)
	* [setAttribute (componentName, value, [propertyValue | clobber])](https://aframe.io/docs/0.8.0/core/entity.html#setattribute-componentname-value-propertyvalue-clobber)
	* [setObject3D (type, obj)](https://aframe.io/docs/0.8.0/core/entity.html#setobject3d-type-obj)
	* [removeAttribute (componentName, propertyName)](https://aframe.io/docs/0.8.0/core/entity.html#removeattribute-componentname-propertyname)
	* [removeObject3D (type)](https://aframe.io/docs/0.8.0/core/entity.html#removeobject3d-type)
	* [moveState (stateName)](https://aframe.io/docs/0.8.0/core/entity.html#removestate-statename)		
* [event](#event)

## Overview <a name="overview"></a>

---

* aframe represents an entity via the <a-entity> element. As defined in the entity-component-system pattern, entities are placeholder objects to which we plug in components to provide them appearance, behavior, & functionality.

* entities are inherently attached with these components:
	- position
	- rotation
	- scale

* for example:

	```js
	// basic - no appearance, does nothing.
	<a-entity>

	// now visible!
	<a-entity geometry="primitive: box" material="color: red">

	// now emits light!
	<a-entity geometry="primitive: box" material="color: red"
          light="type: point; intensity: 2.0">
	```

* to retrieve entity via DOM API:

	```js
	<a-entity id="mario"></a-entity>

	var el = document.querySelector('#mario');
	```

## Event <a name="event"></a>

---

* events:

![Event](_asset/img/1.png)

* event detail:

![Event](_asset/img/2.png)

* `componentchanged` - listening for enity changes (via any of the components):

	```js
	entity.addEventListener('componentchanged', function (evt) {
		if (evt.detail.name === 'position') {
			console.log('Entity has moved to', evt.target.getAttribute('position'), '!');
		}
	});
	```

* `child-attached` / `child-attached` - listening for child elements being attached & detached:

	```js
	// listen for when the scene attaches or detaches an entity.
	entity.addEventListener('child-attached', function (evt) {
		if (evt.detail.el.tagName.toLowerCase() === 'a-box') {
			console.log('a box element has been attached');
		};
	});
	```

###### REF

---

[entity @ aframe](https://aframe.io/docs/0.8.0/core/entity.html)