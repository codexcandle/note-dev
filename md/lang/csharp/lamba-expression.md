* [overview](#overview)
* [pro](#pro)
* [example](#example)

## Overview <a name="overview"></a>

---

* is shorthand to write a method in the same place you are going to use it.
* is an `anonymous function`, & mostly used to create delegates in `LINQ`.
* created by C#'s use of the `=>` symbol (with basic form `(params) => code`)
* `pro`

	* `reduced typing` - no need to specify function name, return type, & access modifier.
	* `easier code reading` - you don't need to look elsewhere for the method's definition.
	* `circumvent standard event system` - actions can be a quick shortcut to callbacks!

		> -because events & delegates are for chumps!
	* `dynamically bind functionality to vars` - as inline expressions can bind variables from outside their scope:

		```c#
		/*
		-Say you want pass in a save start time,
		& when done, output it to the logs.

		Also, even though the "write" method will return,
		any vars within it's scope that are passed in,
		used in the expression, will hang around
		until it's disposed of!
		*/
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

* note, can't use `var` - when instantiating an Action<> or a Func<> (because no way for compiler to infer the types used in a Lambda expression).

	```c#
	Action sayHello = () => {Debug.Log("Hello");
	```

* to pass multiple arguements to an expression:

	```c#
	Action<int, string, bool> sendToLog =
	(value, description, doLog) =>
	{
		if(doLog) Debug.Log("Logging out " + value + " and " + description);
	};
	```

## EX <a name="example"></a>

---

* code #1

	```c#
	x => x + 1
	```

* code #2

  ```c#
		// returns `true` if odd
		n => n % 2 == 1

		List<int> nums = new List<int>{11, 37, 52};

		// sets to `11` & `37`
		List<int> oddNums = nums.where(n => n % 2 == 1).ToList();
  ```

* code #3

	```c#
	using System;

	void someMethod()
	{
		Action sayHello = () => {Debug.Log("Hello")};
		sayHello();

		Action<int> sendToLog = (arg) => {Debug.Log(arg);};
		sendToLog(5);
		sendToLog(-10);
		sendToLog(42);
	}
	```

* code #4 - `normal v lambda`

	```c#
	PrintResult(5, n => n < 10);

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

	vs.

	```c#
	static bool LessthanTen(int num)
	{
		return n < 10;
	}

	...
	delegate bool del(int n);
	static void Main(string[] args)
	{
		del Lessthanten = n => n<10;
		bool j = LessThanTen(5);
	}
	```

* code #5 - `one-shot callback`

	```c#
	/*
	Say you want to pass a ballback to a method when a
	process save is complete (vs. using delegates &
	events, subscribing to an event that need to be
	detached later.  Instead this one-shot method will
	be disposed of when complete.
	*/

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

* code #6 - `implement a simple filter` (using a Func<> that returns a bool)

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

* code #7 - `unity example`

	```c#
	/*
	- say you wanted to have a quick way to perform a task after x secs.  
	With a simple wrap around unity's co-routine feature, you can implement
	this using an Action.
	*/
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