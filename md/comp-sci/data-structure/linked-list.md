* [overview](#overview)
* [singly-linked](#singly-linked)
* [doubly-linked](#doubly-linked)
* [example](#example)

## Overview <a name="overview"></a>

---

* a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next, which allows for efficient insertion / removal of elements from any position in the sequence during iteration. (More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references.)

  Basically, good for anytime you need to have “fast” insertions & deletions (-but random access less is important!)

  However, uses sequential access - so nodes must be read in order (from the beginning!)

  ![Overview](./_asset/img/17.png)

* pro

  - `among simplest & most common data structures` - can be used to implement several other common abstract data types (lists, stacks, queues, associative arrays) - though not uncommon to implement the other data structures directly without using a list as the basis of implementation.

  - `list elements can easily be inserted / removed` - without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program. Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.

    ```txt
    inserts / deletes – constant time → O(1)
    ```

    ![Overview](./_asset/img/22.png)

  - `link data` (with varying location / type)

    ![Overview](./_asset/img/31.png)

  * `efficient memory allocation`
  
    ![Overview](./_asset/img/3.png)

* con

  - `slower search time than array` - access time is linear, as faster access, (e.g. random access) isn't feasible. Thus, many basic operations (e.g. obtaining last node of the list, finding a node that contains a given datum, or locating the place where a new node should be inserted) may require sequential scanning of most (or all) of the list elements.

    ```txt
    random access – linear time → O(n)
    ```

    ![Overview](./_asset/img/2.png)  

    ![Overview](./_asset/img/32.png)  

  - `uses more memory than arrays`- because of storage used by their pointers.
  - `increased element access time` - nodes are stored incontiguously, greatly increasing the time periods required to access individual elements within the list.
  - `reverse traversal is difficult` - difficulties arise in linked lists when it comes to reverse traversing. Singly-linked lists are cumbersome to navigate backwards. Doubly-linked lists are somewhat easier to read, but memory is consumed in allocating space for a back-pointer.
* run-time (vs. array):

  ![Overview](./_asset/img/8.png)

  ![Overview](./_asset/img/6.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Linked_list)

## Singly-linked <a name="singly-linked"></a>

---

* ![Singly-Linked](./_asset/img/1.png)

  `Node` (or element) - each record of a linked list.

  `Head` - refers to the 1st node of the list, & would make a good name for the variable storing the reference of that node; would expect it to contain a “null” refernce if the list was empty.

  ```c#
  // 1-23-34-23-55-33-21
  // here, “1” is the “head”
  ```  

  `Tail` - depending on context, can refer to different things.  Sometimes the tail is intendeded to mean all the nodes that follow the head, while usually it just means the last node.

  `Next` (pointer) - the field of each node that contains the address of the next node.

## Doubly-linked <a name="doubly-linked"></a>

---

* ![Doubly-Linked](./_asset/img/20.png)

  ![Doubly-Linked](./_asset/img/10.png)

  ![Doubly-Linked](./_asset/img/11.png)

  ![Doubly-Linked](./_asset/img/18.png)

* each node contains 3 fields:

    * integer value
    * link forward (to next node)
    * link backward (to previous node)

* `usage` - many modern os's use doubly linked lists to maintain
  references to active processes, threads, and other dynamic
  objects. (A common strategy for rootkits to evade detection
  is to unlink themselves from these lists.)

  `Brwoser history`

  ![Doubly-Linked](./_asset/img/21.png)

* `tail pointer`

  ![Doubly-Linked](./_asset/img/12.png)

  ![Doubly-Linked](./_asset/img/13.png)

  ![Doubly-Linked](./_asset/img/19.png)

  ## EX <a name="example"></a>

---

* code

  ```c#
  public class Node
  {
    Node next;
    int data;
    public Node(int data)
    {
      this.data = data;
    }
  }

  public class LinkedList
  {
    public void append(int data)
    {
      if(head == null)
      {
        head = new Node(data);
        return;
      }
      Node current = head;
      while(current.next != null)
      {
        current = current.next;
      }
      current.next = new Node(data);
    }

    public void prepend(int data)
    {
      Node newHead = new Node(data);
      newHead.next = head;
      head = newHead;
    }

    /* when you remove a value here, essentially making
    an “orphan node?”, said node is never explicitly
    “destroyed”, but no one can access it, so it's
    essentially gone. */
    public void deleteWithValue(int data)
    {
      if(head == null) return;

      Node current = head;
      while(current.next != null)
      {
        if(current.next.data == data)
        {
          current.next = current.next.next;
          return;
        }
      }
    }
  }
  ```