* [overview](#overview)
* [example](#examples)

## Overview <a name="overview"></a>

---

![Overview](./_asset/img/7.png)

![Overview](./_asset/img/8.png)

* `FIFO` - first in, first out (line at movies).
* operations
  * `enqueue` - add new items to end.
  * `dequeue` - remove item from front.
* errors:
  * `overflow` - results from trying to add an element onto a full queue.
  * `underflow` - happens when trying to remove an element from an empty queue.
* `bounded` queue - is a queue limited to a fixed # of items.
* [more @ wikipedia...](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

## EX <a name="examples"></a>

---

* common implementations:

  `circular buffers`
  Fixed length arrays are limited in capacity, but it is not true that items need to be copied towards the head of the queue. The simple trick of turning the array into a closed circle and letting the head and tail drift around endlessly in that circle makes it unnecessary to ever move items stored in the array. If n is the size of the array, then computing indices modulo n will turn the array into a circle. This is still the conceptually simplest way to construct a queue in a high level language, but it does admittedly slow things down a little, because the array indices must be compared to zero and the array size, which is comparable to the time taken to check whether an array index is out of bounds, which some languages do, but this will certainly be the method of choice for a quick and dirty implementation, or for any high level language that does not have pointer syntax. The array size must be declared ahead of time, but some implementations simply double the declared array size when overflow occurs. Most modern languages with objects or pointers can implement or come with libraries for dynamic lists. Such data structures may have not specified fixed capacity limit besides memory constraints.

  `linked lists`
  * A doubly linked list has O(1) insertion and deletion at both ends, so is a natural choice for queues.
  * A regular singly linked list only has efficient insertion and deletion at one end. However, a small modification—keeping a pointer to the last node in addition to the first one—will enable it to implement an efficient queue.

* word probs:

  ![Examples](./_asset/img/10.png)

  ![Examples](./_asset/img/13.png)
  
  ![Examples](./_asset/img/14.png)

* code:

  ```c#
  public class Queue
  {
    private static class Node
    {
      private int data;
      private Node next;

      private Node(int data)
      {
        this.data = data;
      }
    }

    private Node head;		// remove f/ the head
    private Node tail;		// add things here

    public boolean isEmpty()
    {
      return head == null;
    }

    public int peek()
    {
      return head.data;
    }

    public void add(int data)
    {
      Node node = new Node(data);

      if(tail != null)
      {
        tail.next = node;
      }

      tail = node;

      if(head == null)
      {
        head = node;
      }
    }

    public int remove()
    {
      int data = head.data;
      head = head.next;
      if(head == null)
      {
        tail = null;
      }

      return data;
    }
  }
}
```