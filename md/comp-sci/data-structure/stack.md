* [overview](#overview)
  * [property](#property)
  * [method](#method)
* example
  * [word-prob](#word-prob)
  * [pseudo-code](#pseudo-code)
  * [code](#code)

## Overview <a name="overview"></a>

---

* `LIFO` - stack of pancakes (last in, first out)

  ![Overview](./_asset/img/01.png)

  ![Overview](./_asset/img/2.png)

* operations (which only occur at `top` of stack, making it possible to implement a stack as a `singly-linked list` & a pointer to this top element):
  
  `push` - adds element \
  `pop` - removes most recently added element \

* demo

  ![Overview](./_asset/img/4.png)

* `usage` - can do anything from helping to navigate a maze, traversing a graph, to an undo system.

  ![Overview](./_asset/img/5.png)

* `overflow pop` - If the stack is full and does not contain enough space to accept an entity to be pushed, the stack is then considered to be in an overflow state. The pop operation removes an item from the top of the stack.
* `dynamic array` - it's possible to implement a stack that can grow or shrink as much as needed. The size of the stack is simply the size of the dynamic array, which is a very efficient implementation of a stack since adding items to or removing items from the end of a dynamic array requires amortized O(1) time.
* [more @ wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

## Property <a name="property"></a>

---

* ![Property](./_asset/img/02.png)

## Method <a name="method"></a>

---

* ![Method](./_asset/img/03.png)

## EX <a name="example"></a>

---

* word-prob #1 <a name="word-prob"></a>

  ![Example](./_asset/img/6.png)

* word-prob #2

  ![Example](./_asset/img/12.png)

* pseudo-code #1 - `array` <a name="pseudo-code"></a>

  A stack can be easily implemented either through an array or a linked list. `What identifies the data structure as a stack in either case is not the implementation but the interface` - the user is only allowed to pop or push items onto the array or linked list, with few other helper operations. The following will demonstrate both implementations, using pseudocode.

  An array can be used to implement a (bounded) stack, as follows. The first element (usually at the zero offset) is the bottom, resulting in array[0] being the first element pushed onto the stack and the last element popped off. The program must keep track of the size (length) of the stack, using a variable `top` that records the # of items pushed so far, therefore pointing to the place in the array where the next element is to be inserted (assuming a zero-based index convention). Thus, the stack itself can be effectively implemented as a 3-element structure:

  ``txt
  structure stack:
    maxsize : integer
    top : integer
    items : array of item
  ```

  ```txt
  procedure initialize(stk : stack, size : integer):
    stk.items ← new array of size items, initially empty
    stk.maxsize ← size
    stk.top ← 0
  ```

  The push operation adds an element and increments the top index, after checking for overflow:
  procedure push(stk : stack, x : item):

  ```c#
      if stk.top = stk.maxsize:
        report overflow error
      else:
        stk.items[stk.top] ← x
        stk.top ← stk.top + 1
  ```

  Similarly, pop decrements the top index after checking for underflow, and returns the item that was previously the top one:

  ```c#
      procedure pop(stk : stack):
        if stk.top = 0:
          report underflow error
        else:
          stk.top ← stk.top − 1
          r ← stk.items[stk.top]
  ```

* pseudo-code #2 - `linked-list`

  Another option for implementing stacks is to use a singly linked list. A stack is then a pointer to the "head" of the list, with perhaps a counter to keep track of the size of the list:

  ```txt
  structure frame:
    data : item
    next : frame or nil
  ```

  ```txt
  structure stack:
    head : frame or nil
    size : integer
  ```

  ```txt
  procedure initialize(stk:stack):
    stk.head ← nil
    stk.size ← 0
  ```

  Pushing & popping items happens at the head of the list; `overflow isn't possible in this implementation` (unless memory is exhausted):

  ```txt
  procedure push(stk:stack, x:item):
    newhead ← new frame
    newhead.data ← x
    newhead.next ← stk.head
    stk.head ← newhead
    stk.size ← stk.size + 1
  ```

  ```txt
  procedure pop(stk:stack):
    if stk.head = nil:
      report underflow error
    r ← stk.head.data
    stk.head ← stk.head.next
    stk.size ← stk.size - 1
    return r
  ```

* code #1 - `basic` <a name="code"></a>

  ```c#
  // stack
  public class Stack
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

    private Node top;

    public boolean isEmpty()
    {
      return top == null;
    }

    public int peek()
    {
      return top.data;
    }

    public void push(int data)
    {
      Node node = new Node(data);
      node.next = top;
      top = node;
    }

    public int pop()
    {
      int data = top.data;
      top = top.next;
      return data;
    }
  }
  ```

* code #2 - `c# stack object`

  ```c#
  /*
  Current stack:
  W G M A
  The next poppable value in stack: H
  Current stack:
  H V W G M A
  Removing values
  Current stack:
  G M A
  */
  using System;
  using System.Collections;

  namespace CollectionsApplication
  {
    class Program
    {
      static void Main(string[] args)
      {
        Stack st = new Stack();

        st.Push('A');
        st.Push('M');
        st.Push('G');
        st.Push('W');

        Console.WriteLine("Current stack: ");
        foreach(char c in st)
        {
          Console.Write(c + " ");
        }
        Console.WriteLine();

        st.Push('V');
        st.Push('H');
        Console.WriteLine("The next poppable value in stack: {0}", st.Peek());
        Console.WriteLine("Current stack: ");

        foreach(char c in st)
        {
          Console.Write(c + " ");
        }

        Console.WriteLine();

        Console.WriteLine("Removing values ");
        st.Pop();
        st.Pop();
        st.Pop();

        Console.WriteLine("Current stack: ");
        foreach(char c in st)
        {
          Console.Write(c + " ");
        }
      }
    }
  }
  ```

* code #3 - `brackets problem`

  ```c#
  private bool CheckIfBalancedBrackets(string bracketStr)
  {
    Stack stack = new Stack();

    foreach(char c in bracketStr)
    {
        // if => char is openChar
        if(c == '{' ||
            c == '[' ||
            c == '(')
        {
            stack.Push(c);
        }
        else if(c == '}' ||
            c == ']' ||
            c == ')')
        {
            // check if c == counterpart to top item on stack
            string stackChar = stack.Peek().ToString();

            // attempt to get counter-char
            string counterChar = GetCharCounterpart(stackChar);
            if (counterChar == null) return false;

            // check if match!
            if (c == (counterChar[0]))
            {
                // remove item from stack
                stack.Pop();

                // proceed with loop!
            }
        }
    }

    // if stack is not empty, then not balanced!
    return (stack.Count == 0);
  }

  private string GetCharCounterpart(string str)
  {
      // sanitize!
      // TODO - swap this for char?
      if (str.Length != 1) return null;

      switch (str[0])
      {
          case '{':
              return "}";
          case '[':
              return "]";
          case '(':
              return ")";
          default:
              break;
      }

      return null;
  }
  ```