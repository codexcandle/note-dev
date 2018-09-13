## Q
For the rigid-body component, what does checking `Is Kinematic` do?

## A
* `controls whether physics affects the rigidbody.`
* if enabled, Forces, collisions or joints will not affect the rigidbody anymore. The rigidbody will be under full control of animation or script control by changing transform.position.
* kinematic bodies also affect the motion of other rigidbodies through collisions or joints (e.g. can connect a kinematic rigidbody to a normal rigidbody with a joint & the rigidbody will be constrained with the motion of the kinematic body.) 
* kinematic rigidbodies are also particularly useful for making characters which are normally driven by an animation, but on certain events can be quickly turned into a ragdoll by setting isKinematic to false.

```c#
using UnityEngine;

public clas ExampleClass:MonoBehaviour
{
	public Rigidbody rb;

	void Start()
	{
		rb = GetComponent<RigidBody>();
	}

	void EnableRagdoll(bool enable)
	{
		rb.isKinematic = enable ? false : true;
		rb.detectCollections = !rb.isKinematic;
	}
}
```

###### FURTHER
[rigid-body](./../../engine/unity/physics/rigid-body/)