## Q

Write a function which returns the `n`th number in Fibonacci sequences with an input `n`.

## A

* `recursive`

	```c#
	static public void FibSeriesRecursive(int len)
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

* `iterative`

	```c#
	static public int[] FibSeriesIterative(int n)
	{
		/*
		* e.g.
		* FibSeriesIterative(9);
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

###### FURTHER
[fibonacci](./../../../comp-sci/algorithm/recursion/#fibonacci)