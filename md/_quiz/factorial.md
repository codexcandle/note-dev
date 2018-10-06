## Q
Write an algorithm to find `factorial 6`?

## A

* `value - recursive`:

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

###### FURTHER
[factorial](./../../../comp-sci/algorithm/recursion/#factorial)