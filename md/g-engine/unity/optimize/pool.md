* [overview](#overview)
* EX
    * [basic](#basic)
    * [generic](#generic)

## Overview <a name="overview"></a>

* [more @ wikipedia](https://en.wikipedia.org/wiki/Object_pool_pattern)

## EX <a name="examples"></a>

### basic <a name="basic"></a>

* be sure to pick a pool size that adequately covers the # of objects.
* as below, note `Get` method returns `null` if empty.  You could dynamically increase the size of the pool, but that defeats the purpose of pre-allocation.  Thus, it's UP TO THE CODE calling `Get` that must handle the null check.

```c#
    using UnityEngine;
    using System.Collections.Generic;

    public class BasicObjectPool:MonoBehaviour
    {
        // prefab for this object pool
        public GameObject m_prefab;

        // size of the object pool
        public int_msize;

        public void Awake()
        {
            // instantiate the pooled objects & disable them
            for(var i = 0; i < m_size; i++)
            {
                var pooledObject = Instantiate(m_prefab, transform);
                pooledObject.gameObject.SetActive(false);
            }
        }

        // Returns an object from the pool.  
        // Returns null if no more objects free in pool.
        public GameObject Get()
        {
            if(transform.childCount == 0) return null;

            return transform.GetChild(0).gameObject;
        }

        // Returns an object to the pool
        public void ReturnObject(GameObject pooledObject)
        {
            // reparent the pooled object & disable it
            var pooledObjectTrans = pooledObject.transform;
            pooledObjectTrans.parent = transform;
            pooledObjectTrans.localPosition = Vector3.zero;
            pooledObject.gameObject.SetActive(false);
        }
    }
```

### generic <a name="generic"></a>

* above is ok, but one big complaint is that it doesn't know what `type` of component you're pooling.  This means you have to go a `GetComponent` call every time you get an object out of the pool.  And there are NO guarentees that the pool even has the component type you're expecting!  Thus someone could misconfigure this for a prefab & cause an error.

* better version:

    ```c#
        // usage: 
        public class ObjectPool<T>:MonoBehaviour where T:MonoBehaviour
        {
            public T m_prefab;
            public int m_size;

            private List m_freeList;
            private List m_usedList;

            public void Awake()
            {
                m_freeList = new List(m_size);
                m_usedList = new List(m_size);

                for(var i = 0; i < m_size; i++)
                {
                    var pooledObj = Instantiate(prefab, transform);
                    pooledObj.gameObject.SetActive(false);
                    m_freeList.Add(pooledObj);
                }
            }

            public T Get()
            {
                var numFree = m_freeList.Count;
                if(numFree == 0) return null;

                var pooledObj = m_freeList[numFree - 1];
                m_freeList.RemoveAt(numFree - 1);
                m_usedList.Add(pooledObj);

                return pooledObj;
            }

            public void ReturnObject(T pooledObj)
            {
                Debug.Assert(m_usedList.Contains(pooledObject));

                // put pooled object back in free list
                m_usedList.Remove(pooledObj);
                m_freeList.Add(pooledObj);

                // reparent pooled object, & disable it
                var pooledObjTrans = pooledObj.transform;
                pooledObjTrans.parent = transform;
                pooledObjTrans.localPosition = Vector3.zero;
                pooledObj.gameObject.SetActive(false);
            }
        }
    ```

* to implement in Unity:

  ![...in Unity](_asset/img/1.png)

  ![...in Unity](_asset/img/2.png)

  ![...in Unity](_asset/img/3.png)
