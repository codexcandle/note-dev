* [overview](#overview)
* [binary](#binary)
* [EX](#example)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Category:Search_algorithms)

## Binary search <a name="binary"></a>

---

* a technique used to search `sorted` data sets.
* works by selecting the middle of the data set, essentially the median, & compares it against a target value.  If the values match, it will return success.  If the target value is higher than the value of the probe element, it will take the upper half of the data-set & perform the same operation against it.  Likewise, if the target value is lower than the value of the probe element, it will perform the operation against the lower half.  It will continue to halve the data-set w/ each iteration until the value has been found or until it can no longer split the data-set.
* This type of algorithm is O(log N).  The iterative halving of data-sets described in the binary search example produces a growth curve that peaks at the beginning, & slowly flattens out as the size of the data-sets increase (e.g. An input data-set containing 10 items takes two seconds, & a data-set containing 1000 items will take 2 secs.  Doubling the size fo the input data-set has little effect on its growth as after a single iteration of the algorithm, the data-set will be halved & therefore on par w/ an input data-set half the size.   This makes algorithms like binary search extremely efficient when dealing w/ large data-sets.

## EX <a name="example"></a>

---

* code:

	`Psuedo-code`

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

	`Iterative`

	```c#
	public static int DoBinarySearch(int[] data, int key)
	{
		int min = 0;
		int max = data.Length - 1;

		// sanitize!
		// (ensure sorted array is initially passed)
		for(int i = 1; i <= max; i++)
		{
			if(data[i] < data[i - 1])
			{
				// data is not sorted!
				return -1;
			}
		}

		// search!
		while(min <= max)
		{
			int mid = (min + max) / 2;
			int midVal = data[mid];
			if(key == midVal)
			{
				// (midval + 1) since we're returning numPos
				return midVal++;
			}
			else if (key < midVal)
			{
				max = mid - 1;
			}
			else if (key > midVal)
			{
				min = mid + 1;
			}
		}

		return -1;
	}

	// driver method to test above
	public static void Main()
	{
		int []arr = {2, 3, 4, 10, 40};
		int n = arr.Length;
		int x = 10;
		int result = DoBinarySearch(arr, x);
		if(result == -1)
			Console.WriteLine("Element not present");
		else
			Console.WriteLine("Element found at " + "index " + result);
	}
	```

	`Recursive #1`

	```c#
	public static object BinarySearchRecursive(int [] inputArray,
												int key,
												int min,
												int max)  
    {  
          if (min > max)  
          {  
              return "Nil";  
          }  
          else  
          {  
              int mid = (min+max)/2;  
              if (key == inputArray [mid])  
              {  
                 return ++mid;  
               }  
               else if (key < inputArray [mid])  
               {  
                   return BinarySearchRecursive(inputArray, key, min, mid - 1);  
               }  
               else  
               {  
                  return BinarySearchRecursive(inputArray, key, mid + 1, max);  
               }  
          }  
     }  
	```

	`Recursive #2`

	```c#
	using System;
	class GFG
	{
		// returns index of x if it is present in 
		// arr[l..r], else return -1
		static int binarySearch(int []arr, int l, int r, int x)
		{
			if (r >= l)
			{
				int mid = l + (r - l)/2;

				// If the element is present at the 
				// middle itself
				if (arr[mid] == x)
					return mid;

				// If element is smaller than mid, then 
				// it can only be present in left subarray
				if (arr[mid] > x)
					return binarySearch(arr, l, mid-1, x);

				// Else the element can only be present
				// in right subarray

				return binarySearch(arr, mid+1, r, x);
			}

			// We reach here when element is not present in array
			return -1;
		}

		// Driver method to test above
		public static void Main()
		{
			int []arr = {2, 3, 4, 10, 40};
			int n = arr.Length;
			int x = 10;

			int result = binarySearch(arr, 0, n-1, x);
			if result == -1)
				Console.WriteLine("Element not present");
			else
				Console.WriteLine("Element found at index " + result);
		}
	}
	```