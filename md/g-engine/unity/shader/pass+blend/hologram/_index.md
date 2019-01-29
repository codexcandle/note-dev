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

## EX <a name="example"></a>

---

* `hologram`

    ```c#
    Shader "Holistic/Hologram"
    {
        Properties
        {
        _RimColor ("Rim Color", Color) = (0,0.5,0.5,0.0)
        _RimPower ("Rim Power", Range(0.5,8.0)) = 3.0
        }
        SubShader
        {
        Tags{"Queue" = "Transparent"}

        Pass
        {
            ZWrite On
            ColorMask 0
        }

        CGPROGRAM

        #pragma surface surf Lambert alpha:fade
        struct Input
        {
            float3 viewDir;
        };

        float4 _RimColor;
        float _RimPower;

        void surf (Input IN, inout SurfaceOutput o)
        {
            half rim = 1.0 - saturate(dot (normalize(IN.viewDir), o.Normal));
            o.Emission = _RimColor.rgb * pow (rim, _RimPower) * 10;
            o.Alpha = pow (rim, _RimPower);
        }
        ENDCG
        }
        Fallback "Diffuse"
    }
    ```