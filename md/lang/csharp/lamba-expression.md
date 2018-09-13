* [overview](#overview)
* [pros](#pros)
* [example](#example)

## Overview <a name="overview"></a>

---

* is an anonymous function, & mostly used to create delegates in LINQ.
* created by C#'s use of the => symbol as an operator.
* basic form is `(params) => executed code`.
* should be short (as a complex definition makes the calling code difficult to read.)
* can't use var - when instantiating an Action<> or a Func<> (because no way for compiler to infer the types used in a Lambda expression).

```c#
	Action sayHello = () => {Debug.Log("Hello");
```

* is a shorthand that allows you to write a method in the same place you are going to use it.  Is especially useful in places where a method is being used only once, & the metho definiton is short (as it saves you the effort of declaring / wriing a separate method to the containiing class).

* is a language feature that cleanly wraps up in-line functionality, meaning you don't have to worry about defining delegates, or worry about attaching / unattaching events for callbacks.  But the flexibility goes much further than just being an alternative for managing events!

* "expression trees"?

## Pros <a name="pros"></a>

---

* reduced typing - as no need to specify function name, return type, & access modifier.
* easier code reading - as you don't need to look elsewhere for the method's definition.
* circumvent the standard event system - as actions can be a quick shortcut to callbacks!

> -because events & delegates are for chumps!

* functions allow you to create powerful helper methods.
* dynamically bind functionality to variables - as inline expressions can bind variables from outside their scope:

```c#
	// say you want pass in a save start time, & when done, output it to the logs. (You don't need to pass the filename into the dynamic express; c# does this for you.)

	// even though the "write" method will return, any vars within it's scope that are passed used in the expression will hang around until it's disposed of, also.

	void write(string filename)
	{
		var mySaveService = new SaveService();
		var startTime = DateTime.Now;
		mySaveService.doSave(filename, success => 
		{
			if(success)
			{
				Debug.Log("Hooray! We saved "
						+ filename + " starting at "
						+ startTime + " ending at "
						+ DateTime.Now);
			}
			else
			{
				Debug.Log("error!");
			}
		}
	}
```

* the Action generic type - is how you define the signature of your expression.  The generic parameters define the arguments types.  For example, Action will be a method that takes no arguements and Action<bool> will mean the expression has a single boolean arguement, while Action<string, int?> will be an expression that has a string and a nullable int.

Closely related to Action<> is Func<>, which works pretty much the same way except is has a return value.  The last type used in the generic is the return type.  For example, Func<int, bool> will have a boolean.  You can have any # of arguements (and only one return type in the case of a Func<>).

## EX <a name="example"></a>

---

* basic:

  ```c#
		// this says create an anonymous function taking a single argument x & return the value of x + 1.
		x => x + 1
  ```

  ```c#
		using System;

		void someMethod()
		{
			Action sayHello = () => {Debug.Log("Hello");
			sayHello();

			Action<int> sendToLog = (arg) => {Debug.Log(arg);};
			sendToLog(5);
			sendToLog(-10);
			sendToLog(42);
		}
  ```

  ```c#
		/* "input parametr named "n" goes to anonymous function which returns "true" if the input is odd" */
		n => n %2 == 1

		List<int> nums = new List<int>{11, 37, 52};
		List<int> oddNums = nums.where(n => n % 2 == 1).ToList();
		// ... now, oddNums is equal to 11 & 37
  ```

* "normal" way vs. lambda way:

  ```c#
		static bool LessthanTen(int num)
		{
			return n<10;
		}

		...
		delegate bool del(int n);
		static void Main(string[] args)
		{
			del Lessthanten = n => n<10;
			bool j = LessThanTen(5);	// j = true
		}

		...
		Static void PrintResult(num, del newDel)
		{
			if(newDel(num))
			{
				Console.WriteLine('condition is true")
			}
			else if(!newDel(num))
			{
				Console.WriteLine("condition is false")
			}
		}
  ```

	vesus:

  ```c#
		PrintResult(5, n => n < 10);
  ```

* to pass multiple arguements to an expression:

  ```c#
		Action<int, string, bool> sendToLog =
		(value, description, doLog) =>
		{
			if(doLog) Debug.Log("Logging out " + value + " and " + description);
		};
  ```

* one use - one-shot callbacks!  Say you want to pass a ballback to a method when a process save is complete (vs. using delegates & events, subscribing to an event that need to be detached later.  Instead this one-shot method will be disposed of when complete.):

  ```c#
		var mySaveService = new SaveService();
		mySaveService.doSave(success => 
		{
			if(success) Debug.Log("yes!");
			else Debug.Log("boo!");
		})

		// ...

		// method signature w/ action
		void doSave(Action<bool> callback);
  ```

* to implement a simple filter - using a Func<> (that returns a bool):

  ```c#
		void doFilter(IEnumerable<int> list, Func<int, bool> filter)
		{
			var filterList = new List<int>();
			foreach(var value in list)
			{
				if(filter(value)) fitleredList.add(value);
			}

			return filteredList;
		}

		// by changing the expression passed to the filter, you get different results!
		var evenNums = doFilter(someNumList, (value) => (return value % 2) == 0; });
		var oddNums = doFilter(someNumList, (value) => (return value % 2) == 1; });
  ```

* as a unity example - say you wanted to have a quick way to perform a task after x secs.  With a simple wrap around unity's co-routine feature, you can implement this using an Action:

  ```c#
		private IEnumerator waitThenCallback(float time, Action callback)
		{
			yield return new WaitForSeconds(time);

			callback();
		}

		void Start()
		{
			splashScreen.show();

			StartCoroutine(waitThencallback(5, () =>
				{Debug.Log("5 secs have pased!")}));

			StartCoroutine(waitThencallback(10, () =>
				{Debug.Log("10 secs have pased!")}));

			StartCoroutine(waitThencallback(20, () =>
				{Debug.Log("20 secs have pased!")
				splashScren.hide();
			}));
		}
  ```