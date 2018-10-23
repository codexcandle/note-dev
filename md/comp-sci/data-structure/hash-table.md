* [overview](#overview)
  * [pro vs. con](#pro-v-con)
  * [runtime](#runtime)
  * [property](#property)
  * [method](#method)
* [hashing](#hashing)
  * [hash-function](#hash-function)
  * [collision](#collision)
* example
  * [word-prob](#word-prob)
  * [code](#code)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/01.png)

* aka `HASH MAP`- key-value lookup (via "associative array" abstract data type).
* `can contain linked-lists` - rather than storing just simple values, hash-tables often contain LISTS of key-value pairs.

  While hash-tables are great because you can have immediate lookup to a value (assuming table has unique node for each value), they otherwise use a linked-list for keys that share the same index.  Why would you have keys share the same index?To save space! -  and if you have a set list length, and want to `pack` the data in as you go `assigning` values.  Then once you found the correct index for an item in the list, you traverse that `linked list` to lookup if node value equals your desired value.

* [more @ wikipedia](https://en.wikipedia.org/wiki/Hash_table)

## Pro vs Con <a name="pro-v-con"></a>

---

### pro

* `speedy!` - for any problem, have hash tables at the top of your mind! Often used to index large amounts of data, their main advantage (vs other table data structures) is speed. This is more apparent when the # of entries is large. They are particularly efficient - when the max # of entries can be predicted in advance, so that the bucket array can be allocated once with the optimum size & never resized. Hash tables are (on average) more efficient than search trees or any other table lookup structure.  Thus, used in many kinds of computer software, particularly for associative arrays, database-indexing, caches, & sets.

### con

* `not effective when # of entries is very small.` - although operations on a hash table take constant time on average, the cost of a good hash function can be significantly higher than the inner loop of the lookup algorithm for a sequential list or search tree. (However, in some cases the high cost of computing the hash function can be mitigated by saving the hash value together with the key.)
* `entries can be enumerated efficiently (at constant cost per entry), but only in some pseudo-random order.` - there is no efficient way to locate an entry whose key is nearest to a given key. Listing all n entries in some specific order generally requires a separate sorting step, whose cost is proportional to log(n) per entry. In comparison, ordered search trees have lookup and insertion cost proportional to log(n), but allow finding the nearest key at about the same cost, and ordered enumeration of all entries at constant cost per entry.
* `may be no easy way to enumerate the keys that are present in the table at any given moment.` - if the keys are not stored (because the hash function is collision-free).
* `become quite inefficient when there are many collisions.` - while extremely uneven hash distributions are extremely unlikely to arise by chance, a malicious adversary with knowledge of the hash function may be able to supply information to a hash that creates worst-case behavior by causing excessive collisions, resulting in very poor performance, e.g., a denial of service attack. In critical applications, a data structure with better worst-case guarantees can be used; however, universal hashing—a randomized algorithm that prevents the attacker from predicting which inputs cause worst-case behavior—may be preferable. (The hash function used by the hash table in the Linux routing table cache was changed with Linux version 2.4.2 as a countermeasure against such attacks.)

## Runtime <a name="runtime"></a>

---

* `good` (hashtable)

  ```txt
  // generally what we assume for interviews?
  // Insertion, deletion, & retrieval occur in constant time
  `O(1)` (constant)
  ```

* `bad` (hashtable)

  ```txt
  // i.e. lots of collisions
  `O(n)` (linear)
  ```

## Property <a name="property"></a>

---

![Proeprty](_asset/img/02.png)

## Method <a name="Method"></a>

---

![Method](_asset/img/03.png)

## Hashing <a name="hashing"></a>

---

* the idea of hashing is to distribute the entries (key/value pairs) across an array of buckets. Given a key, the algorithm computes an index that suggests where the entry can be found.
* a good hash function and implementation algorithm are essential for good hash table performance, but may be difficult to achieve.
* hash collisions are practically unavoidable when hashing a random subset of a large set of possible keys.

### hash-function <a name="hash-function"></a>

---

* each hash-table has a hash function, a calculation applied to a key to transform it into an address.  It's used to assign keys to specific indices, then to be able to do subsequent look-ups via this same hash function logic. Should:

  - minimize collisions
  - uniform distribution of hash values
  - easy to calculate
  - resolve any collisions

* `ideally` - the hash function will assign each key to a unique bucket. In a well-dimensioned hash table, the average cost (# of instructions) for each lookup is independent of the # of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized) constant average cost per operation.  Importantly, if the set of key-value pairs is fixed and known ahead of time (so insertions and deletions are not allowed), one may reduce the average lookup cost by a careful choice of the hash function, bucket table size, and internal data structures. Thusly, one can devise a hash function that's collision-free, or even perfect. (In this case the keys need not be stored in the table.)
* `in reality` - however, most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key.  Such collisions must be accommodated in some way.
* keys
  
  `numeric`
  ```txt
  Divide the key by the # of available addresses (n), 
  & take the remainder:
  // address = Key Mod N
  ```

  `alpha-numeric`
  ```txt
  #1
  Divide the sum of ASCII codes (in a key) by # of available addresses.

  #2 `folding` method
  Divides the key into equal parts, then adds them together:
  // e.g. telephone #014528345654
  // 01 +45 + 28 + 34 + 56 + 54 = 218
  
  (Depending on size of the table, may then divide by some constant & take remainder.)
  ```  

### collision <a name="collision"></a>

---

* `addressing` - when assigning values to an index in your array, per your hash-table, you could run into a case where the node already has a value assigned to it.  2 ways to handle, open v closed addressing.

  `Open` - you see that the target is filled, so you move down the list, to the next node, and if it's empty, assign here instead.  If it's filled, as well, then repeat, and move to next node down the list.  This is called doing a "Linear Search" (which will grow with size of input list).

  `Closed` - has the node instead have a pointer to the first item in a linked-list. (?)

  (NOTE: As long as "load factor" is relatively low, open-addressing (with linear searching) may actually be more efficient.)

* `load factor` - to allow room for the array to “assign” new values as needed, the array is often made LARGER than needed.  This intended “extra array space” allows calculation of the hash-tables “Load Factor”:

  ```txt
  // load factor = (# of items stored / size of array)
  // e.g.
  // 50 / 100 (50 items, in an array of 100 nodes)
  // ½ = 50%
  ```

### EX <a name="example"></a>

---

* word-prob <a name="word-prob"></a>

  Q:\
  You have 100 students names. You have an array with 11 slots.
  How could you use a hash function to pack the data?

  A:\
  Use a formula like:\
  `index # = sum ASCII codes % (mod) (size of array)`

  So, student name `Ada`, would be assigned to position `9`:
  
  > `Ada = (65 + 100 + 97) = 262`\
  > `Ada = 262 % 11`\
  > `Ada = 9`\

* code #1 - `basic` <a name="code"></a>

  ```c#
  using System;
  using System.Collections;

  namespace CollectionsApplication
  {
    class Program
    {
      static void Main(string[] args)
      {
        Hashtable ht = new Hashtable();

        ht.Add("001", "Zara Ali");
        ht.Add("002", "Abida Rehman");
        ht.Add("003", "Joe Holzner");
        ht.Add("004", "Mausam Benazir Nur");
        ht.Add("005", "M. Amlan");
        ht.Add("006", "M. Arif");
        ht.Add("007", "Ritesh Saikia");

        if(ht.ContainsValue("Nuha Ali"))
        {
          Console.WriteLine("This student name is already in the list");
        }
        else
        {
          ht.Add("008", "Nuha Ali");
        }

        // Get a collection of the keys.
        ICollection key = ht.Keys;

        foreach(string k in key)
        {
          Console.WriteLine(k + ": " + ht[k]);
        }
        Console.ReadKey();
      }
    }
  }
  ```

* code #2

  ```c#
  // hash function
  int hashCode(String s)
  {
    // some computation
  }
  ```

  ```c#
  // set / get
  // hashtable.put(“Mary”, new Person())
  // hashtable.get(“Mary”)
  class Hashtable
  {
    // list of person objects
    LinkedList[] data;

    bool put(String key, Person value)
    {
      int hashcode = getHashCode(key)
      int index = convertToIndex(hashCode)
      LinkedList list = data[index];

      // check for dupes

      list.insert(key.value);
    }
  }
  ```