* [overview](#overview)
* [divide & cconquer](#divide)
* [big-o](./big-o)
* [recursion](./recursion)
* type
    * [search](./search)
    * [shuffle](#shuffle)
    * [sort](./sort)

    ---

    * [duplicate check](#duplicate-check)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Algorithm)

## Divide & Conquer <a name="divide"></a>

---

* ![Greedy vs. Divide & Conquer](./_asset/img/1.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/2.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/3.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/4.png)

## Shuffle <a name="shuffle"></a>

---

* `card deck shuffle`

    ```c#
    public static void ShuffleArray(int[] arr)
    {
        int length = arr.Length;
        for(int i = 0; i < length; i++)
        {
            int temp = arr[i];
            int rand = Random.Range(0, length);

            arr[i] = arr[rand];
            arr[rand] = temp;
        }
    }
    ```

## Duplicate check <a name="duplicate-check"></a>

---

* demo:

    ```c#
    bool ContainsDupes(IList<string> elements)
    {
        for(var outer = 0; outer < elements.COunt; outer++)
        {
            for(var inner = 0; inner < elements.Count; inner++)
            {
                // don't compare with self
                if(outer == inner) continue;

                if(elements[outer] == elements[inner]) return true;
            }
        }

        return false;
    }
    ```