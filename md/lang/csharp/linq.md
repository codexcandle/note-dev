* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Language_Integrated_Query)
* [more @ dotnetpearls](https://www.dotnetperls.com/linq)

## EX <a name="examples"></a>\

---

  ```c#
		List<int> nums = new List<int>{22, 32, 54};
		List<int> odds = nums.where(n => n % 2 == 1).ToList();
		// now odds is equal to 11 and 37
  ```

  ```c#
		// all the elements that = 6
		someCollection.Where(element => element == 6);
		// double each of the elements
		someCollection.Where(element => element * 2);
  ```

* increment an array (with LINQ)

	Say you want to use my anonymous function to increment an array of counters when a tick passes in your game.

  ```c#
		int[] counters = new int[] {0, 1, 2, 3};

		int[] tick(int[] counters) {
			int[] ret = new int[counters.Length];
			for(int i = 0; i < counters.Length; i++) {
				ret[i] = counters[i] + 1;
			}
			return ret;
		}

		tick(counters);
  ```

	You could iterate over the array, incrementing each of the counters one at a time, or use LINQ expressions to map a function that increments an element over the array.

  ```c#
		int[] tick(int[] counters) {
			return counters.Select(x => x + 1).ToArray();
		}
  ```

	This approach has the benefit of avoiding an intermediate temporary variable to hold the returned array. It also avoids potential errors in writing the for statement. It will never be off by one.

	I find the use of higher order functional style, the LINQ expression, easier to read than the imperative style, the for statement.

	One final thing to point out is that Select() returns an IEnumerable, so you have to call its .ToArray method to return the proper integer array for the tick function.