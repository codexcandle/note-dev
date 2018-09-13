* [overview](#overview)
* [runtime](#runtime)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/1.png)

* ![Overview](./_asset/img/2.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

## Runtime <a name="runtime"></a>

---

* ![Runtime](./_asset/img/4.png)

* ![Runtime](./_asset/img/5.png)

## EX <a name="example"></a>

---

* code:

  ```c#
      public static void DoInsertionSort(int[] data)
      {
          int temp, j;
          int length = data.Length;

          for(int i = 1; i < length; i++)
          {
              temp = data[i];
              j = i - 1;

              while (j >= 0 && data[j] > temp)
              {
                  data[j + 1] = data[j];

                  j--;
              }

              data[j + 1] = temp;
          }
      }
  ```

  ![Example](./_asset/img/3.png)

* quiz:

  ![Example](./_asset/img/6.png)  
