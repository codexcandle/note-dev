* [profile](./profile)
* graphics
    * [draw call batching](./dc-batch)
    * [gpu-instancing](#gpu-instancing)
    * [triangles, vertices, & drawcalls](#triangles-vertices-drawcalls)
    * [shaders](#shaders)
* code
    * [multi-thread](./m-thread)
    * [dll-lib](./dll)
    * [instantiate-destroy](#instantiate-destroy)
        * [object pool](./pool)
    * [foreach](#foreach)
    * [tag-comparison](#tag-comparison)
    * [string-concatenation](#string-concatenation)
    * [get-component](#get-component)

## Graphics

---

### gpu-instancing <a name="gpu-instancing"></a>\

  ![GPU-Instancing](_asset/img/1.png)

  ![GPU-Instancing](_asset/img/2.png)
  
  ![GPU-Instancing](_asset/img/3.png)

* [more info](https://docs.unity3d.com/Manual/GPUInstancing.html)

### triangles, vertices, & drawcalls <a name="triangles-vertices-drawcalls"></a>\

* the most important thing for mobile games is to keep your triangles, vertices, & drawcalls as low as possible.

### shaders <a name="shaders"></a>

* for mobile, watch out for complicated shaders as they gain be a big hit on performance.
* `post-processing shaders` are really expensive in resources.

## Code

---

### foreach <a name="foreach"></a>

* avoid `foreach` loops as they generate 24 bytes of trash data per loop!
* use `for` loops instead.

### tag comparison <a name="tag-comparison"></a>

* avoid `object.tag == "string"`
* use `object.CompareTag("string")` instead - is more efficient.

### string-concatenation <a name="string-concatenation"></a>

* when you concatenate strings `("Hello" + "World")`, you are creating a new string object.  If you do this each frame, you are adding a good amount of unnecessary GC work.
* instead, you could be caching or cancatenating without `+`.

### get-component <a name="get-component"></a>

* when using `GetComponent` try to store this reference once, instead of looking up multiple times (as this call is expensive).

### instantiate-destroy <a name="instantiate-destroy"></a>

* these calls can take quite a bit of CPU time!
* address this with [object pooling](./pool).