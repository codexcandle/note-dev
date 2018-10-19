* [overview](#overview)
* [property](#property)
* [method](#method)
* [example](#example)

## Overview <a name="overview"></a>

---

* represents a collection of key-and-value pairs that are sorted by the keys and are accessible by key and by index.
* a sorted list is a combination of an array and a hash table. It contains a list of items that can be accessed using a key or an index. If you access items using an index, it is an ArrayList, and if you access items using a key, it is a Hashtable. The collection of items is always sorted by the key value.

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
	001: Zara Ali
	002: Abida Rehman
	003: Joe Holzner
	004: Mausam Banazir Nur
	005: M. Amlan
	006: M. Arif
	007: Ritesh Saikia
	008: Nuha Ali
	*/
	using System;
	using System.Collections;

	namespace CollectionsApplication
	{
		class Program
		{
			static void Main(string[] args)
			{
					SortedList sl = new SortedList();

					sl.Add("001", "Zara Ali");
					sl.Add("002", "Abida Rehman");
					sl.Add("003", "Joe Holzner");
					sl.Add("004", "Mausam Benazir Nur");
					sl.Add("005", "M. Amlan");
					sl.Add("006", "M. Arif");
					sl.Add("007", "Ritesh Saikia");

					if (sl.ContainsValue("Nuha Ali"))
					{
						Console.WriteLine("This student name is already in the list");
					}
					else
					{
						sl.Add("008", "Nuha Ali");
					}

					// get a collection of the keys.
					ICollection key = sl.Keys;

					foreach (string k in key) {
						Console.WriteLine(k + ": " + sl[k]);
					}
			}
		}
	}
	```

###### REF

---

* tutorials-point - [`c# - sorted-list`](https://www.tutorialspoint.com/csharp/csharp_sortedlist.htm)