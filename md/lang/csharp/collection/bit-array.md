* [overview](#overview)
* [property](#property)
* [method](#method)
* [example](#example)

## Overview <a name="overview"></a>

---

* manages a compact array of bit values, which are represented as Booleans, where true indicates that the bit is on (1) and false indicates the bit is off (0).
* used when you need to store the bits but do not know the number of bits in advance. You can access items from the BitArray collection by using an integer index, which starts from zero.

## Property <a name="property"></a>

---

![Proeprty](_asset/img/1.png)

## Method <a name="Method"></a>

---

![Method](_asset/img/2.png)

![Method](_asset/img/3.png)

### EX <a name="example"></a>

---

* demo:

	```c#
	/*
	e.g.
	Bit array ba1: 60
	False False True True True True False False
	Bit array ba2: 13
	True False True True False False False False
	Bit array ba3 after AND operation: 12
	False False True True False False False False
	Bit array ba3 after OR operation: 61
	True False True True False False False False
	*/
	using System;
	using System.Collections;

	namespace CollectionsApplication
	{
		class Program
		{
			static void Main(string[] args)
			{
					//creating two  bit arrays of size 8
					BitArray ba1 = new BitArray(8);
					BitArray ba2 = new BitArray(8);

					byte[] a = { 60 };
					byte[] b = { 13 };

					//storing the values 60, and 13 into the bit arrays
					ba1 = new BitArray(a);
					ba2 = new BitArray(b);

					//content of ba1
					Console.WriteLine("Bit array ba1: 60");

					for(int i = 0; i < ba1.Count; i++)
					{
						Console.Write("{0, -6} ", ba1[i]);
					}
					Console.WriteLine();

					//content of ba2
					Console.WriteLine("Bit array ba2: 13");

					for(int i = 0; i < ba2.Count; i++)
					{
						Console.Write("{0, -6} ", ba2[i]);
					}
					Console.WriteLine();
					BitArray ba3 = new BitArray(8);
					ba3 = ba1.And(ba2);

					//content of ba3
					Console.WriteLine("Bit array ba3 after AND operation: 12");

					for(int i = 0; i < ba3.Count; i++)
					{
						Console.Write("{0, -6} ", ba3[i]);
					}
					Console.WriteLine();
					ba3 = ba1.Or(ba2);

					//content of ba3
					Console.WriteLine("Bit array ba3 after OR operation: 61");

					for(int i = 0; i < ba3.Count; i++)
					{
						Console.Write("{0, -6} ", ba3[i]);
					}
					Console.WriteLine();

					Console.ReadKey();
			}
		}
	}
	```

###### REF

---

* tutorials-point - [`c# - bit-array`](https://www.tutorialspoint.com/csharp/csharp_bitarray.htm)