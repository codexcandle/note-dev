* [overview](#overview)
* [hashing](#hashing)
* [load factor](#load-factor)
* [pros](#pros)
* [cons](#cons)
* [example](#examples)

## Overview <a name="overview"></a>

* aka `HASH MAP`
* implements - an associative array abstract data type, a structure that can map keys to values.
* [more @ wikipedia](https://en.wikipedia.org/wiki/List_of_data_structures)

* --------------------
-| used to index large amounts of data
-| address of each key calculated using the key itself
-| collisions resolved with OPEN or CLOSED ADDRESSING
-| key-value lookup
-| for any problem, have hash tables at the top of your mind!
-| string > hashcode > index
-| O(1) for “good” hashtable (generally what we assume for interviews?); Insertion, deletion, & retrieval occur in constant time
-| (O(n) for a bad hashtable – i.e. lots of collisions
-| rather than storing just simple values, hash-tables often contain LISTS of key-value pairs
-| these are great because you can have immediate lookup to a value (assuming table has unique node for each value; otherwise linked-list for keys that share the same index.  Why would you have keys share the same index?  To save space, and if you have a set list length, and want to “pack” the data in as you go “assigning” values.  Then once you found the correct index for an item in the list, you traverse that “linked list” to lookup if node value equals your desired value
-| hashing is widely used in database indexing, compilers, caching, password authentication, & more
* --------------------

## Hashing <a name="hashing"></a>\

---

* The idea of hashing is to distribute the entries (key/value pairs) across an array of buckets. Given a key, the algorithm computes an index that suggests where the entry can be found:

  ```markdown
  index = f(key, array_size)
  ```

  Often this is done in two steps:

  ```markdown
  hash = hashfunc(key)
  index = hash % array_size
  ```
  
  In this method, the hash is independent of the array size, and it is then reduced to an index (a number between 0 and array_size − 1) using the modulo operator (%).

* In the case that the array size is a power of two, the remainder operation is reduced to masking, which improves speed, but can increase problems with a poor hash function.

* A good hash function and implementation algorithm are essential for good hash table performance, but may be difficult to achieve.[citation needed]

* A basic requirement is that the function should provide a uniform distribution of hash values. A non-uniform distribution increases the number of collisions and the cost of resolving them.

* perfect hash function - if all keys are known ahead of time, a perfect hash function can be used to create a perfect hash table that has no collisions. If minimal perfect hashing is used, every location in the hash table can be used as well. Perfect hashing allows for constant time lookups in all cases. This is in contrast to most chaining and open addressing methods, where the time for lookup is low on average, but may be very large, O(n), for instance when all the keys hash to a few values.

* Hash collisions are practically unavoidable when hashing a random subset of a large set of possible keys.

* --------------------
*hash-functions:
-| each hash-table has a hash function, a calculation applied to a key to transform it into an address.  It's used to assign keys to specific indices, then to be able to do subsequent look-ups via this same hash function logic.
-| objectives of hash-function:
*minimize collisions
*uniform distribution of hash values // you sometimes can get “clumping” of values in areas of your index otherwise
*easy to calculate
*resolve any collisions

-| for numeric keys, divide the key by the # of available addresses, n, & take the remainder
// address = Key Mod N
// for alphanumeric keys, divide the sum of ASCII codes in a key by # of available address
// the “folding method”, divides the key into equal parts, then adds them together:
// e.g. telephone #
//  014528345654 = 01 +45 + 28 + 34 + 56 + 54 = 218
// depending on size of the table, may then divide by some constant and take remainder

*handling collisions / collision resolution:
-| when assigning values to an index in your array, per your hash-table, you could run into a case where the node already has a value assigned to it.  There are 2 ways(?) to handle this, Open Addressing vs. Closed Addressing.  With OA, you see that the target is filled, so you move down the list, to the next node, and if it's empty, assign here instead.  If it's filled, as well, then repeat, and move to next node down the list.  This is called doing a “Linear Search”.  This, of course, will grow with size of input list.
-| to allow room for the array to “assign” new values as needed, the array is often made LARGER than needed.  This intended “extra array space” allows calculation of the hash-tables “Load Factor”.
// load factor =
// # of items stored / size of array
// so 50 items, in an array of 100 nodes
// 50 / 100
 // ½ = 50%
-| as long as Load Factor is relatively low, OPEN ADDRESSING with linear searching” may actually be more efficient
-| Closed Addressing has the node instead have a pointer to the first item in a linked-list
-| Open Addressing techniques include:
Linear Probing
Plus 3 rehash // adding 3 to every hash function result
Quadratic Probing (failed attempts)^2 	// if index taken, take hash & then square root
Double Hashing

-| e.g. Alex and Christy could have different hash-codes(?), but same index
-| ways to fix:
“chaining”

* --------------------

* --------------------

* --------------------

* HASH FUNCTION - used to compute an index into an array of buckets or slots, from which the desired value can be found.

* ideally - the hash function will assign each key to a unique bucket. In a well-dimensioned hash table, the average cost (# of instructions) for each lookup is independent of the # of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized) constant average cost per operation.  Importantly, if the set of key-value pairs is fixed and known ahead of time (so insertions and deletions are not allowed), one may reduce the average lookup cost by a careful choice of the hash function, bucket table size, and internal data structures. Thusly, one can devise a hash function that's collision-free, or even perfect. (In this case the keys need not be stored in the table.)

* in reality - however, most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key.  Such collisions must be accommodated in some way.

* used in - many kinds of computer software, particularly for associative arrays, database-indexing, caches, & sets.

## Load Factor <a name="load-factor"></a>\

---

* A critical statistic for a hash table is the load factor, defined as

  ```markdown
  load factor = n k , {\displaystyle {\text{load factor}}={\frac {n}{k}},}
  where
  n is the number of entries occupied in the hash table.
  k is the number of buckets.
  ```

  As the load factor grows larger, the hash table becomes slower, and it may even fail to work (depending on the method used). The expected constant time property of a hash table assumes that the load factor is kept below some bound. For a fixed number of buckets, the time for a lookup grows with the number of entries and therefore the desired constant time is not achieved.

* Second to that, one can examine the variance of number of entries per bucket. For example, two tables both have 1,000 entries and 1,000 buckets; one has exactly one entry in each bucket, the other has all entries in the same bucket. Clearly the hashing is not working in the second one.

* a low load factor is not especially beneficial. As the load factor approaches 0, the proportion of unused areas in the hash table increases, but there is not necessarily any reduction in search cost. This results in wasted memory.

## PROS <a name="pros"></a>\

---

* main advantage - (hash tables vs other table data structures) is speed. This is more apparent when the # of entries is large. Again, hash tables are particularly efficient when the max # of entries can be predicted in advance, so that the bucket array can be allocated once with the optimum size and never resized.

## CONS <a name="cons"></a>\

---

* although operations on a hash table take constant time on average, the cost of a good hash function can be significantly higher than the inner loop of the lookup algorithm for a sequential list or search tree. Thus hash tables are not effective when the number of entries is very small. (However, in some cases the high cost of computing the hash function can be mitigated by saving the hash value together with the key.)

* for certain string processing applications, such as spell-checking, hash tables may be less efficient than tries, finite automata, or Judy arrays. Also, if there are not too many possible keys to store—that is, if each key can be represented by a small enough number of bits—then, instead of a hash table, one may use the key directly as the index into an array of values. Note that there are no collisions in this case.

* the entries stored in a hash table can be enumerated efficiently (at constant cost per entry), but only in some pseudo-random order. Therefore, there is no efficient way to locate an entry whose key is nearest to a given key. Listing all n entries in some specific order generally requires a separate sorting step, whose cost is proportional to log(n) per entry. In comparison, ordered search trees have lookup and insertion cost proportional to log(n), but allow finding the nearest key at about the same cost, and ordered enumeration of all entries at constant cost per entry.

* if the keys are not stored (because the hash function is collision-free), there may be no easy way to enumerate the keys that are present in the table at any given moment.

* although the average cost per operation is constant and fairly small, the cost of a single operation may be quite high. In particular, if the hash table uses dynamic resizing, an insertion or deletion operation may occasionally take time proportional to the number of entries. This may be a serious drawback in real-time or interactive applications.

* hash tables in general exhibit poor locality of reference—that is, the data to be accessed is distributed seemingly at random in memory. Because hash tables cause access patterns that jump around, this can trigger microprocessor cache misses that cause long delays. Compact data structures such as arrays searched with linear search may be faster, if the table is relatively small and keys are compact. The optimal performance point varies from system to system.

* hash tables become quite inefficient when there are many collisions. While extremely uneven hash distributions are extremely unlikely to arise by chance, a malicious adversary with knowledge of the hash function may be able to supply information to a hash that creates worst-case behavior by causing excessive collisions, resulting in very poor performance, e.g., a denial of service attack. In critical applications, a data structure with better worst-case guarantees can be used; however, universal hashing—a randomized algorithm that prevents the attacker from predicting which inputs cause worst-case behavior—may be preferable. The hash function used by the hash table in the Linux routing table cache was changed with Linux version 2.4.2 as a countermeasure against such attacksss.

* --------------------
* for certain string processing applications, such as spell-checking, hash tables may be less efficient than tries, finite automata, or Judy arrays.
* ? - also, if there are not too many possible keys to store.
* --------------------

## EX <a name="examples"></a>\

  ```markdown
      // set / get
      // hashtable.put(“Mary”, new Person())
      // hashtable.get(“Mary”)
  ```

  ```c#
      // hash function
      int hashCode(String s)
      {
        // some computation
      }
  ```

  ```c#
      class Hashtable
      {
        LinkedList[] data			// list of person objects
        bool put(String key, Person value)
        {
          int hashcode = getHashCode(key)
          int index = convertToIndex(hashCode)
          LinkedList list = data[index]
          list.insert(key.value);    // check for dupes
        }
      }
  ```

  ```markdown
      Q: You have 100 students names. You have an array with 11 slots.
      How could you use a hash function to pack the data?

      A:  Use a formula like:
      index # = sum ASCII codes % (mod) (size of array)

      so using student name, Ada:
      // Ada = (65 + 100 + 97) = 262
      // Ada = 262 % 11
      // Ada = 9, so Ada would be assigned to index position 9
  ```

  ![Hash Table](./_asset/img/1.png)

  ![Hash Table](./_asset/img/2.png)

  ![Hash Table](./_asset/img/3.png)