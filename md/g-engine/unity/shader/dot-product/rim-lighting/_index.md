* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overivew](_asset/img/01.png)

* ![overivew](_asset/img/02.png)

* ![overivew](_asset/img/04.png)

* ![overivew](_asset/img/05.png)

* ![overivew](_asset/img/07.png)

* ![overivew](_asset/img/08.png)

* ![overivew](_asset/img/09.png)

* ![overivew](_asset/img/10.png)

* ![overivew](_asset/img/11.png)

* ![overivew](_asset/img/12.png)

* ![overivew](_asset/img/13.png)

* ![overivew](_asset/img/14.png)

* ![overivew](_asset/img/15.png)

* ![overivew](_asset/img/17.png)

* ![overivew](_asset/img/18.png)

* ![overivew](_asset/img/19.png)

* ![overivew](_asset/img/20.png)

* ![overivew](_asset/img/21.png)

* ![overivew](_asset/img/22.png)

* ![overivew](_asset/img/23.png)

* ![overivew](_asset/img/24.png)

## EX <a name="example"></a>

---

* code - `rim shader`

    ```c#
    Shader "Holistic/Rim"
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
            };

            float4 _RimColor;
            float _RimPower;
            void surf (Input IN, inout SurfaceOutput o) {
                half rim = 1.0 - saturate(dot (normalize(IN.viewDir), o.Normal));
                o.Emission = _RimColor.rgb * pow (rim, _RimPower);
            }
            ENDCG
        }

        Fallback "Diffuse"
        }
    ```