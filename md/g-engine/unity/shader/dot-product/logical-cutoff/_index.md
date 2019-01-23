* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overivew](_asset/img/01.png)

* ![overivew](_asset/img/02.png)

* ![overivew](_asset/img/03.png)

* ![overivew](_asset/img/05.png)

* ![overivew](_asset/img/06.png)

* ![overivew](_asset/img/07.png)

* ![overivew](_asset/img/09.png)

* ![overivew](_asset/img/10.png)

* ![overivew](_asset/img/11.png)

* ![overivew](_asset/img/12.png)

* ![overivew](_asset/img/13.png)

* ![overivew](_asset/img/14.png)

* ![overivew](_asset/img/15.png)

* ![overivew](_asset/img/17.png)

* ![overivew](_asset/img/20.png)

* ![overivew](_asset/img/21.png)

* ![overivew](_asset/img/22.png)

* ![overivew](_asset/img/23.png)

* ![overivew](_asset/img/24.png)

* ![overivew](_asset/img/25.png)

## EX <a name="example"></a>

---

* #1 - `Cutoff`

    ```c#
    Shader "Holistic/Cutoff"
    {
        Properties
        {
            _RimColor ("Rim Color", Color) = (0,0.5,0.5,0.0)
            _RimPower ("Rim Power", Range(0.5,8.0)) = 3.0
        }
        SubShader
        {
            CGPROGRAM
            #pragma surface surf Lambert

            struct Input
            {
                float3 viewDir;
                float3 worldPos;
            };

            float4 _RimColor;
            float _RimPower;

            void surf (Input IN, inout SurfaceOutput o)
            {
                half rim = 1 - saturate(dot(normalize(IN.viewDir), o.Normal));
                o.Emission = frac(IN.worldPos.y*10 * 0.5) > 0.4 ?
                                float3(0,1,0)*rim: float3(1,0,0)*rim;
            }
            ENDCG
        }
        Fallback "Diffuse"
    }
    ```

* #2 - `Cutoff with Diffuse`

    ![overivew](_asset/img/26.png)

    ```c#
    Shader "Holistic/CutoffWithDiffuse"
    {
        Properties
        {
            _MainTex ("Base (RGB)", 2D) = "white" { }
            _RimColor ("Rim Color", Color) = (0,0.5,0.5,0.0)
            _RimPower ("Rim Power", Range(0.5,8.0)) = 3.0
            _StripeWidth ("StripeWidth", Range(1,20)) = 10
        }
        SubShader
        {
            CGPROGRAM
            #pragma surface surf Lambert

            struct Input
            {
                float2 uv_MainTex;
                float3 viewDir;
                float3 worldPos;
            };

            sampler2D _MainTex;
            float4 _RimColor;
            float _RimPower;
            float _StripeWidth;

            void surf (Input IN, inout SurfaceOutput o)
            {
                o.Albedo = tex2D(_MainTex, IN.uv_MainTex).rgb;
                half rim = 1 - saturate(dot(normalize(IN.viewDir), o.Normal));
                o.Emission = frac(IN.worldPos.y*(20-_StripeWidth) * 0.5) > 0.4 ? 
                                float3(0,1,0)*rim: float3(1,0,0)*rim;
            }
            ENDCG
        }
        Fallback "Diffuse"
    }
    ```