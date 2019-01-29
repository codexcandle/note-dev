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

* ![overview](_asset/img/08.png)

* ![overview](_asset/img/09.png)

* ![overview](_asset/img/10.png)

* ![overview](_asset/img/11.png)

* ![overview](_asset/img/12.png)

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

* ![overview](_asset/img/29.png)

## EX <a name="example"></a>

---

* `included graphic asset` (Conifer_Needles_Desktop.tga)

    ![shot](_asset/img/Conifer_Needles_Desktop.tga)

* `leaves`

    ```c#
    Shader "Holistic/Leaves"
    {
        Properties
        {
            _MainTex ("MainTex", 2D) = "white" {}
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Transparent"
            }

            CGPROGRAM
            #pragma surface surf Lambert alpha:fade

            sampler2D _MainTex;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf(Input IN, inout SurfaceOutput o)
            {
                fixed4 c = tex2D(_MainTex, IN.uv_MainTex);
                o.Albedo = c.rgb;
                o.Alpha = c.a;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```