* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* delegates are used to reference any methods that has the same signature as that of the delegate. In other words, you can call a method that can be referenced by a delegate using that delegate object. `Anonymous methods` provide a technique to pass a code block as a delegate parameter. Anonymous methods are the methods without a name, just the body.
* you need not specify the return type in an anonymous method as is inferred from the return statement inside the method body.
* declared with the creation of the delegate instance, with a `delegate` keyword:

	```c#
	/*
	The code block Console.WriteLine("Anonymous Method: {0}", x);
	is the body of the anonymous method.
	*/
	delegate void NumberChanger(int n);
	...
	NumberChanger nc = delegate(int x)
	{
		Console.WriteLine("Anonymous Method: {0}", x);
	};
	```

* the delegate could be called both with anonymous methods as well as named methods in the same way, i.e., by passing the method parameters to the delegate object

	```c#
	nc(10);
	```

### EX <a name="example"></a>

---

* demo

	```c#
	/*
	e.g.
	Anonymous Method: 10
	Named Method: 15
	Named Method: 30
	*/
	using System;

	delegate void NumberChanger(int n);
	namespace DelegateApp
	{
		class TestDelegate
		{
			static int num = 10;

			public static void AddNum(int p)
			{
				num += p;
				Console.WriteLine("Named Method: {0}", num);
			}

			public static void MultNum(int q)
			{
				num *= q;
				Console.WriteLine("Named Method: {0}", num);
			}

			public static int getNum()
			{
				return num;
			}

			static void Main(string[] args)
			{
				//create delegate instances using anonymous method
				NumberChanger nc = delegate(int x)
				{
						Console.WriteLine("Anonymous Method: {0}", x);
				};

				//calling the delegate using the anonymous method 
				nc(10);

				//instantiating the delegate using the named methods 
				nc =  new NumberChanger(AddNum);

				//calling the delegate using the named methods 
				nc(5);

				//instantiating the delegate using another named methods 
				nc =  new NumberChanger(MultNum);

				//calling the delegate using the named methods 
				nc(2);
				Console.ReadKey();
			}
		}
	}
	```

###### REF

---

* tutorials-point - [`c# - anonymous-methods`](https://www.tutorialspoint.com/csharp/csharp_anonymous_methods.htm)