* [overview](#overview)
* [binary](#binary)
* example
  * [pseudo-code](#pseudo-code)
  * [code](#code)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Category:Search_algorithms)

## Binary <a name="binary"></a>

---

* `binary search` - used to search `sorted` data sets.

	Works by selecting the middle of the data set, & compares it against a target value. If values match, it will return success. If target value is higher than the value of the probe element, it will take the upper half of the data-set & perform the same operation against it. If lower than the value of the probe element, it will perform the operation against the lower half.  (It will continue to halve the data-set w/ each iteration until the value has been found or until it can no longer split the data-set.)

* `logarithmic` - this type of algorithm is O(log N).

	The iterative halving of data-sets described in the binary search example produces a growth curve that peaks at the beginning, & slowly flattens out as the size of the data-sets increase (e.g. An input data-set containing 10 items takes two seconds, & a data-set containing 1000 items will take 2 secs.  Doubling the size of the input data-set has little effect on its growth as after a single iteration of the algorithm, the data-set will be halved & therefore on par w/ an input data-set half the size. `This makes algorithms like binary search extremely efficient when dealing w/ large data-sets.`

## EX <a name="example"></a>

---

* pseudo-code <a name="pseudo-code"></a>

	1. In each step, compares the search key w/ the value of the middle element of the array.

	2. The keys matching in step `1` means, a matching element has been found & its index (or position) is returned. Else step `3` or `4`.

	3. If the search key is less than the middle element, then the algorithm repeats its action on the sub-array to the left of the middle element or,

	4. If the search key is greater than the middle element, then the algorithm repeats its action on the sub-array to the right of the middle element.

	5. If the search key is not matching any of the subsequent left or right array, then it means that the key is not present in the array & a special `Nil` indication can be returned.

	```c#
	lo = 0;
	hi = n – 1;
	While lo <= hi Do
		mid = (lo + hi) / 2
		If array[mid] == value:  return mid
		Else If array[mid] < value: lo = mid + 1
		Else If array[mid] > value: hi = mid – 1
		return -1
	```

* code #1 - `iterative` <a name="code"></a>

	```c#
	/*
	e.g.
	=============
	int []arr = {2, 3, 4, 10, 40};
	int n = arr.Length;
	int x = 10;
	int result = BinarySearchIterative(arr, x);
	if(result == -1)
		Console.WriteLine("Element not present");
	else
		Console.WriteLine("Element found at " + "index " + result);
	*/
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

* code #2 - `recursive`

	```c#
	// e.g.
	// =============
	// ... (see above)
	// int result = (int)(BinarySearchRecursive(arr, x, 0, n - 1));
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
			if (key == midVal)
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

###### REF

---

* c-sharpcorner - [`Binary Search Implementation Using C#`](https://www.c-sharpcorner.com/blogs/binary-search-implementation-using-c-sharp1)