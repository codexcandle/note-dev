## Q
Write an algorithm to do a binary search WITHOUT recursion.

## A

```c#
private static int BinarySearchIterative(int[] arr, int key)
{
	int min = 0;
	int max = arr.Length - 1;

	// sanitize! - ensure sorted array is initially passed
	for(int i = 1; i <= max; i++)
	{
		if(arr[i] < arr[i - 1])
		{
			// data is not sorted!
			return -1;
		}
	}

	// search!
	while(min <= max)
	{
		int midIndex = (min + max) / 2;
		int midVal = arr[midIndex];
		if(key == midVal)
		{
			return midIndex;
		}
		else if(key < midVal)
		{
			max = midIndex - 1;
		}
		else
		{
			min = midIndex + 1;
		}
	}

	return -1;
}
```

###### FURTHER
[search](./../../comp-sci/algorithm/search/#code)