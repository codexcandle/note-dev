* [overview](#overview)

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

## EX <a name="example"></a>

---

* `basic blinn-phong`

    ```c#
    Shader "Holistic/BasicBlinn"
    {
        Properties
        {
            _Colour("Colour", Color) = (1,1,1,1)
            _SpecColor("Colour", Color) = (1,1,1,1)
            _Spec("Specular", Range(0,1)) = 0.5
            _Gloss("Gloss", Range(0,1)) = 0.5
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf BlinnPhong

            float4 _Colour;
            half _Spec;
            fixed _Gloss;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf(Input IN, inout SurfaceOutput o)
            {
                o.Albedo = _Colour.rgb;
                o.Specular = _Spec;
                o.Gloss = _Gloss;
            }
            ENDCG
        }
        FallBack "Diffuse"

    }
    ```