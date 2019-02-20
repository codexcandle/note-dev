* [overview](#overview)
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

* ![overivew](_asset/img/30.png)

* ![overivew](_asset/img/31.png)

* ![overivew](_asset/img/32.png)

* ![overivew](_asset/img/33.png)

* ![overivew](_asset/img/34.png)

* ![overivew](_asset/img/35.png)

* ![overivew](_asset/img/36.png)

* ![overivew](_asset/img/37.png)

* ![overivew](_asset/img/38.png)

* ![overivew](_asset/img/39.png)

* ![overivew](_asset/img/40.png)

* ![overivew](_asset/img/41.png)

* ![overivew](_asset/img/42.png)

* ![overivew](_asset/img/43.png)

## EX <a name="example"></a>

---

* `bump diffuse stencil`

```c#
Shader "Holistic/BumpDiffuseStencil"
{
    Properties
    {
        _Color("Color", Color) = (1,1,1,1)
        _myDiffuse ("Diffuse Texture", 2D) = "white" {}
        _myBump ("Bump Texture", 2D) = "bump" {}
        _mySlider ("Bump Amount", Range(0,10)) = 1

        _SRef("Stencil Ref", Float) = 1
        [Enum(UnityEngine.Rendering.CompareFunction)]  _SComp("Stencil Comp", Float) = 8
        [Enum(UnityEngine.Rendering.StencilOp)]        _SOp("Stencil Op", Float) = 2
    }
    SubShader
    {
        Stencil
        {
            Ref[_SRef]
            Comp[_SComp]
            Pass[_SOp]
        }  

        CGPROGRAM
        #pragma surface surf Lambert

        sampler2D _myDiffuse;
        sampler2D _myBump;
        half _mySlider;
        float4 _Color;

        struct Input
        {
            float2 uv_myDiffuse;
            float2 uv_myBump;
        };

        void surf (Input IN, inout SurfaceOutput o)
        {
            o.Albedo = tex2D(_myDiffuse, IN.uv_myDiffuse).rgb * _Color.rgb;
            o.Normal = UnpackNormal(tex2D(_myBump, IN.uv_myBump));
            o.Normal *= float3(_mySlider,_mySlider,1);
        }

      ENDCG
    }
    Fallback "Diffuse"
}
```

* `stencil window`

    ```c#
    Shader "Holistic/StencilWindow"
    {
        Properties
        {
            _Color("Main Color", Color) = (1,1,1,1)

            _SRef("Stencil Ref", Float) = 1
            [Enum(UnityEngine.Rendering.CompareFunction)]	_SComp("Stencil Comp", Float) = 8
            [Enum(UnityEngine.Rendering.StencilOp)]	_SOp("Stencil Op", Float) = 2
        }

        SubShader
        {
            Tags{ "Queue" = "Geometry-1" }

            ZWrite off
            ColorMask 0

            Stencil
            {
                Ref[_SRef]
                Comp[_SComp]
                Pass[_SOp]o
            }

            CGPROGRAM
                #pragma surface surf Lambert

                sampler2D _myDiffuse;

                struct Input
                {
                    float2 uv_myDiffuse;
                };

                void surf (Input IN, inout SurfaceOutput o)
                {
                    o.Albedo = tex2D(_myDiffuse, IN.uv_myDiffuse).rgb;
                }
            ENDCG
        }
    }
    ```