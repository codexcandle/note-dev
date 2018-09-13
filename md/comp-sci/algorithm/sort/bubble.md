* [overview](#overview)
* [runtime](#runtime)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![Overview](./_asset/img/1.png)

* ![Overview](./_asset/img/19.png)

## Runtime <a name="runtime"></a>

---

* ![Runtime](./_asset/img/13.png)

* ![Runtime](./_asset/img/15.png)

* ![Runtime](./_asset/img/16.png)

## EX <a name="example"></a>

---

* code:

  ```c#
    using System;

    namespace Codebycandle.Algo
    {
        public class Sort
        {
            public static int[] DoBubbleSort(int[] data)
            {
                bool flag = true;
                int temp;
                int length = data.Length;

                // sort array
                for(int i = 1; i <= (length - 1); i++)
                {
                    flag = false;
                    for (int j = 0; j < (length - 1) ; j++)
                    {
                        if(data[j + 1] < data[j])
                        {
                            temp = data[j];
                            data[j] = data[j + 1];
                            data[j + 1] = temp;

                            flag = true;
                        }
                    }

                    // if => no further sorting needed, escape
                    if (flag == false) return data;
                }

                return null;
            }
        }
    }

    /* EXAMPLE USE =====================================
        int[] data = {89, 76, 45, 92, 67, 12, 99};
        Sort.SortByBubble(data);

        Debug.Log("****************\n");

        string output = string.Empty;
        foreach(int val in data)
        {
            output += val + " ";
        }

        Debug.Log("RESULT (expected): 12 45 67 76 89 92 99)");
        Debug.Log("RESULT (actual): " + output);
    */
  ```

  ![Example](./_asset/img/14.png)

* visualized (...1st sorting pass):

  ![Example](./_asset/img/3.png)
  ![Example](./_asset/img/4.png)
  ![Example](./_asset/img/5.png)
  ![Example](./_asset/img/6.png)
  ![Example](./_asset/img/7.png)
  ![Example](./_asset/img/8.png)
  ![Example](./_asset/img/9.png)
  ![Example](./_asset/img/10.png)

* quiz:

  ![Example](./_asset/img/17.png)
  
  ![Example](./_asset/img/18.png)