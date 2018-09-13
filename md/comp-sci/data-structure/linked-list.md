* [overview](#overview)
* [pros](#pros)
* [cons](#cons)
* [singly-linked](#singly-linked)
* [doubly-linked](#doubly-linked)

## Overview <a name="overview"></a>

---

* In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. 
* A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.
* Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions; though it's not uncommon to implement the other data structures directly without using a list as the basis of implementation.
* principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program. Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.
* On the other hand, simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing. Thus, many basic operations — such as obtaining the last node of the list (assuming that the last node is not maintained as separate node reference in the list structure), or finding a node that contains a given datum, or locating the place where a new node should be inserted — may require sequential scanning of most or all of the list elements.

* [more on wikipedia...](https://en.wikipedia.org/wiki/Linked_list)

## Pros <a name="pros"></a>

---

* inserts / deletes – constant time → O(1)
* serve as underlying structure for other data structures (e.g. stack, queue)
* anytime you need to have “fast” insertions & deletions, but random access less important

  ![Overview](./_asset/img/3.png)

## Cons <a name="cons"></a>

---

* random access – linear time → O(n)
* uses more memory than arrays because of the storage used by their pointers.
* nodes in a linked list must be read in order from the beginning as linked lists use sequential access.
* nodes are stored incontiguously, greatly increasing the time periods required to access individual elements within the list, especially with a cpu cache.
* difficulties arise in linked lists when it comes to reverse traversing. For instance, singly linked lists are cumbersome to navigate backwards[1] and while doubly linked lists are somewhat easier to read, memory is consumed in allocating space for a back-pointer.

  ![Overview](./_asset/img/2.png)

## Singly-linked <a name="singly-linked"></a>

---

* overview:

  ![Singly-Linked](./_asset/img/1.png)

  ![Singly-Linked](./_asset/img/17.png)

  `Node` (or element) - each record of a linked list.

  `Head` - refers to the 1st node of the list, & would make a good name for the variable storing the reference of that node; would expect it to contain a “null” refernce if the list was empty.

  ```c#
  // 1-23-34-23-55-33-21
  // here, “1” is the “head”
  ```  

  `Tail` - depending on context, can refer to different things.  Sometimes the tail is intendeded to mean all the nodes that follow the head, while usually it just means the last node.

  `Next` (pointer) - the field of each node that contains the address of the next node.

* visualize:

  ![Singly-Linked](./_asset/img/4.png)

  ![Singly-Linked](./_asset/img/5.png)

  ![Singly-Linked](./_asset/img/22.png)

* run-time (vs. array):

  ![Singly-Linked](./_asset/img/8.png)

  ![Singly-Linked](./_asset/img/7.png)  

  ![Singly-Linked](./_asset/img/6.png)

  ![Singly-Linked](./_asset/img/23.png)

  ![Singly-Linked](./_asset/img/24.png)

  ![Singly-Linked](./_asset/img/25.png)

  ![Singly-Linked](./_asset/img/26.png)

  ![Singly-Linked](./_asset/img/27.png)

  ![Singly-Linked](./_asset/img/28.png)

  ![Singly-Linked](./_asset/img/29.png)

  ![Singly-Linked](./_asset/img/30.png)

* code:

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

  Below shows how to add a new node (with data "value") to end of a singly-linked list:

  ```c#
  node AddNode(node head, int value)
  {
    // declare 2 nodes temp & p
    node temp, p;

    // below returns a new node with data = value & next potining to NULL
    temp = createNode();

    // add element's value to data part of node
    temp -> data = value;

    if(head == NULL)
    {
      // when linked list is empty
      head = temp;
    }
    else
    {
      // align p to head
      p = head;

      while(p-> next != NULL)
      {
        // traverse the list until p is the last node.
        // The last node always points to NULL.
        p = p-> next;
      }

      // point previous last node to the new node created.
      p->next = temp;
    }

    return head;
  }
  ```

## Doubly-linked (& tail pointer) <a name="doubly-linked"></a>

---

* overview:

  Each node contains 3 fields:

    * an integer value
    * link forward to the next node
    * link backward to the previous node

  HACKER TIP! - many modern os's use doubly linked lists to maintain
  references to active processes, threads, and other dynamic
  objects. A common strategy for rootkits to evade detection
  is to unlink themselves from these lists.

  ![Doubly-Linked](./_asset/img/10.png)

  ![Doubly-Linked](./_asset/img/11.png)  

  ![Doubly-Linked](./_asset/img/12.png)

  ![Doubly-Linked](./_asset/img/13.png)

  ![Doubly-Linked](./_asset/img/14.png)

  ![Doubly-Linked](./_asset/img/18.png)

  ![Doubly-Linked](./_asset/img/19.png)
  
* visualize:

  ![Doubly-Linked](./_asset/img/20.png)

  ![Doubly-Linked](./_asset/img/9.png)

* run-time:

  ![Doubly-Linked](./_asset/img/15.png)

* example:

  `Brwoser history`

  ![Doubly-Linked](./_asset/img/21.png)