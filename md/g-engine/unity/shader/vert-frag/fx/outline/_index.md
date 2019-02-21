* [overview](#overview)
* [example](#example)
    * [simple outline](#simple)
    * [advanced outline](#advanced)

## Overview <a name="overview"></a>

---

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

## Example <a name="example"></a>

---

* `simple outline` <a name="simple"></a>

    ```c#
    Shader "Holistic/SimpleOutline"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
            _OutlineColor ("Outline Color", Color) = (0,0,0,1)
            _Outline ("Outline Width", Range (.002, 0.1)) = .005
        }

        SubShader
        {
            Tags
            {
                "Queue"="Transparent"
            }
            ZWrite off

            CGPROGRAM
            #pragma surface surf Lambert vertex:vert

            struct Input
            {
                float2 uv_MainTex;
            };
            float _Outline;
            float4 _OutlineColor;

            void vert (inout appdata_full v)
            {
                v.vertex.xyz += v.normal * _Outline;
            }

            sampler2D _MainTex;
            void surf (Input IN, inout SurfaceOutput o)
            {
                o.Emission = _OutlineColor.rgb;
            }
            ENDCG

            ZWrite on

            CGPROGRAM
            #pragma surface surf Lambert
            struct Input
            {
                float2 uv_MainTex;
            };

            sampler2D _MainTex;
            void surf (Input IN, inout SurfaceOutput o) 
            {
                o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;
            }
            ENDCG

        }
        Fallback "Diffuse"
    }
    ```

* `advanced outline` <a name="advanced"></a>

    ```c#
    Shader "Holistic/AdvOutline"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
            _OutlineColor ("Outline Color", Color) = (0,0,0,1)
            _Outline ("Outline Width", Range (.002, 0.1)) = .005
        }

        SubShader
        {
            CGPROGRAM
            #pragma surface surf Lambert
            struct Input
            {
                float2 uv_MainTex;
            };

            sampler2D _MainTex;
            void surf (Input IN, inout SurfaceOutput o)
            {
                o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;
            }
            ENDCG

        Pass
        {
                Cull Front

                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag

                #include "UnityCG.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float3 normal:NORMAL;
                };

                struct v2f
                {
                    float4 pos:SV_POSITION;
                    fixed4 color:COLOR;
                };

                float _Outline;
                float4 _OutlineColor;

                v2f vert(appdata v)
                {
                    v2f o;
                    o.pos = UnityObjectToClipPos(v.vertex);

                    float3 norm   = normalize(mul ((float3x3)UNITY_MATRIX_IT_MV, v.normal));
                    float2 offset = TransformViewToProjection(norm.xy);

                    o.pos.xy += offset * o.pos.z * _Outline;
                    o.color = _OutlineColor;
                    return o;
                }

                fixed4 frag(v2f i):SV_Target
                {
                    return i.color;
                }
                ENDCG
            }
        }
        Fallback "Diffuse"
    }
    ```