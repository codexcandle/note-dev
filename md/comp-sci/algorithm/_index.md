* [overview](#overview)
* [d & c](#divide)
* [big-o](./big-o)
* type
    * [sort](./sort)
    * [search](./search)
    * [shuffle](#shuffle)
    * [(?)- fibonaci / recursion](./fibonaci)
    * [(?)- insert](./insert)
    * [(?)- update](./update)
    * [(?)- delete](./delete)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Algorithm)

### shuffle <a name="shuffle"></a>

* perhaps you need to shuffle a card deck:

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

## Divide & Conquer <a name="divide"></a>

---

  ![Greedy vs. Divide & Conquer](./_asset/img/1.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/2.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/3.png)

  ![Greedy vs. Divide & Conquer](./_asset/img/4.png)