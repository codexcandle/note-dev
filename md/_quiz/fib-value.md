## Q

Write a method `Fib` that takes an integer `n` & returns the `nth` Fibonacci number.

<i>Let's say our Fibonacci series is 0-indexed & starts with `0`:</i>

	Fib(0);  // => 0
	Fib(1);  // => 1
	Fib(2);  // => 1
	Fib(3);  // => 2
	Fib(4);  // => 3

## A

* `recursive`:

	```c#
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

* `iterative`

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