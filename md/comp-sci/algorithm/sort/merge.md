* [overview](#overview)
* [runtime](#runtime)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/1.png)

* ![Overview](./_asset/img/2.png)

* ![Overview](./_asset/img/3.png)

* ![Overview](./_asset/img/9.png)

* ![Overview](./_asset/img/10.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

## Runtime <a name="runtime"></a>

---

* ![Runtime](./_asset/img/5.png)

* ![Runtime](./_asset/img/6.png)

* ![Runtime](./_asset/img/7.png)

## EX <a name="example"></a>

---

* code:

  ```c#
  static public void DoMergeSort_Recursive(int[] data, int left, int right)
  {
      int mid;

      if(right > left)
      {
          mid = (right + left) / 2;
          DoMergeSort_Recursive(data, left, mid);
          DoMergeSort_Recursive(data, (mid + 1), right);

          DoMerge(data, left, (mid + 1), right);
      }
  }

  static private void DoMerge(int[] numbers, int left, int mid, int right)
  {
      int[] temp = new int[25];
      int i, leftEnd, elementCount, tmpPos;

      leftEnd = (mid - 1);
      tmpPos = left;
      elementCount = (right - left + 1);

      while((left <= leftEnd) && (mid <= right))
      {
          if(numbers[left] <= numbers[mid])
          {
              temp[tmpPos++] = numbers[left++];
          }
          else
          {
              temp[tmpPos++] = numbers[mid++];
          }
      }

      while(left <= leftEnd)
      {
          temp[tmpPos++] = numbers[left++];
      }

      while(mid <= right)
      {
          temp[tmpPos++] = numbers[mid++];
      }

      for(i = 0; i < elementCount; i++)
      {
          numbers[right] = temp[right];
          right--;
      }
  }

  /*
  *EXAMPLE USE ************************************************
  int[] data = {89, 76, 45, 92, 67, 12, 99};

  // Sort.DoBubbleSort(data);
  // Sort.DoSelectionSort(data);
  // Sort.DoInsertionSort(data);
  // Sort.DoQuickSort_Recursive(data, 0, data.Length - 1);
  Sort.DoMergeSort_Recursive(data, 0, data.Length - 1);

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

  ![Example](./_asset/img/21.png)

  ![Example](./_asset/img/8.png)

* visualized (...1st sorting pass):

  ![Example](./_asset/img/4.png)  
