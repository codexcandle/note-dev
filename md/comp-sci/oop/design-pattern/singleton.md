* [overview](#overview)
* [example](#example)
* [tips](#tips)
* [cons](#cons)

## Overview <a name="overview"></a>

---

* ensures only one instance of an object exists throughout app's lifetime.
* use for things that don't need to be copied multiple times in a project (e.g. `GameManager`).
* there are several ways to implement singletons.

## EX <a name="example"></a>\

---

* basic - here is the simplest implementation:

  ```c#
		public class SingletonController:MonoBehaviour
		{
			public static SingleController instance;

			private void Awake()
			{
				if(instance != null)
				{
					Destroy(gameObject);
				}
				else
				{
					Instance = this;
				}
			}

		}
  ```

	However, there are a few issues:

	1. not persistent across scenes.
	2. all executeable code must be attached to gameObject in hierarchy
	3. it's not recommended to call SingletonController.Instance in any Awake() method - since you don't know the order that `Awake` will be executed through all scripts, and can end up with a `Null` reference exception.
	4. boilerplate code - is introduced when you want another singleton controller (e.g. AudioController) and have to copy the same code to this new class (and do minor changes to make it work!)

* fix to issue #1:

	Just add `DontDestroyOnLoad(gameObject)`:

	```c#
		public class SingleController:MonoBehaviour
		{
			public static SingleController instance;

			private void Awake()
			{
				if(instance != null)
				{
					Destroy(gameObject);
				}
				else
				{
					Instance = this;
					DontDestroyOnLoad(gameObject);
				}
			}
		}
	```

* fix to issues #2 & #3:

	"Lazily" instantiate (create only when needed):

	```c#
		public class SingleController:MonoBehaviour
		{
			public static SingleController instance = null;
			public static SingletonController instance
			{
				get
				{
					if(instance == null)
					{
						instance = FindObjectOftype<SimpleSingleton>();
						if(instance == null)
						{
							GameObject go = new GameObject();
							go.name = "SingletonController";
							instance = go.AddComponent<SingletonController>();
							DontDestroyOnLoad(go);
						}
					}

					return instance;
				}
			}

			private void Awake()
			{
				if(instance != null)
				{
					instance = this;
					DontDestroyOnLoad(this.gameObject);
				}
				else
				{
					Destroy(gameObject);
				}
			}
		}
	```

	First, this searches for an instnace of SingleController in the scene, and if this component isn't found, a GameObject is created & a SingletonController component is atached to it.  Thus, it's not necessary for this controller to exist in the scene before-hand, & any extra copies it finds will also be destroyed.  Also, since lazily instantiating the singleton, you don't have to worry about the null ref error.

* fix to #4:

	Use generics to eliminate boilerplate:

	```c#
		public class GenericSingletonClass<T>:MonoBehaviour where T:Component
		{
			private static T instance;
			public static T Instance
			{
				get
				{
					if(instance == null)
					{
						instance = FindObjectOfType<T>();
						if(instance == null)
						{
							GameObject obj = new GameObject();
							obj.name = typeof(T).Name;
							instance = obj.AddComponent<T>();
						}
					}
					return instance;
				}
			}

			public virtual void Awake()
			{
				if(instance == null)
				{
					instance = this as T;
					DontDestroyOnLoad(this.gameObject);
				}
				else
				{
					Destroy(gameObject);
				}
			}
		}
	```

	then to use, just inherit from above:

	```c#
		public class MyAudioController:GenericSingletonClass<MyAudioController>
		{
			// ...
		}
	```

## Tips <a name="Tips"></a>\

---

* Have an `Awake` method already in your child class?

  ![Awake](_asset/img/1.png)

* attach to a root gameObject if you want scene persistance.

  ![Root Object](_asset/img/2.png)

## Cons <a name="cons"></a>\

---

* use static vars instead:

> I don't recommend using the Singleton pattern when you work in a team, as it's the source of all kinds of code-coupling.  Use static variables instead if you have to assure that there is only one instance of the class.

### 1.  global dependencies

Singletons are just a different way to dress a global variable - which is generally considered bad, because:
	* it's hard to know who you'll affect by modifying the global variable.
	* testing becomes difficult because the tests may depend on the state of the singleton.
	* depedencies aren't obvious from examining the api.

### 2. tight coupling

Say you program a singleton that's able to deal with just a mysql database for a services class.   Then suddenly your client comes to you asking for a service that also supports a doc-object-model (i.e. mongo).  If you had programmed to an interface, this wouldn't be a problem.  However, in your casee, you have to rewrite your class since it was a singleton - with tight coupling to the backend.

### 3. api disruption

There's nothing to stop someone form putting some heavy init logic in a singleton.  For example, what if you call a constructor on some class (which you would assume to happen really quickly) - could result in a loooooong delay time if there's a call to a remote server in said init function.  This "delay" isn't explicitly apparent in the api.