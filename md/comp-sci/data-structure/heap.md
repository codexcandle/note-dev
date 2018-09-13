* [overview](#overview)
* [example](#example)

## Ovvvverview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))

* ---------------------------------------------------------------

* A heap is a semi-ordered tree-based data structure where whether:
	-each parent's key is greater than it's children (a MAX HEAP, with largest item on top)
	-each parent's key is less than it's children (a MIN HEAP, smallest item on top)

	Often these trees will have a max # of children (per parent) of 2, in which case they are known as “binary heaps.”
* 
In computer science, a heap is a specialized tree-based data structure that satisfies the heap property: if P is a parent node of C, then the key (the value) of P is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.[1] The node at the "top" of the heap (with no parents) is called the root node.
The heap is one maximally efficient implementation of an abstract data type called a priority queue, and in fact priority queues are often referred to as "heaps", regardless of how they may be implemented. A common implementation of a heap is the binary heap, in which the tree is a binary tree (see figure). The heap data structure, specifically the binary heap, was introduced by J. W. J. Williams in 1964, as a data structure for the heapsort sorting algorithm.[2] Heaps are also crucial in several efficient graph algorithms such as Dijkstra's algorithm. In a heap, the highest (or lowest) priority element is always stored at the root. A heap is not a sorted structure and can be regarded as partially ordered. As visible from the heap-diagram, there is no particular relationship among nodes on any given level, even among the siblings. When a heap is a complete binary tree, it has a smallest possible height—a heap with N nodes and for each node a branches always has loga N height. A heap is a useful data structure when you need to remove the object with the highest (or lowest) priority.
Note that, as shown in the graphic, there is no implied ordering between siblings or cousins and no implied sequence for an in-order traversal (as there would be in, e.g., a binary search tree). The heap relation mentioned above applies only between nodes and their parents, grandparents, etc. The maximum number of children each node can have depends on the type of heap, but in many types it is at most two, which is known as a binary heap.
* ---------------------------------------------------------------

* The common operations involving heaps are:
Basic 
find-max [or find-min]: find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek) 
insert: adding a new key to the heap (a.k.a., push[3]) 
extract-max [or extract-min]: returns the node of maximum value from a max heap [or minimum value from a min heap] after removing it from the heap (a.k.a., pop[4]) 
delete-max [or delete-min]: removing the root node of a max heap [or min heap], respectively 
replace: pop root and push a new key. More efficient than pop followed by push, since only need to balance once, not twice, and appropriate for fixed-size heaps.[5] 
Creation 
create-heap: create an empty heap 
heapify: create a heap out of given array of elements 
merge (union): joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps. 
meld: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps. 
Inspection 
size: return the number of items in the heap. 
is-empty: return true if the heap is empty, false otherwise. 
Internal 
increase-key or decrease-key: updating a key within a max- or min-heap, respectively 
delete: delete an arbitrary node (followed by moving last node and sifting to maintain heap) 
sift-up: move a node up in the tree, as long as needed; used to restore heap condition after insertion. Called "sift" because node moves up the tree until it reaches the correct level, as in a sieve. 
sift-down: move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement. 


* Implementation:
Heaps are usually implemented in an array (fixed size or dynamic array), and do not require pointers between elements. After an element is inserted into or deleted from a heap, the heap property may be violated and the heap must be balanced by internal operations.

* Example of a complete binary max-heap with node keys being integers from 1 to 100 and how it would be stored in an array.
Binary heaps may be represented in a very space-efficient way (as an implicit data structure) using an array alone. The first (or last) element will contain the root. The next two elements of the array contain its children. The next four contain the four children of the two child nodes, etc. Thus the children of the node at position n would be at positions 2n and 2n + 1 in a one-based array, or 2n + 1 and 2n + 2 in a zero-based array. This allows moving up or down the tree by doing simple index computations. Balancing a heap is done by sift-up or sift-down operations (swapping elements which are out of order). As we can build a heap from an array without requiring extra memory (for the nodes, for example), heapsort can be used to sort an array in-place.
Different types of heaps implement the operations in different ways, but notably, insertion is often done by adding the new element at the end of the heap in the first available free space. This will generally violate the heap property, and so the elements are then sifted up until the heap property has been reestablished. Similarly, deleting the root is done by removing the root and then putting the last element in the root and sifting down to rebalance. Thus replacing is done by deleting the root and putting the new element in the root and sifting down, avoiding a sifting up step compared to pop (sift down of last element) followed by push (sift up of new element).
Construction of a binary (or d-ary) heap out of a given array of elements may be performed in linear time using the classic Floyd algorithm, with the worst-case number of comparisons equal to 2N − 2s2(N) − e2(N) (for a binary heap), where s2(N) is the sum of all digits of the binary representation of N and e2(N) is the exponent of 2 in the prime factorization of N.[6] This is faster than a sequence of consecutive insertions into an originally empty heap, which is log-linear (or linearithmic).

* 
The heap data structure has many applications.

Heapsort: One of the best sorting methods being in-place and with no quadratic worst-case scenarios. 

Selection algorithms: A heap allows access to the min or max element in constant time, and other selections (such as median or kth-element) can be done in sub-linear time on data that is in a heap.[16] 

Graph algorithms: By using heaps as internal traversal data structures, run time will be reduced by polynomial order. Examples of such problems are Prim's minimal-spanning-tree algorithm and Dijkstra's shortest-path algorithm.

Priority Queue: A priority queue is an abstract concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods.

Order statistics: The Heap data structure can be used to efficiently find the kth smallest (or largest) element
in an array.

## EX <a name="example"></a>\

---

![EX](_asset/img/1.png)

![EX](_asset/img/2.png)

![alt](_asset/img/3.png)
![alt](_asset/img/4.png)
![alt](_asset/img/5.png)

![alt](_asset/img/6.png)
![alt](_asset/img/7.png)
![alt](_asset/img/8.png)
![alt](_asset/img/9.png)
![alt](_asset/img/10.png)

![alt](_asset/img/11.png)
![alt](_asset/img/12.png)
![alt](_asset/img/13.png)
![alt](_asset/img/14.png)
![alt](_asset/img/15.png)

![alt](_asset/img/16.png)
![alt](_asset/img/17.png)
![alt](_asset/img/18.png)
![alt](_asset/img/19.png)
![alt](_asset/img/20.png)

![alt](_asset/img/31.png)
![alt](_asset/img/32.png)
![alt](_asset/img/33.png)
![alt](_asset/img/34.png)
![alt](_asset/img/35.png)

![alt](_asset/img/36.png)
![alt](_asset/img/37.png)
![alt](_asset/img/38.png)
![alt](_asset/img/39.png)
![alt](_asset/img/40.png)

![alt](_asset/img/41.png)
![alt](_asset/img/42.png)
![alt](_asset/img/43.png)
![alt](_asset/img/44.png)
![alt](_asset/img/45.png)

![alt](_asset/img/46.png)
![alt](_asset/img/47.png)
![alt](_asset/img/48.png)
![alt](_asset/img/49.png)
![alt](_asset/img/50.png)

![alt](_asset/img/51.png)
![alt](_asset/img/52.png)
![alt](_asset/img/53.png)
![alt](_asset/img/54.png)
![alt](_asset/img/55.png)

![alt](_asset/img/56.png)