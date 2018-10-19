* [overview](#overview)
* [constraint](#constraint)
* [method](#method)
* [delegate](#delegate)
* [example](#example)

## Overview <a name="overview"></a>

---

* `generics` are a feature of the C# language that let you design a class or method with a placeholder type.  Thus you can - write classes or methods that work with any data type, but still remain type safe!
* `unity` makes use of them via `GetComponent`. In fact, the angled bracket syntax means to get a component of any type (specficially of MonoBehaviour).  When you use this syntax, you tell the compiler to automatically generate a version of GetComponent that knows specifically about your type.
* this is why you use the `generic collections` - so you can give them type `T`:

    ```c#
    private List m_freeList;
    ```

* pros

    *  helps you to maximize code reuse, type safety, and performance.
    * you can create generic collection classes. The .NET Framework class library contains several new generic collection classes in the System.Collections.Generic namespace. You may use these generic collection classes instead of the collection classes in the System.Collections namespace.
    * you can create your own generic interfaces, classes, methods, events, and delegates.
    * you may create generic classes constrained to enable access to methods on particular data types.
    * you may get information on the types used in a generic data type at run-time by means of reflection.
* [more @ msdn](https://msdn.microsoft.com/en-us/library/ms379564(v=vs.80).aspx)

## Constraint <a name="constraint"></a>

---

* the `where` keyword defines the constraint.
* there are several types of constraints you can specify:

    ```c#
    // this type MUST derive from MonoBehaviour!
    public class ObjectPool<T>:MonoBehaviour where T:MonoBehaviour
    ```

## Method <a name="method"></a>

---

* can declare a generic method with a type parameter.
* demo

    ```c#
    /*
    e.g.
    Int values before calling swap:
    a = 10, b = 20
    Char values before calling swap:
    c = I, d = V
    Int values after calling swap:
    a = 20, b = 10
    Char values after calling swap:
    c = V, d = I
    */
    using System;
    using System.Collections.Generic;

    namespace GenericMethodAppl
    {
        class Program
        {
            static void Swap<T>(ref T lhs, ref T rhs)
            {
                T temp;
                temp = lhs;
                lhs = rhs;
                rhs = temp;
            }

            static void Main(string[] args)
            {
                int a, b;
                char c, d;
                a = 10;
                b = 20;
                c = 'I';
                d = 'V';

                //display values before swap:
                Console.WriteLine("Int values before calling swap:");
                Console.WriteLine("a = {0}, b = {1}", a, b);
                Console.WriteLine("Char values before calling swap:");
                Console.WriteLine("c = {0}, d = {1}", c, d);

                //call swap
                Swap<int>(ref a, ref b);
                Swap<char>(ref c, ref d);

                //display values after swap:
                Console.WriteLine("Int values after calling swap:");
                Console.WriteLine("a = {0}, b = {1}", a, b);
                Console.WriteLine("Char values after calling swap:");
                Console.WriteLine("c = {0}, d = {1}", c, d);

                Console.ReadKey();
            }
        }
    }
    ```

## Delegate <a name="delegate"></a>

---

* can define a generic delegate with type parameters

    ```c#
    delegate T NumberChanger<T>(T n);
    ```

* demo

    ```c#
    /*
    e.g.
    Value of Num: 35
    Value of Num: 175
    */
    using System;
    using System.Collections.Generic;

    delegate T NumberChanger<T>(T n);
    namespace GenericDelegateAppl
    {
        class TestDelegate
        {
            static int num = 10;

            public static int AddNum(int p)
            {
                num += p;
                return num;
            }

            public static int MultNum(int q)
            {
                num *= q;
                return num;
            }

            public static int getNum()
            {
                return num;
            }

            static void Main(string[] args)
            {
                //create delegate instances
                NumberChanger<int> nc1 = new NumberChanger<int>(AddNum);
                NumberChanger<int> nc2 = new NumberChanger<int>(MultNum);

                //calling the methods using the delegate objects
                nc1(25);
                Console.WriteLine("Value of Num: {0}", getNum());

                nc2(5);
                Console.WriteLine("Value of Num: {0}", getNum());
                Console.ReadKey();
            }
        }
    }
    ```

## EX <a name="example"></a>

---

* demo

    ```c#
    /*
    e.g.
    0 5 10 15 20
    a b c d e
    */
    using System;
    using System.Collections.Generic;

    namespace GenericApplication
    {
        public class MyGenericArray<T>
        {
            private T[] array;

            public MyGenericArray(int size)
            {
                array = new T[size + 1];
            }

            public T getItem(int index)
            {
                return array[index];
            }

            public void setItem(int index, T value)
            {
                array[index] = value;
            }
        }

        class Tester
        {
            static void Main(string[] args)
            {
                //declaring an int array
                MyGenericArray<int> intArray = new MyGenericArray<int>(5);

                //setting values
                for(int c = 0; c < 5; c++)
                {
                    intArray.setItem(c, c*5);
                }

                // retrieving the values
                for(int c = 0; c < 5; c++)
                {
                    Console.Write(intArray.getItem(c) + " ");
                }

                Console.WriteLine();

                //declaring a character array
                MyGenericArray<char> charArray = new MyGenericArray<char>(5);

                // setting values
                for(int c = 0; c < 5; c++)
                {
                    charArray.setItem(c, (char)(c+97));
                }

                // retrieving the values
                for(int c = 0; c< 5; c++)
                {
                    Console.Write(charArray.getItem(c) + " ");
                }
                Console.WriteLine();

                Console.ReadKey();
            }
        }
    }
    ```

###### REF

---

* tutorials-point - [`c# - generics`](https://www.tutorialspoint.com/csharp/csharp_generics.htm)