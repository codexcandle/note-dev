* [overview](#overview)
	* [rules](#rules)
* [constant](#constant)
* [linear](#linear)
* [logarithmic](#logarithmic)
* [linearithmic](#linearithmic)
* [quadratic](#quadratic)
* [cubic](#cubic)
* [n^4 (?)](#fourth)
* [exponential](#exponential)
* [factorial](#factorial)
* [infinity](#infinity)

## Overview <a name="overview"></a>

---

* possible time values:

	```markdown
	/*
	n = the size of the input complexities,
	ordered in from smallest to largest
	*/
	Constant:       0(1)
	Logarithmic:    0(log(n))
	Linear:         0(n)
	Linearithmic:   0(nlog(n))
	Quadric:        0(n^2)
	Cubic:          0(n^3)
	Polynomial:		n^(0(1))
	Exponential:    2^(0(n)) [or 0(b^n), b > 1]
	Factorial:      0(n!)
	```

  ![Overview](_asset/img/2.png)

  ![Overview](_asset/img/3.png)  
  
  ![Overview](_asset/img/5.png)

  ![Overview](_asset/img/18.png)

  ![Overview](_asset/img/19.png)  

  ![Overview](_asset/img/1.png)

  ![Overview](_asset/img/20.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)

### rules <a name="rules"></a>

1. `different steps get added`

	```c#
	// here, bigO = O(a + b)
	function something()
	{
		doStep1(); 	// O(a);
		doStep2();	// O(b);
	}
	```

2. `drop the constants`

	```c#
	// definition:		O(n + c) = O(n)
	/*
	SCENARIO:
	Say you have a function that has an input array.  

	Inside the method, there is a foreach loop that
	iterates over the array.  This would naturally
	give you "OH of N; Linear; (O(n))" for the Big O value.
	Assume you have another foreach loop right after,
	doing the same thing, but some other simple data
	operation.  You would assume you would add these
	2 separate “linear” segments, but actually we
	ignore constants, since we just care to describe
	the "trend" of the output time curve, and not
	about specific values.

	EX #1:
	// O(2n)? 
	// Nope! - O(n)!
	O(n) + O(n)

	EX #2:
	f(n) = 7log(n^3) + 15n^2 + 2n^3 + 8
	O(f(n)) = O(n^3)
	```

	`2n` versus `n`:

	![Rules](_asset/img/22.png)

3. `different inputs, different variables`

	```c#
	// (O(n^2))? (OH of N Squared)
	// Nope! - O(a * b)! // "OH of A times B"
	// what is "N"?  this makes no sense!
	int intersectionSize(arrayA, arrayB)
	{
		int count = 0
		for a in arrayA
		{
			for b in arrayB
			{
				if a == b
				{
					count = count + 1
				}
			}
		}
		return count;
	}
	```

4. `drop non-dominant terms`

	```c#
	// O(n^2) <= O(n + n^2) <= O(n^2 + n^2)
	// if LEFT and RIGHT are equivalent (see above; see RULE #2), then CENTER is too
	// O(n + n^2) = O(n^2)
	function something(array)
	{
		max = NULL

		// THIS CHUNK BIG O = [O(n)] ("OH of N")	
		for each a in array
		{
			max = MAX(a, max)
		}
		print max

		// THIS CHUNK BIG O = [O(n^2)] ("OH of N squared")	
		for each a in array
		{
			for each b in array
			{
				print a, b
			}
		}
	}
	```

## Constant <a name="constant"></a>

---

> A carrier pigeon transporting usb sticks vs a slow internet; add more data, and bird still gets there in same time.

* aka `O(1)`, or `Oh of 1`, or `constant time w/ respect to input size`
* will always execute in same time (or space) regardless of input data set size
* demo #1

	```c#
	a = b + 1
	// or...
	y = x + 1
	```

* demo #2

	```c#
	bool IsFirstElementNull(IList<string> elements)
	{
		return elements[0] == null;
	}
	```

* demo #3

	```c#
	// tricky one(s) here! - b/c DO NOT EVEN contain a ref to “n”!
	a = 1;
	b = 2;
	c = a + 5*b
	```

* demo #4

	```c#
	i=0;
	while i < 11 Do
		i = i + 1;
	```

## Linear <a name="linear"></a>

---

> In pigeon example, internet scales `linearly` (add more data, & it takes slightly longer).

* aka `O(n)` - `Oh of N` (where N is the size of the array) - `scales linearly w/ respect to amount of input`
* demo #1

	```txt
	SCENARIO:
	Looking through a rack of shirts (un-ordered) to find a specific shirt.

	RESULT:
	At worst case, you'll have to search the whole set; thus linear to the size of the input set.
	```

* demo #2

	```c#
	Q:
	big-O for mowing a lawn?

	A:
	`O(a)` (where `a = area` of yard).  

	NOTE:
	equivalent to `O(s^2)` (where s=side of yard) since `a = side x side`. 
	```

* demo #3

	```c#
	// loop
	for(c = 0; c < n; c++)
	{
		a += 1;
	}
	```

* demo #4

	```c#
	/*
	below demonstrates how Big-O favours worst-case performance scenario
	since a matching string could be found in any iteration of the for-loop,
	& the function would return early.

	But! - Big-O will always assume the upper limit where the algorithm will
	perform the max # of iterations
	*/
	boolean contains(array.x)
	{
		foreach element in array
		{
			if element == x
			{
				return true;
			}
		}
	}
	```

* demo #5

	```markdown
	Q:
	What if you had an unordered list, & you had to
	search for a given term (e.g. 7).  What would be
	the Big-O if you wrote an algorithm to traverse
	this list to check?

	A:
	`O(n)` - or linear b/c you'd assume "worst case scenario".
	```

* demo #6

	```c#
	// O(f(n)) = O(n)
	i = 0;
	while i < n Do
		i = i + 1;

	// or...

	// f(n) = n / 3
	// so still, O(f(n)) = O(n)
	i = 0;
	while i < n Do
		i = i + 3;
	```

* demo #7

	* for `SINGLE for` loops => `O(n)`

	```c#
	// => O(n)
	for each (data in data list)
	{
		// Print data to Screen
	}
	```

## Logarithmic <a name="logarithmic"></a>

---

> ... divide & conquer

* aka `O(log(n))` - `Oh of Log of N` (where N is the size of the array) - `scales logarithmically w/ respect to amount of input`
* `theoretical limit` for searching a data set.
* is `log base 2`
* `sorted` data should be used.
* demo #1

	```c#
	// “divide & conquer” (divide in half)
	while(n > 1)
	{
		n=n / 2;
	}
	```

* demo #2

	```markdown
	Q:
	Suppose you have a SORTED array, & you want to find the
	index of a particular value in the array, if it exists.  
	What is the time complexity of the following algorithm?

	A:
	Since a binary search, is Logarithmic!
	```

## Linearithmic <a name="linearithmic"></a>

---

* aka `O(n * log(n))` - `Oh of N times Log of N` (where N is the size of the array) - `scales linearithmically(?) w/ respect to amount of input`
* sorting algorithms (?) - `Mergesort`, `Quicksort`, `SelectionSort`
* demo

	```markdown
	Q:
	You have 3 shirts, &  finding out where they belong (placed back in store)?

	A:
	Since the store is SORTED (you go to each section, then sub-section),

	= (shirt count) * log(n)
	= 3 * log(n)
	```

## Quadratic <a name="quadratic"></a>

---

* aka `O(n^2)` - `Oh of N squared` (where N is the size of the array) - `scales quadratically w/ respect to amount of input`
* demo #1

	```c#
	// DOUBLE loop
	// common w/ nested iterations, see cubic, etc...  
	for(c = 0; c < n; c++)
	{
		for(i = 0; i < n; i++)
		{
			a += 1;
		}
	}
	```

* demo #2

	```c#
	// checking shopping list against grocery cart
	```

* demo #3

	```c#
	for(i = 0; i < n; i = i + 1)
		for(j = 1; j < n; j = j + 1)
	// so the question then becomes what is:
	// (n) + (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1
	// remarkably, this turns out to be n(n+1)/2, so:
	// = O(n(n+1)/2)
	// = O(n^2/2 + n/2)
	// = O(n^2)
	```

* demo #4

	```c#
	i = 0
	While i < n Do
		j = 0
		While j < 3 * n Do
			j = j + 1
		j = 0
		While j < 2 * n Do
			j = j + 1
		i = i + 1
	// f(n) = n * (3n + 2n) = 5n^2
	// O(f(n)) = O(n^2)
	```

* demo #5

	```c#
	Q:
	You have 2 unordered sets -
	(3 shirts then 3 pants - so 2 unordered sets, with same count)

	A:
	Trying to match a single shirt first, 
	you have to check against all 3 pairs of pants.
	You have to do above step for each shirt Thus:

	= 3 + 3 + 3 = 9
	= 3 * 3 = 9
	= 3 ^ 2
	= f(n) = O(n^2)

	NOTE:
	Similar to O(n*m), which is just with unordered list -
	so 2 shirts, and 3 pairs of pants. Thus:

	= 2 + 2 + 2 = 6
	= 3 * 2 = 6
	```

* demo #6

	```c#
	Q:
	void printPairs(array)
	{
	    foreach x in array
	    {
	        foreach y in array
	        {
	            print x, y
	        }
	    }
	}

	A:
	Tricky one here! - `O(n^2)` (Oh of N Squared)
	(- will print `(5, 2)` & `(2, 5)` - both orders.)

	Note:
	Maybe should be under `quadratic` section?
	- keeping here until can confirm O(n) == O(n^2)?
	```		

* demo #7

	```txt
	Q:
	n^2 + nlog(n) + n + 1

	A:
	= O(n^2)
	```

  ![Quadratic](_asset/img/6.png)

## Cubic <a name="cubic"></a>

---

* aka `O(n^3)` - `Oh of N cubed` (where N is the size of the array) - `scales cubically w/ respect to amount of input`
* demo #1

	```c#
	// TRIPLE loop
	for(c = 0; c < n; c++)
	{
		for(i = 0; i < n; i++)
		{
			for(x = 0; x < n; x++)
			{
				a += 1;
			}
		}
	}
	```

* demo #2

	```txt
	`n^2 + n^2 + n^2 + n^3 => O(n^3)`
	```

  ![Cubic](_asset/img/7.png)

  ![Cubic](_asset/img/8.png)

## n^4 (?) <a name="fourth"></a>

---

* aka `O(n^4)`
* demo

	```c#
	Q:
	i = 0
	While i < 3 * n Do
		j = 10
		While j <= 50 Do
			j = j + 1
			j = 0
			While j <= n * n * n Do
				j = j + 2
				i = i + 1

	A:
	= f(n) = 3n * (40 + n^3/2) = 3n/40 + 3n^4/2
	= O(f(n)) = O(n^4)
	```

## Exponential <a name="exponential"></a>

---

* aka `O(2^N)`- `Oh of 2 to the N` (where N is the size of the array) - `scales exponentially w/ respect to amount of input`
* growth `doubles` with each addition to the input data set, start off very shallow, then rise meteorically.
* demo #1

	```txt
	Exhaustive search! (i.e. trying to break a password, generating all possible combinations)
	```

* demo #2

	```txt
	// finding ALL subsets of a set
	```

* demo #3

	```c#
	// the recursive calculation of Fibonacci #s
	int Fibonacci(int num)
	{
		int(num <= 1) return num;

		return Fibonacci(number – 2) + Fibonacci(num – 1);
	}
	```

## Factorial <a name="factorial"></a>

---

* aka `O(n!)` - `Oh of N factorial` (where N is the size of the array)
* demo

	```c#
	// finding all permutations of a string
	```

## Infinity <a name="infinity"></a>

---

* aka `O(infinity)`
* demo

	```txt
	Q:
	- flipping a coin!

	A:
	Big-O assumes WORST case scenario, so you could flip forever (theoretically)
	if you expected to get a heads / tails.
	```