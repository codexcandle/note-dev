* [overview](#overview)
* [registering](#registering)
* [properties](#properties)
* [methods](#methods)
* [accessing](#accessing)
* [patterns](#patterns)
	* [separation of logic & data](#separation-of-logic)
	* [gathering all components of a system](#gathering-all-components)

## Overview <a name="overview"></a>

---

* a `system`, of the entity-component-system pattern, provides:
	- global scope, services, & management to classes of components.
	- it provides public APIs (methods and properties) for classes of components.

* a system can be accessed through the scene element, &  can help components interface with the global scene.

* demo:
	
	```txt
	the camera system manages all entities with the camera component
	- controlling which camera is the active camera.
	```

## Registering (a system) <a name="registering"></a>

---

* a system is registered similarly to a component.

* if the system name matches a component name, then the component will have a reference to the system as `this.system`:

	```js
	AFRAME.registerSystem('my-component', {
		schema: {},  // System schema. Parses into `this.data`.

		init: function () {
			// Called on scene initialization.
		},

		// Other handlers and methods.
	});

	AFRAME.registerComponent('my-component', {
		init: function () {
			console.log(this.system);
		}
	});
	```
## Accessing (a system) <a name="accessing"></a>

---

* an instantiated system can be accessed through the scene:

	```js
	document.querySelector('a-scene').systems[systemName];
	```

* registered system prototypes can be accessed through `AFRAME.systems`.

## Patterns <a name="patterns"></a>

---






### separation of logic & data <a name="separation-of-logic"></a>

* Systems can help separate logic and behavior from data if desired. We let systems handle the heavy lifting, and components only worry about managing its data through its lifecycle methods:

	```js
	AFRAME.registerSystem('my-component', {
		createComplexObject: function (data) {
			// Do calculations and stuff with data.
			return new ComplexObject(data);
		}
	});

	AFRAME.registerComponent('my-component', {
		init: function () {
			this.myObject = null;
		},

		update: function () {
			// Do stuff with `this.data`.
			this.myObject = this.system.createComplexObject(this.data);
		}
	});
	```

### gathering all components of a system <a name="gathering-all-components"></a>

* there is no strict API for defining how systems manage components. A common pattern is to have components subscribe themselves to the system. The system then has references to all of its components:

	```js
	AFRAME.registerSystem('my-component', {
		init: function () {
			this.entities = [];
		},

		registerMe: function (el) {
			this.entities.push(el);
		},

		unregisterMe: function (el) {
			var index = this.entities.indexOf(el);
			this.entities.splice(index, 1);
		}
	});

	AFRAME.registerComponent('my-component', {
		init: function () {
			this.system.registerMe(this.el);
		},

		remove: function () {
			this.system.unregisterMe(this.el);
		}
	});
	```