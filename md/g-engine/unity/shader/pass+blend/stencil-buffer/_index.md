* [overview](#overview)
* [advanced](./advanced)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overivew](_asset/img/01.png)

* ![overivew](_asset/img/02.png)

* ![overivew](_asset/img/03.png)

* ![overivew](_asset/img/04.png)

* ![overivew](_asset/img/05.png)

* ![overivew](_asset/img/06.png)

* ![overivew](_asset/img/07.png)

* ![overivew](_asset/img/08.png)

* ![overivew](_asset/img/09.png)

* ![overivew](_asset/img/10.png)

* ![overivew](_asset/img/11.png)

* ![overivew](_asset/img/12.png)

* ![overivew](_asset/img/13.png)

* ![overivew](_asset/img/14.png)

* ![overivew](_asset/img/15.png)

* ![overivew](_asset/img/16.png)

* ![overivew](_asset/img/17.png)

* ![overivew](_asset/img/18.png)

* ![overivew](_asset/img/19.png)

* ![overivew](_asset/img/20.png)

* ![overivew](_asset/img/21.png)

* ![overivew](_asset/img/22.png)

* ![overivew](_asset/img/23.png)

* ![overivew](_asset/img/24.png)

* ![overivew](_asset/img/25.png)

* ![overivew](_asset/img/26.png)

* ![overivew](_asset/img/27.png)

* ![overivew](_asset/img/28.png)

* ![overivew](_asset/img/29.png)

## EX <a name="example"></a>

---

* `hole`

    ```c#
    Shader "Holistic/Hole"
    {
        Properties
        {
            _MainTex ("Diffuse", 2D) = "white" {}
        }
        SubShader
        {
            Tags
            {
                "Queue"="Geometry-1"
            }

            ColorMask 0
            ZWrite off
            Stencil
            {
                Ref 1
                Comp always
                Pass replace
            }

            CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _MainTex;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf (Input IN, inout SurfaceOutput o)
            {
                fixed4 c = tex2D (_MainTex, IN.uv_MainTex);
                o.Albedo = c.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* `wall`

    ```c#
    Shader "Holistic/Wall"
    {
        Properties
        {
            _MainTex ("Diffuse", 2D) = "white" {}
        }
        SubShader
        {
            Tags
            {
                "Queue"="Geometry"
            }

            Stencil
            {
                Ref 1
                Comp notequal
                Pass keep
            }

            CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _MainTex;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf (Input IN, inout SurfaceOutput o)
            {
                fixed4 c = tex2D (_MainTex, IN.uv_MainTex);
                o.Albedo = c.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```