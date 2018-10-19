* [overview](#overview)
* [property](#property)
* [method](#method)
* [example](#example)

## Overview <a name="overview"></a>

---

![example](_asset/img/01.png)

* [more @ tutorials-point](https://www.tutorialspoint.com/csharp/csharp_arraylist.htm)

## Property <a name="property"></a>

---

![Proeprty](_asset/img/02.png)

## Method <a name="Method"></a>

---

![Method](_asset/img/03.png)

![Method](_asset/img/04.png)

![Method](_asset/img/05.png)

### EX <a name="example"></a>

---

* demo:

	```c#
	/*
	Adding some numbers:
	Capacity: 8
	Count: 7
	Content: 45 78 33 56 12 23 9
	Content: 9 12 23 33 45 56 78
	*/
	using System;
	using System.Collections;

	namespace CollectionApplication
	{
		class Program
		{
			static void Main(string[] args)
			{
				ArrayList al = new ArrayList();

				Console.WriteLine("Adding some numbers:");
				al.Add(45);
				al.Add(78);
				al.Add(33);
				al.Add(56);
				al.Add(12);
				al.Add(23);
				al.Add(9);

				Console.WriteLine("Capacity: {0} ", al.Capacity);
				Console.WriteLine("Count: {0}", al.Count);

				Console.Write("Content: ");
				foreach(int i in al)
				{
					Console.Write(i + " ");
				}

				Console.WriteLine();
				Console.Write("Sorted Content: ");

				al.Sort();
				foreach(int i in al)
				{
					Console.Write(i + " ");
				}

				Console.WriteLine();
				Console.ReadKey();
			}
		}
	}
	```