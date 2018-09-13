* [overview](#overview)
* [runtime](#runtime)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/1.png)

* ![Overview](./_asset/img/2.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Quicksort)

## Runtime <a name="runtime"></a>

---

* ![Runtime](./_asset/img/5.png)

* ![Runtime](./_asset/img/6.png)

* ![Runtime](./_asset/img/4.png)

* ![Runtime](./_asset/img/7.png)

* ![Runtime](./_asset/img/8.png)

* ![Runtime](./_asset/img/9.png)

* ![Runtime](./_asset/img/11.png)

## EX <a name="example"></a>

---

* code:

  ```c#
  public static void DoQuickSort(/*IComparable*/int[] data, int left, int right)
  {
      int i = left, j = right;
      /*IComparable*/ int pivot = data[(left + right) / 2];

      while(i <= j)
      {
          while(data[i].CompareTo(pivot) < 0)
          {
              i++;
          }

          while(data[j].CompareTo(pivot) > 0)
          {
              j--;
          }

          if(i <= j)
          {
              // swap
              /*IComparable*/ int tmp = data[i];
              data[i] = data[j];
              data[j] = tmp;

              i++;
              j--;
          }
      }

      // recursive calls
      if(left < j)
      {
          DoQuickSort(data, left, j);
      }

      if(i < right)
      {
          DoQuickSort(data, i, right);
      }
  }

  /*
  * EXAMPLE USE **************************************************
    int[] data = {89, 76, 45, 92, 67, 12, 99};

    Sort.DoQuickSort(data, 0, data.Length - 1);

    Debug.Log("****************\n");
    string output = string.Empty;
    foreach(int val in data)
    {
        output += val + " ";
    }

    Debug.Log("RESULT (expect): 12 45 67 76 89 92 99");
    Debug.Log("RESULT (actual): " + output);
  */
  ```

  ![Example](./_asset/img/3.png)

* visualized:

  ![Example](./_asset/img/12.png)
  ![Example](./_asset/img/13.png)
  ![Example](./_asset/img/14.png)
  ![Example](./_asset/img/15.png)
  ![Example](./_asset/img/16.png)

* quiz:

  ![Example](./_asset/img/10.png)