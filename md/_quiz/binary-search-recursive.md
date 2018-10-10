## Q
Write an algorithm do a binary search USING recursion.

## A

```c#
private static object BinarySearchRecursive(int[] arr,
											int key,
											int min,
											int max)
{
	if(min > max)
	{
		return "Nil";
	}
	else
	{
		int midIndex = (min + max) / 2;
		int midVal = arr[midIndex];
		if(key == midVal)
		{
			return midIndex;
		}
		else if(key < midVal)
		{
			return BinarySearchRecursive(arr, key, min, midIndex - 1);
		}
		else
		{
			return BinarySearchRecursive(arr, key, midIndex + 1, max);
		}
	}
}
```

###### FURTHER
[search](./../../comp-sci/algorithm/search/#code)