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

## EX <a name="example"></a>

---

* #1 - `standard pbr`

    ```c#
    Shader "Holistic/StandardPBR"
    {
        Properties
        {
            _Color("Color", Color) = (1,1,1,1)
            _MetallicTex ("Metallic (R)", 2D) = "white" {}
            _Metallic("Metallic", Range(0.0, 1.0)) = 0.0
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf Standard

            sampler2D _MetallicTex;
            half _Metallic;
            fixed4 _Color;

            struct Input
            {
                float2 uv_MetallicTex;
            };

            void surf(Input IN, inout SurfaceOutputStandard o)
            {
                o.Albedo = _Color.rgb;
                o.Smoothness = tex2D (_MetallicTex, IN.uv_MetallicTex).r;
                o.Metallic = _Metallic;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* #2 - `standard-spec pbr`

    ```c#
    Shader "Holistic/StandardSpecPBR"
    {
        Properties
        {
            _Color("Color", Color) = (1,1,1,1)
            _MetallicTex ("Metallic (R)", 2D) = "white" {}
            _SpecColor("Specular", Color) = (1,1,1,1)
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf StandardSpecular

            sampler2D _MetallicTex;
            fixed4 _Color;

            struct Input
            {
                float2 uv_MetallicTex;
            };

            void surf(Input IN, inout SurfaceOutputStandardSpecular o)
            {
                o.Albedo = _Color.rgb;
                o.Smoothness = tex2D (_MetallicTex, IN.uv_MetallicTex).r;
                o.Specular = _SpecColor.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* #3 - `standard pbr with emissive slider`

    ![example](_asset/img/28.png)

    ![example](_asset/img/29.png)

    ![example](_asset/img/30.png)

    ```c#
    Shader "Holistic/ChallengePBR1"
    {
        Properties
        {
            _Color("Color", Color) = (1,1,1,1)
            _MetallicTex ("Metallic (R)", 2D) = "white" {}
            _Metallic("Metallic", Range(0.0, 1.0)) = 0.0
            _Emiss("Emission", Range(0.0, 10.0)) = 1.0
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf Standard

            sampler2D _MetallicTex;
            half _Metallic;
            half _Emiss;
            fixed4 _Color;

            struct Input
            {
                float2 uv_MetallicTex;
            };

            void surf(Input IN, inout SurfaceOutputStandard o)
            {
                o.Albedo = _Color.rgb;
                o.Smoothness = tex2D (_MetallicTex, IN.uv_MetallicTex).r;
                o.Metallic = _Metallic;
                o.Emission = tex2D (_MetallicTex, IN.uv_MetallicTex).r * _Emiss;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* #4 - `standard specular pbr with reverse glossiness`

    ![example](_asset/img/31.png)

    ![example](_asset/img/32.png)

    ```c#
    Shader "Holistic/ChallengePBR2"
    {
        Properties
        {
            _Color("Color", Color) = (1,1,1,1)
            _MetallicTex ("Metallic (R)", 2D) = "white" {}
            _SpecColor("Specular", Color) = (1,1,1,1)
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf StandardSpecular

            sampler2D _MetallicTex;
            fixed4 _Color;

            struct Input
            {
                float2 uv_MetallicTex;
            };

            void surf(Input IN, inout SurfaceOutputStandardSpecular o)
            {
                o.Albedo = _Color.rgb;
                o.Smoothness = 0.9-tex2D (_MetallicTex, IN.uv_MetallicTex).r;
                o.Specular = _SpecColor.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```