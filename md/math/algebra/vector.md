* [overview](#overview)
* [operations](#operations)
	* [normalize (unit-vector)](#normalize)
	* [add / subtract](#add-subtract)
	* [multiply](#multiply)
* equations
	* [magnitude](#magnitude)
	* [dot-product](#dot-product)
	* [cross-product](#cross-product)
* [unity-api](#unity-api)

# Overview <a name="overview"></a>

---

* aka `linear algebra` - the study of vectors & their uses.

* btw `perpindicular` - 90 degrees adjacent from the plane containing the other (n) points (e.g. light normal!)

	![Vector](_asset/img/38.png)

	![Vector](_asset/img/39.png)

	![Vector](_asset/img/40.png)

* notation:

	![Vector](_asset/img/7.png)

	![Vector](_asset/img/44.png)

* `represents a direction` - & can have a magnitude (length) associated with it.  Note that vectors don't represent a line going from somewhere to somewhere else - as, again, vectors are just about directions.  Where you started from is irrelevant.

	![Vector](_asset/img/1.png)

	![Vector](_asset/img/2.png)

	![Vector](_asset/img/5.png)

* `polar vs cartesian coordinates` - can use either method to refer to a vector, but for convenience - programmers tpyically use coordinate notation.

	![Vector](_asset/img/45.png)

	![Vector](_asset/img/53.png)

	![LHR](_asset/img/24.png)

* `n-dimensions`:

	![Vector](_asset/img/52.png)

[more @ wikipedia](https://en.wikipedia.org/wiki/Vector_space)

# Operations <a name="operations"></a>

---

## normalize (unit vector) <a name="normalize"></a>

* `unit vectors` (aka `direction vectors` or `normals`) - have a magntiude of 1.
* helpful when you need just a direction.
* `normalizing a vector` - keeps its direction while magntiude is reduced to 1. Is nice because it separates the direction from the magnitude (e.g. can keep the speed of a character constant, even when they travel in wierd diagonal directions).

	![Unit Vector](_asset/img/6.png)

* example:

	![Unit Vector](_asset/img/19.png)

* `cons`:
	* do pay a performance cost as this involves taking a square root.  Not bad if doing tens of times / frame, but expensive if 1000s of times.
	* run the risk of dividing by zero if you ever have a zero vector (e.g. `0,0,0`).

## add / subtract <a name="add-subtract"></a>

![Add / Subtract](_asset/img/9.png)

* `can be added together` (in any order) - like numbers:

	![Add / Subtract](_asset/img/3.png)

	![Add / Subtract](_asset/img/11.png)

* examples:

	`add` (force / velocity):

	![Add](_asset/img/10.png)

	![Add](_asset/img/12.png)

	![Add](_asset/img/41.png)

	![Add](_asset/img/42.png)

	![Add](_asset/img/46.png)

	![Add](_asset/img/54.png)

	![Add](_asset/img/55.png)

	![Add](_asset/img/56.png)

	![Add](_asset/img/58.png)

	```c#
		/*
		added to object w/ rigidbody component
		(to ensure forces can be applied to this object)
		*/
		var v1:Vector3;
		var v2:Vector3;
		var v3:Vector3;

		void Start()
		{
			v1 = new Vector3(0, 0, 1);
			v2 = new Vector3(1, 0, 0);
			v3 = v1 + v2; // (1, 0, 1)
		}

		void FixedUpdate()
		{
			rigidbody.AddForce(v3 * 10);
		}
	```

	```c#
		// "adding velocity" to an object
		// (spaceship's pos vector + velocity vector = new pos)
	```

	`subtract` (pointing towards a target):

	![Subtract](_asset/img/13.png)

	![Subtract](_asset/img/43.png)

	![Subtract](_asset/img/47.png)

	![Subtract](_asset/img/57.png)

	![Subtract](_asset/img/59.png)

	```c#
		// "pointing towards a target"
		/*
			To find a vector pointing from A to B, use B - A.

			Say you have a tank that wishes to point its turret at a robot.  
			Subtracting the tank's pos form the robot's pos gives the
			vector pointing from the tank to the robot.
		*/
	```

## multiply <a name="multiply"></a>

* `scalar` - a value representing only magnitude (not direction; unlike a vector).

	![Scalar](_asset/img/49.png)

* `by scalar` - a vector multiplied by a scalar only changes it's magnitude, not direction.

![Multiply](_asset/img/14.png)

![Multiply](_asset/img/15.png)

![Multiply](_asset/img/50.png)

![Multiply](_asset/img/51.png)

# Equations <a name="equations"></a>

## magnitude <a name="magnitude"></a>

* `euclidean length` (magnitude of a vector):

	![Magnitude](_asset/img/8.png)

	![Magnitude](_asset/img/20.png)

	![Magnitude](_asset/img/21.png)

	![Magnitude](_asset/img/22.png)

	![Magnitude](_asset/img/23.png)

	![Magnitude](_asset/img/25.png)

	![Magnitude](_asset/img/48.png)

	![Magnitude](_asset/img/60.png)

	![Magnitude](_asset/img/61.png)

	![Magnitude](_asset/img/62.png)

	![Magnitude](_asset/img/63.png)

	![Magnitude](_asset/img/64.png)

	![Magnitude](_asset/img/65.png)

	![Magnitude](_asset/img/66.png)

	![Magnitude](_asset/img/67.png)

	![Magnitude](_asset/img/68.png)

* example:

	![Magnitude](_asset/img/18.png)

## dot-product <a name="dot-product"></a>

* is a float value requal to the magnitudes of the 2 vectors multiplied together, & then multiplied by the COSINE of the angle b/n them.

* `2 vectors are perpindicular` - if their dot product == 0.  (When using UNIT VECTORS, dot product is always `-1 < x < 1`).

* examples:

	```c#
		using UnityEngine;
		using System.Collections;

		public class ExampleClass:MonoBehaviour
		{
			public Transform other;
			void Update()
			{
				Vector3 forward = transform.TransformDirection(Vector3.forward);
				Vector3 toOther = other.position - transform.position;
				if(Vector3.Dot(forward, toOther) < 0)
				{
					print("The other transform is behind me!");
				}
			}
		}
	```

	```c#
		float c = a.Dot(b);
	```

	`flight simulator` - is plane upright?:

	```c#
		/*
		// world UP vector - from the ground.
		// FORWARD vector - from the plane's travel.
		
		// If the dot product == 0, the plane is flying straight w/ no drag.  
		// If dp > 0, plane is angled upwards.
		// If dp < 0, plane is angled towards ground.
		*/
	```

	![Dot-product](_asset/img/28.png)

	```c#
		// Q:
		// what's their dot product?
		v1 = (0, 1, 2);
		v2 = (2, 3, 4);

		// A
		// method #1 (unity-way)
		var dotProduct = v1.dot(v2);

		// method #2 (by hand)
		// x1, y1, z1
		// x2, y2, z2

		// = (x1x2) + (y1y2) + (z1z2)
		// = (x1 * x2) + (y1 * y2) + (z1 * z2);
		// = (0 * 2) + (1 * 3) + (2 * 4);
		// = 2 + 3 + 8
		// = 14 (so NOT perp!)
	```

	![Dot-product](_asset/img/27.png)

	`Facing`:

	```c#
		// Q:
		// is facing eachother?
		// p = player
		// z = zombie
		// fZ = unit vector representing zombie's direction

		var ZP = (P - Z).Normalized();
		if(ZP.Dot(fZ) > 0)
		{
			print("you've been spotted!");
		}
	```

## cross-product <a name="cross-product"></a>

* mathematically denoted:

	```c#
		A ^ B = C
	```

	By hand:

	```c#
		var c = new Vector3();
		c.x = (a.y * b.z) - (a.z * b.y);
		c.y = (a.z * b.x) - (a.x * b.z);
		c.z = (a.x * b.y) - (a.y * b.x);
	```

* cross product of 2 vectors results in a 3rd vector, which is perpindicular to the 2 others. The result's magnitude is equal to the magnitudes of the 2 inputs multiplied together, & then multiplied by the SINE of the angle between the 2 inputs.
* `use LEFT-HAND-RULE` - to determine the direction of the result vector (e.g. result equals RING finger - thumb + index finger = known vectors, middle finger = cross product).
* examples:

	```c#
		using UnityEngine;
		using System.Collections;

		public class ExampleClass:MonoBehaviour
		{
			Vector3 GetNormal(Vector3 a, Vector3 b, Vector3 c)
			{
				Vector3 side1 = b - a;
				Vector3 side2 = c - a;
				return Vector3.Cross(side1, side2).normalized;
			}
		}
	```

	```c#
		// Q:
		// find the axis upon which to apply torque for a tank turret wishing to fire at a new object.
		
		// A:
		// v1 = tank direction
		// v2 = direction tank needs to face / turn-to
		// cross product would be the VERTICAL AXIS (line of torque) above the tank.
	```

	```c#
		// commonly used in "calculating normals" of a surface plane (the surface normal).
	```

	```c#
		// to find the "area of a parallelogram" (TODO: add note pics here!)
	```

	![Cross-product](_asset/img/30.png)

	![Cross-product](_asset/img/31.png)

	![Cross-product](_asset/img/32.png)

	![Cross-product](_asset/img/33.png)

	![Cross-product](_asset/img/34.png)

	![Cross-product](_asset/img/35.png)

	![Cross-product](_asset/img/37.png)

# Unity-API <a name="unity-api"></a>

* `vector2`:

	![Unity-API](_asset/img/4.png)

* `normalized` vector:

	![Unity-API](_asset/img/17.png)

	```c#
		v1.Normalized
	```

* `distance` (finding the distance b/n 2 points in 3d space):

	```c#
		var dist = Vector3.Distance(pos1, pos2);
		if(dist > 10) ...
	```

* `magnitude`:

	![Unity-API (magnitude)](_asset/img/26.png)

* `dot product`:

	```c#
		Vector3.Dot
	```

	![Unity-API (dot-product)](_asset/img/16.png)

	![Unity-API (dot-product)](_asset/img/29.png)

* `cross-product`:

	![Unity-API (cross-product)](_asset/img/36.png)

	```c#
		Vector3.Cross(vA, vB);
		// or
		// var c = a.Cross(B);
	```