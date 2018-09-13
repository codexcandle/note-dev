* [overview](#overview)
* [n-notation](#n-notation)
* [asymptotic notations](#asymptotic-notations)
	1. [constant](#constant)
	2. [linear](#linear)
	3. [logarithmic](#logarithmic)
	4. [linearithmic](#linearithmic)
	5. [quadratic](#quadratic)
	6. [cubic](#cubic)
	7. [to the 4th?](#fourth)
	8. [exponential](#exponential)
	9. [factorial](#factorial)
	10. [infinity](#infinity)
* [greek-letter notation](#greek-letter-notation)
* [more arithmetic examples](#more-arithmetic-examples)
* [rules review](#rules-review)

## Overview <a name="overview"></a>

---

> The asymptotic upper limit of a function, or upper bound, of the complexity in the WORST case, helping to quantify performance as the input size becomes ARBITRARILY LARGE.

* aka `Big O Asymptotic Analysis` / Computational Complexity Analysis.
* used for algorithm performance comparison - an equation that describes how the run time scales with respect to some input variables.
* specifically describes the `worst-case scenario` - or the efficiency of SETTING + GETTING data from a DATA STORE (e.g. In-memory, database, sql, nosql).  Used to describe the execution time, or the space used (e.g. memory or on disk), of an algorithm.
* [more @ wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)

## N-Notation <a name="n-notation"></a>

---

> An analysis going to infinity...

* describes the time complexity of an algorithm.
* allows you to compare different algorithms; denoting run times.
* is represented as a function of `n`  - where n this is usually the # of input / output values.
* the reason why `n` is used is because it will show you how the program will react to increasing amounts of data.  (You can't predict how many pieces of data your program will require, so you compare it along the graph.)

  ![N-Notation](_asset/img/9.png)

  ![N-Notation](_asset/img/10.png)  

## Asymptotic Notations <a name="asymptotic-notations"></a>

---

* possible time values:

    ```markdown
		/*
		n = the size of the input complxities...
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

  ![Asymptotic Notations](_asset/img/20.png)

  ![Asymptotic Notations](_asset/img/1.png)

  ![Asymptotic Notations](_asset/img/2.png)

  ![Asymptotic Notations](_asset/img/3.png)  
  
  ![Asymptotic Notations](_asset/img/5.png)

  ![Asymptotic Notations](_asset/img/18.png)

  ![Asymptotic Notations](_asset/img/19.png)  

### constant <a name="constant"></a>

> A carrier pigeon transporting usb sticks vs a slow internet; add more data, and bird still gets there in same time.

* aka:

```markdown
	* O(1)
	* “Oh of 1”
	* "constant time w/ respect to input size"
```

* will always execute in same time (or space) regardless of input data set size
* some examples:

	```c#
		a = b + 1
		// or...
		y = x + 1
	```

	```c#
		bool IsFirstElementNull(IList<string> elements)
		{
			return elements[0] == null;
		}
	```

	```c#
		// tricky one(s) here! - b/c DO NOT EVEN contain a ref to “n”!
		a = 1;
		b = 2;
		c = a + 5*b
	```

	```c#
		i=0;
		while i<11 Do
			i = i + 1;
	```

### linear <a name="linear"></a>

---

> ...in "pigeon example", the "internet” scales "linearly”; add more data, & it takes slightly longer.

* aka:

```markdown
	* O(n)
	* “Oh of N” (where N is the size of the array)
	* "scales linearly w/ respect to amount of input"
```

* some examples:

	```markdown
		SCENARIO:
		Looking through a rack of shirts (un-ordered) to find a specific shirt.

		RESULT:
		At worst case, you'll have to search the whole set; thus linear to the size of the input set.
	```

	```c#
		/*
		the bigO for mowing a lawn! since O(a) where a=area of yard.  Note, this is equivalent to O(s^2) where s=side of yard, since a=side x side.  And O(a) = O(s^2), I think? (per some rule...)
		*/
	```

	```c#
		// loop
		for(c=0;c<n;c++)
		{
			a+=1;
		}
	```

	```c#
		/*
		note, below example demonstrates how BigO favours \
		worst-case performance scenario since a matching \
		string could be found in any iteration of the for \
		loop, and the function would return early, but BigO \
		will always assume the upper limit where the algorithm \
		will perform the max # of iterations
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

	```markdown
		Q:
		What if you had an unordered list, and you had to search for a given term (e.g. 7).  What would be the BigO if you wrote an algorithm to traverse this list to check?

		A:
		O(n) or LINEAR, b/c you'd assume "worst case scenario", so this grows as the list length growth since we'd always assume the "worst case" was finding it in the last iteration, or last element in the list.
	```

	```c#
		i = 0;
		while i<n Do
			i = i + 1;
		// f(n) = n
		// so,
		// O(f(n)) = O(n)

		// or...

		i = 0;
		while i<n Do
			i = i + 3;
		// f(n) = n / 3
		// so still,
		// O(f(n)) = O(n)
	```

### logarithmic <a name="logarithmic"></a>

---

> divide & conquer
> ...is the theoretical limit for searching a data set.
> is log base 2, as well.

* aka:

```markdown
	* O(log(n))
	* “Oh of Log of N” (where N is the size of the array)
	* "scales logarithmically w/ respect to amount of input"
```

* things should be stored in `SORTED` order.
* some examples:

	```c#
		// “divide & conquer”, divide in half 
		while(n>1)
		{
			n=n/2;
		}
	```

	```markdown
		SCENARIO:
		Suppose you have a SORTED array, & you want to find the
		index of a particular value in the array, if it exists.
		
		Q:
		What is the time complexity of the following algorithm?
		
		A:
		Since a binary search, is Logarithmic!
	```

### linearithmic <a name="linearithmic"></a>

---

* aka:

```markdown
	* O(n * log(n))
	* “Oh of N times Log of N” (where N is the size of the array)
	* "scales linearithmically(?) w/ respect to amount of input"
```

* some examples:

```markdown
	// effective sorting algorithms
	// .. Mergesort, Quicksort, SelectionSort (?)
	// ... Merge search, like “deck of cards”
```

```markdown
	// 3 shirts, and finding out where they belong (placed back) in a store
	// 3 times (each shirt) * log(n) since the store is SORTED!, & you go to each section, then sub-section.
	// e.g. Go to shirts section, then go to Men's section, etc - then you'll be getting closer to actual placement with each iterative step.
```

### quadratic <a name="quadratic"></a>

* aka:

```markdown
	* O(n^2)
	* “Oh of N squared” (where N is the size of the array)
	* "scales quadratically w/ respect to amount of input"
```

* some examples:

	```c#
		// DOUBLE loop
		// common w/ nested iterations, see cubic, etc...  
		for(c=0; c<n; c++)
		{
			for(i=0; i<n;i++)
			{
				a+=1;
			}
		}
	```

	```c#
		// checking shopping list against grocery cart
	```

	```c#
		for(i=0; i<n;i=i+1)
			for(j=1;j<n;j=j+1)
		// so the question then becomes what is:
		// (n) + (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1
		// remarkably, this turns out to be n(n+1)/2, so:
		// = O(n(n+1)/2)
		// = O(n^2/2 + n/2)
		// = O(n^2)
	```

	```c#
		i = 0
		While i<n Do
			j=0
			While j<3*n Do
				j=j + 1
			j = 0
			While j<2*n Do
				j=j+1
			i=i+1
		// f(n) = n * (3n + 2n) = 5n^2
		// O(f(n)) = O(n^2)
	```

	```c#
		// you have 2 unordered sets; 3 shirts then 3 pants; basically 2 unordered sets, with same count
		// trying to match a single shirt first, you have to check against all 3 pairs of pants.
		// you have to do above step for each shirt, thus:
		// 3 + 3 + 3 = 9
		// 3 * 3 = 9
		// 3^2
		// f(n) = O(n^2)
		// NOTE: This is similar to O(n*m), which is just with unordered list, so 2 shirts, and 3 pairs of pants....
		// so:
		// 2 + 2 + 2 = 6
		// 3 * 2 = 6
	```

	```c#
		// tricky one here! - "Oh of N Squared", O(n^2)
		// will print (5, 2) & (2, 5) - both orders
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
		// maybe this one should be under “quadratic” section? Keeping here until can confirm O(n) == O(n^2)?
	```		

### cubic <a name="cubic"></a>

* aka:

```markdown
	* O(n^3)
	* “Oh of N cubed” (where N is the size of the array)
	* "scales cubically w/ respect to amount of input"
```

* some examples:

	```c#
		// TRIPLE loop
		for(c=0; c<n; c++)
		{
			for(i=0; i<n;i++)
			{
				for(x=0;x,n;x++)
				{
					a+=1;
				}
			}
		}
	```

### to the 4th? <a name="fourth"></a>

* aka:

```markdown
	* O(n^4)
```

* some examples:

	```c#
		// i=0
		While i<3*n Do
			j=10
			While j<=50 Do
				j=j+1
			j=0
			While j<=n*n*n Do
				j=j+2
			i=i+1
		// f(n) = 3n * (40 + n^3/2) = 3n/40 + 3n^4/2
		// = O(f(n)) = O(n^4)
	```

### exponential <a name="exponential"></a>

* aka:

```markdown
	* O(2^N)
	* “Oh of 2 to the N” (where N is the size of the array)
	* "scales exponentially w/ respect to amount of input"
```

* denotes an algorithm whose growth doubles with each addition to the input data set.
* being an exponential growth curve, you start off very shallow, that rise meteorically.
* some examples:

	```c#
		// exhaustive search
		// ... trying to break a password, generating all possible combinations
	```

	```c#
		// finding ALL subsets of a set
	```

	```c#
		// the recursive calculation of Fibonacci #s
		int Fibonacci(int num)
		{
			int(num <= 1) return num;

			return Fibonacci(number – 2) + Fibonacci(num – 1);
		}
	```		

### factorial <a name="factorial"></a>

* aka:

	```markdown
		* O(n!)
		* “Oh of N factorial” (where N is the size of the array)
	```

* example:

	```c#
		// finding all permutations of a string
	```

### infinity <a name="infinity"></a>

* aka:

	```markdown
		* O(infinity)
	```

* example:

	```c#
		/*
		flipping a coin, b/c BigO assumes WORST case scenario,
		so you could flip forever (theoretically) if you expected 
		to get a heads / tails.
		*/
	```

*example:
// flipping a coin, b/c BigO assumes WORST case scenario, so you could flip forever (theoretically) if you expected to get a heads / tails.

## "Greek Letter" Notation <a name="greek-letter-notation"></a>

---

> Almost all people are Big O(slowest person alive), while almost no one is Big O(fastest person alive), except for the actual fastest person alive.

* as below:

  ![Other Notations](_asset/img/4.png)

* you usually don't use `n` by itself; typically, you tie it together with a Freek letter to give it some context. Rarely does your program operate at the same timing for every single step.  So instead of having exact values, you look at them in `boundaries`., or cases in which the are greater, less than, or rqual:

  ![Greek Letter Notation](_asset/img/10.png)  

  ![Greek Letter Notation](_asset/img/11.png)

  ![Greek Letter Notation](_asset/img/12.png)  

  ![Greek Letter Notation](_asset/img/23.png)

  ![Greek Letter Notation](_asset/img/24.png)

  ![Greek Letter Notation](_asset/img/25.png)

  ![Greek Letter Notation](_asset/img/26.png)

  ![Greek Letter Notation](_asset/img/27.png)  


## More Arithmetic Examples <a name="more-arithmetic-examples"></a>

---

* `n^2 + nlog(n) + n + 1 => O(n^2)`

  ![Arithmetic Examples](_asset/img/6.png)

* `n^2 + n^2 + n^2 + n^3 => O(n^3)`

  ![Arithmetic Examples](_asset/img/7.png)

  ![Arithmetic Examples](_asset/img/8.png)

* for `for` loops => `O(n)`

	```c#
		// => O(n)
		for each (data in data list)
		{
			// Print data to Screen
		}
	```

  ![Arithmetic Examples](_asset/img/13.png)

* for `double for` loops => `O(n^2)`

	```c#
		// n * n...

		// => O(n)
		for each data "N" in data list
		{
			// => O(n)
			// check if data is in list
			for each data "W" in data list
			{
				if N == W prin True;
			}
		}
	```

  ![Arithmetic Examples](_asset/img/14.png)

* next...

  ![Arithmetic Examples](_asset/img/15.png)

* next...

  ![Arithmetic Examples](_asset/img/16.png)

* next...

  ![Arithmetic Examples](_asset/img/17.png)  

* next...

  ![Arithmetic Examples](_asset/img/21.png)

* `2n` versus `n`:

  ![Arithmetic Examples](./impg/22.png)

## Rules Review <a name="rules-review"></a>

---

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