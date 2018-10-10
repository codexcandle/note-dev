* [overview](#overview)
* notation
	* [n](#n-notation)
	* [greek-letter](#greek-letter-notation)
	* [asymptotic](./a-notation)
* [example](#example)

## Overview <a name="overview"></a>

---

> The asymptotic upper limit of a function, or upper bound, of the complexity in the WORST case, helping to quantify performance as the input size becomes ARBITRARILY LARGE.

* aka `Big-O Asymptotic Analysis`
* specifically describes `worst-case scenario`
* used for algorithm performance comparison - used to describe the execution time, or the space used (e.g. memory or on disk), of an algorithm.
* [more @ wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)

## N-Notation <a name="n-notation"></a>

---

> An analysis going to infinity...

* describes time complexity of an algorithm.
* allows you to compare different algorithms; denoting run times.
* `n` - is represented as a function of `n` (where n this is usually the # of input / output values.) `n` is used is because it will show you how the program will react to increasing amounts of data.  (You can't predict how many pieces of data your program will require, so you compare it along the graph.)

  ![N-Notation](_asset/img/9.png)

  ![N-Notation](_asset/img/10.png)  

## "Greek Letter" Notation <a name="greek-letter-notation"></a>

---

> Almost all people are Big O (slowest person alive), while almost no one is Big O (fastest person alive), except for the actual fastest person alive.

* as below:

  !["Greek Letter" Notations](_asset/img/4.png)

* you usually don't use `n` by itself; typically, you tie it together with a Greek letter to give it some context. Rarely does your program operate at the same timing for every single step.  So instead of having exact values, you look at them in `boundaries`., or cases in which the are greater, less than, or rqual:

  ![Greek Letter Notation](_asset/img/10.png)  

  ![Greek Letter Notation](_asset/img/11.png)

  ![Greek Letter Notation](_asset/img/12.png)  

  ![Greek Letter Notation](_asset/img/23.png)

  ![Greek Letter Notation](_asset/img/24.png)

  ![Greek Letter Notation](_asset/img/25.png)

  ![Greek Letter Notation](_asset/img/26.png)

  ![Greek Letter Notation](_asset/img/27.png)

## EX <a name="example"></a>

---

* word problem #1 <a name="word-problem"></a>

  ![Example](_asset/img/15.png)

* word problem #2

  ![Example](_asset/img/16.png)

* word problem #3

  ![Example](_asset/img/21.png)