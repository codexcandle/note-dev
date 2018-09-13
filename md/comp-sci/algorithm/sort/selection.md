* [overview](#overview)
* [runtime](#runtime)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/1.png)

* ![Overview](./_asset/img/2.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

## Runtime <a name="runtime"></a>

---

* ![Runtime](./_asset/img/7.png)

* ![Runtime](./_asset/img/8.png)

## EX <a name="example"></a>

---

* code:

  ```c#
      public static void DoSelectionSort(int[] data)
      {
          int posMin;         // position of minimum
          int temp;
          int length = data.Length;
          int finalIndex = length - 1;

          for(int i = 0; i < finalIndex; i++)
          {
              // set to current array index
              posMin = i;

              for(int j = i + 1; j < length; j++)
              {
                  if(data[j] < data[posMin])
                  {
                      // keep track of index that min is in; needed for "swaps"
                      posMin = j;
                  }
              }

              /*
                * if pos-min no longer equals i, 
                * then smaller value must have been found; 
                * so swap must occur!
                */
              if(posMin != i)
              {
                  temp = data[i];
                  data[i] = data[posMin];
                  data[posMin] = temp;
              }
          }
      }
  ```

  ![Example](./_asset/img/11.png)

* quiz:

  ![Example](./_asset/img/9.png)

  ![Example](./_asset/img/10.png)