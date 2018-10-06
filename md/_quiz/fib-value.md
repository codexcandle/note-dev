## Q
What's Nth value of Fibonacci series?

## A

* `value - recursive`:

	```c#
	/*
	* e.g.
	* Find 8th value = FibonacciValueRecursive(8) = 13!
	*/
	public int FibValueRecursive(int n)
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
	static public int FibValueIterative(int numPos)
	{
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

###### FURTHER
[fibonacci](./../../../comp-sci/algorithm/recursion/#fibonacci)