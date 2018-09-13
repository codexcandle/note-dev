* [overview](#overview)
* [constraints](#constraints)

## Overview <a name="overview"></a>

---

* `Generics` are a feature of the C# language that let you design a class or method with a placeholder type.  Thus you can:

> Write classes or methods that work with any data type, but still remain type safe!

* `Unity` makes use of them via `GetComponent`. In fact, the angled bracket syntax means to get a component of any type (specficially of MonoBehaviour).  When you use this syntax, you tell the compiler to automatically generate a version of GetComponent that knows specifically about your type.
* this is why you use the `generic collections` - so you can give them type `T`:

    ```c#
        private List m_freeList;
    ```

* [more @ msdn](https://msdn.microsoft.com/en-us/library/ms379564(v=vs.80).aspx)

## Constraints <a name="constraints"></a>

---

* the `where` keyword defines the constraint.
* there are several types of constraints you can specify:

    ```c#
        // this type MUST derive from MonoBehaviour!
        public class ObjectPool<T>:MonoBehaviour where T:MonoBehaviour
    ```