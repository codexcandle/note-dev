* [overview](#overview)
* [factorial](#factorial)
* [fibonacci](#fibonacci)

## Overview <a name="overview"></a>

---

* `recursion` - when a method calls itself.

* `iterative v recursive`

	![Overview](_asset/img/2.png)

* demo:

	![Overview](_asset/img/5.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Recursion_(computer_science))

## Factorial <a name="factorial"></a>

---

![Factorial](_asset/img/4.png)

* demo:

	```c#
	/*
	- factorial(6) = 720
	- factorial(7) = 5040
	- factorial(8) = 40320
	*/
	public int factorial(int n)
	{
		if(num <= 0) return 0;
		else if(num == 1) return 1;
		else
		{
			return (n * factorial(n - 1));
		}
	}
	```

## Fibonacci <a name="fibonacci"></a>

---

![Fibonacci](_asset/img/3.png)

* `big-o`

	![Fibonacci](_asset/img/1.png)

* demo - `value - recursive`:

	```c#
	public int fib(int n)
	{
		if(num <= 0) return 0;
		else if(num == 1) return 1;
		else
		{
			return (fib(n - 1) + fib(n - 2));
		}
	}
	```

	vs. `iterative`

	```c#
	static public int GetValueIterative(int numPos)
	{
		/*
		* e.g.
		* What's Nth value of Fibonacci series?
		* so:
		* Find 8th value = FibonacciValueRecursive(8) = 13!
		*/

		int index = numPos - 1;

		int[] fib = new int[numPos];
		fib[0] = 0;
		fib[1] = 1;

		for(int i = 2; i <= index; i++)
		{
				fib[i] = fib[i - 1] + fib[i - 2];
		}

		return fib[index];
	}
	```

* demo - `series - recursive`:

	```c#
	static public void PrintSeriesRecursive(int len)
	{
			// TODO - make this RETURN values (not just print them!)

			/*
			* e.g.
			* FibonacciSeriesRecursive(11);
			* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
			*/

			PrintMemberRecursive(0, 1, 1, len);
	}

	static private void PrintMemberRecursive(int a, int b, int counter, int len)
	{
			if (counter <= len)
			{
					Debug.Log(a);

					PrintMemberRecursive(b, a + b, counter + 1, len);
			}
	}
	```

	vs. `iterative`

	```c#
	static public int[] GetSeriesIterative(int n)
	{
			/*
			* e.g.
			* GetSeriesIterative(9);
			* 0, 1, 1, 2, 3, 5, 8, 13, 21...
			*/

			int a = 0, b = 1, c = 0;
			int[] data = new int[n];
			int dataPos = 0;

			data[dataPos] = a;
			dataPos++;

			if (n == 0) return data;

			data[dataPos] = b;
			dataPos++;

			if (n == 1) return data;

			for(int i= 2; i < n; i++)
			{
					c = a + b;

					data[dataPos] = c;
					dataPos++;

					a = b;
					b = c;
			}

			return data;
	}
	```