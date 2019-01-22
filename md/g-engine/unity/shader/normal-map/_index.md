* [overview](#overview)
* [visualizing vectors](#visualizing-vectors)
* [illumination models](#illumination-models)
* [bumped environments](#bumped-environments)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overview](./_asset/img/05.png)

* ![overview](./_asset/img/07.png)

* ![overview](./_asset/img/10.png)

* ![overview](./_asset/img/11.png)

* ![overview](./_asset/img/12.png)

* ![overview](./_asset/img/13.png)

* ![overview](./_asset/img/14.png)

* ![overview](./_asset/img/15.png)

* ![overview](./_asset/img/16.png)

* ![overview](./_asset/img/18.png)

* ![overview](./_asset/img/19.png)

* ![overview](./_asset/img/20.png)

* ![overview](./_asset/img/21.png)

* ![overview](./_asset/img/22.png)

* ![overview](./_asset/img/23.png)

* ![overview](./_asset/img/24.png)

* ![overview](./_asset/img/25.png)

* ![overview](./_asset/img/26.png)

* ![overview](./_asset/img/27.png)

* ![overview](./_asset/img/28.png)

* ![overview](./_asset/img/29.png)

* ![overview](./_asset/img/30.png)

* ![overview](./_asset/img/31.png)

* ![overview](./_asset/img/32.png)

* ![overview](./_asset/img/33.png)

* ![overview](./_asset/img/34.png)

* ![overview](./_asset/img/35.png)

* ![overview](./_asset/img/36.png)

* ![overview](./_asset/img/37.png)

* ![overview](./_asset/img/38.png)

* ![overview](./_asset/img/39.png)

* ![overview](./_asset/img/40.png)

* ![overview](./_asset/img/41.png)

* ![overview](./_asset/img/42.png)

* ![overview](./_asset/img/43.png)

* ![overview](./_asset/img/44.png)

* ![overview](./_asset/img/45.png)

* ![overview](./_asset/img/46.png)

* ![overview](./_asset/img/47.png)

* ![overview](./_asset/img/48.png)

* ![overview](./_asset/img/49.png)

* ![overview](./_asset/img/50.png)

## Visualizing Vectors <a name="visualizing-vectors"></a>

---

* ![visualizing Vectors](./_asset/img/52.png)

* ![visualizing Vectors](./_asset/img/53.png)

* ![visualizing Vectors](./_asset/img/54.png)

* ![visualizing Vectors](./_asset/img/55.png)

* ![visualizing Vectors](./_asset/img/56.png)

* ![visualizing Vectors](./_asset/img/57.png)

* ![visualizing Vectors](./_asset/img/58.png)

* ![visualizing Vectors](./_asset/img/59.png)

* ![visualizing Vectors](./_asset/img/60.png)

* ![visualizing Vectors](./_asset/img/61.png)

* ![visualizing Vectors](./_asset/img/62.png)

## Illumination Models <a name="illumination-models"></a>

---

* ![illumination mmdels](./_asset/img/63.png)

* ![illumination mmdels](./_asset/img/64.png)

* ![illumination mmdels](./_asset/img/64.png)

* ![illumination mmdels](./_asset/img/64.png)

* ![illumination mmdels](./_asset/img/64.png)

* ![illumination mmdels](./_asset/img/65.png)

* ![illumination mmdels](./_asset/img/66.png)

* ![illumination mmdels](./_asset/img/67.png)

* ![illumination mmdels](./_asset/img/68.png)

* ![illumination mmdels](./_asset/img/69.png)

* ![illumination mmdels](./_asset/img/70.png)

* ![illumination mmdels](./_asset/img/71.png)

* ![illumination mmdels](./_asset/img/72.png)

* ![illumination mmdels](./_asset/img/73.png)

* ![illumination mmdels](./_asset/img/74.png)

* ![illumination mmdels](./_asset/img/75.png)

* ![illumination mmdels](./_asset/img/76.png)

* ![illumination mmdels](./_asset/img/77.png)

* ![illumination mmdels](./_asset/img/78.png)

* ![illumination mmdels](./_asset/img/79.png)

## Bumped Environments <a name="bumped-enviornments"></a>

---

* ![bumped environments](./_asset/img/080.png)

* ![bumped environments](./_asset/img/081.png)

* ![bumped environments](./_asset/img/082.png)

* ![bumped environments](./_asset/img/083.png)

* ![bumped environments](./_asset/img/084.png)

* ![bumped environments](./_asset/img/085.png)

* ![bumped environments](./_asset/img/086.png)

* ![bumped environments](./_asset/img/087.png)

* ![bumped environments](./_asset/img/088.png)

* ![bumped environments](./_asset/img/089.png)

* ![bumped environments](./_asset/img/090.png)

* ![bumped environments](./_asset/img/091.png)

* ![bumped environments](./_asset/img/092.png)

* ![bumped environments](./_asset/img/093.png)

* ![bumped environments](./_asset/img/094.png)

* ![bumped environments](./_asset/img/095.png)

* ![bumped environments](./_asset/img/096.png)

* ![bumped environments](./_asset/img/097.png)

* ![bumped environments](./_asset/img/098.png)

* ![bumped environments](./_asset/img/099.png)

* ![bumped environments](./_asset/img/100.png)

## EX <a name="example"></a>

---

* ![example](./_asset/img/51.png)

    ```c#
    Shader "Holistic/BumpDiffuse"
    {
        Properties
        {
            _myDiffuse ("Diffuse Texture", 2D) = "white" {}
            _myBump ("Bump Texture", 2D) = "bump" {}
            _mySlider ("Bump Amount", Range(0,10)) = 1
        }
        SubShader
        {
            CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _myDiffuse;
            sampler2D _myBump;
            half _mySlider;

            struct Input {
                float2 uv_myDiffuse;
                float2 uv_myBump;
            };

            void surf (Input IN, inout SurfaceOutput o) {
                o.Albedo = tex2D(_myDiffuse, IN.uv_myDiffuse).rgb;
                o.Normal = UnpackNormal(tex2D(_myBump, IN.uv_myBump));
                o.Normal *= float3(_mySlider,_mySlider,1);
            }
            ENDCG
        }
        Fallback "Diffuse"
    }
    ```

    ```c#
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;

    [ExecuteInEditMode]
    public class NormalPlay:MonoBehaviour
    {
        public Vector3 normal = new Vector3(0,1,0);

        [Range(1.0f, 10.0f)]
        public float xmod = 1;

        [Range(1.0f, 10.0f)]
        public float ymod = 1;

        [Range(1.0f, 10.0f)]
        public float zmod = 1;

        void Update ()
        {
            Vector3 result = new Vector3(normal.x * xmod,
                                        normal.y * ymod,
                                        normal.z * zmod);
            Debug.DrawRay(transform.position,
                            result,
                            Color.red);
        }
    }
    ```