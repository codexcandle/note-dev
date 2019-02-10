* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overview](_asset/img/01.png)

* ![overview](_asset/img/02.png)

* ![overview](_asset/img/03.png)

* ![overview](_asset/img/04.png)

* ![overview](_asset/img/05.png)

* ![overview](_asset/img/06.png)

* ![overview](_asset/img/07.png)

* ![overview](_asset/img/08.png)

* ![overview](_asset/img/09.png)

* ![overview](_asset/img/10.png)

* ![overview](_asset/img/11.png)

* ![overview](_asset/img/12.png)

* ![overview](_asset/img/13.png)

* ![overview](_asset/img/14.png)

* ![overview](_asset/img/15.png)

* ![overview](_asset/img/16.png)

* ![overview](_asset/img/17.png)

* ![overview](_asset/img/18.png)

* ![overview](_asset/img/19.png)

* ![overview](_asset/img/20.png)

* ![overview](_asset/img/21.png)

* ![overview](_asset/img/22.png)

* ![overview](_asset/img/23.png)

* ![overview](_asset/img/24.png)

* ![overview](_asset/img/25.png)

* ![overview](_asset/img/26.png)

* ![overview](_asset/img/27.png)

* ![overview](_asset/img/28.png)

* ![overview](_asset/img/30.png)

* ![overview](_asset/img/31.png)

* ![overview](_asset/img/32.png)

## EX <a name="example"></a>

---

* `basic texture blend`

    `texture`

    ```c#
    Shader "Holistic/BasicTextureBlend"
    {
        Properties
        {
            _MainTex ("MainTex", 2D) = "white" {}
            _DecalTex ("Decal", 2D) = "white" {}
            [Toggle] _ShowDecal("Show Decal?", Float) = 0
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _MainTex;
            sampler2D _DecalTex;
            float _ShowDecal;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf(Input IN, inout SurfaceOutput o)
            {
                fixed4 a = tex2D(_MainTex, IN.uv_MainTex);
                fixed4 b = tex2D(_DecalTex, IN.uv_MainTex) * _ShowDecal;
                o.Albedo = b.r > 0.9 ? b.rgb: a.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

    ```c#
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;

    [ExecuteInEditMode]
    public class DecalOnOff:MonoBehaviour
    {
        Material mat;
        bool showDecal = false;

        void OnMouseDown()
        {
            showDecal = !showDecal;
            if(showDecal)
                mat.SetFloat("_ShowDecal",1);
            else
                mat.SetFloat("_ShowDecal",0);
        }

        void Start()
        {
            mat = this.GetComponent<Renderer>().sharedMaterial;
        }
    }
    ```

    ![example](_asset/img/ZomBunnyDecal.png)