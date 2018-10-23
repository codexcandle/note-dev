* [overview](#overview)
* strategy
    * [greedy](#greedy)
    * [divide & cconquer](#divide)
    * [recursion](./recursion)
* perf
    * [big-o](./big-o)
* type
    * [search](./search)
    * [shuffle](#shuffle)
    * [sort](./sort)

    ---

    * [dupe check](#duplicate-check)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Algorithm)

## Strategy <a name="strategy"></a>

---

### greedy <a name="greedy"></a>

* ![Greedy](./_asset/img/1.png)

  ![Greedy](./_asset/img/2.png)

### divide & conquer <a name="divide"></a>

* ![divide & conquer](./_asset/img/3.png)

  ![divide & conquer](./_asset/img/4.png)

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