* [overview](#overview)
* [basic](#basic)
* [scale](#scale)
* [grab pass](#grab-pass)
* [example](#example)
    * [print vertices](#ex-1)
    * [vf material](#ex-2)
    * [colored material](#ex-3)

## Overview <a name="overview"></a>

---

* ![overview](./_asset/img/03.png)

## basic <a name="basic"></a>

---

* ![basic](./_asset/img/02.png)

* ![basic](./_asset/img/04.png)

* ![basic](./_asset/img/05.png)

* ![basic](./_asset/img/06.png)

* ![basic](./_asset/img/07.png)

* ![basic](./_asset/img/08.png)

* ![basic](./_asset/img/09.png)

* ![basic](./_asset/img/10.png)

* ![basic](./_asset/img/11.png)

* ![basic](./_asset/img/12.png)

* ![basic](./_asset/img/13.png)

* ![basic](./_asset/img/14.png)

## scale <a name="scale"></a>

---

* ![scale](./_asset/img/15.png)

* ![scale](./_asset/img/16.png)

* ![scale](./_asset/img/17.png)

* ![scale](./_asset/img/18.png)

* ![scale](./_asset/img/19.png)

* ![scale](./_asset/img/20.png)

* ![scale](./_asset/img/21.png)

* ![scale](./_asset/img/22.png)

* ![scale](./_asset/img/23.png)

* ![scale](./_asset/img/24.png)

* ![scale](./_asset/img/25.png)

* ![scale](./_asset/img/26.png)

## grab pass <a name="grab-pass"></a>

---

* ![overview](./_asset/img/27.png)

* ![overview](./_asset/img/28.png)

* ![overview](./_asset/img/29.png)

* ![overview](./_asset/img/30.png)

* ![overview](./_asset/img/31.png)

* ![overview](./_asset/img/32.png)

* ![overview](./_asset/img/33.png)

* ![overview](./_asset/img/34.png)

* ![overview](./_asset/img/35.png)

* ![overview](./_asset/img/36.png)

* ![overview](./_asset/img/37.png)

* ![overview](./_asset/img/38.png)

* ![overview](./_asset/img/39.png)

* ![overview](./_asset/img/40.png)

* ![overview](./_asset/img/41.png)

* ![overview](./_asset/img/42.png)

## EX <a name="example"></a>

---

1. `print vertices` <a name="ex-1"></a>

    ![example](./_asset/img/44.png)

    ![example](./_asset/img/45.png)

2. `vf material` <a name="ex-2"></a>

    ```c#
    Shader "Holistic/VFMat"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
            _ScaleUVX ("Scale X", Range(1,10)) = 1
            _ScaleUVY ("Scale Y", Range(1,10)) = 1
        }
        SubShader
        {
            Tags{ "Queue" = "Transparent"}
            GrabPass{}
            Pass
            {
                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag

                #include "UnityCG.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float2 uv:TEXCOORD0;
                };

                struct v2f
                {
                    float2 uv:TEXCOORD0;
                    float4 vertex:SV_POSITION;
                };

                sampler2D _GrabTexture;
                sampler2D _MainTex;
                float4 _MainTex_ST;
                float _ScaleUVX;
                float _ScaleUVY;

                v2f vert (appdata v)
                {
                    v2f o;
                    o.vertex = UnityObjectToClipPos(v.vertex);
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                    o.uv.x = sin(o.uv.x * _ScaleUVX);
                    o.uv.y = sin(o.uv.y * _ScaleUVY);
                    return o;
                }

                fixed4 frag (v2f i):SV_Target
                {
                    fixed4 col = tex2D(_GrabTexture, i.uv);
                    return col;
                }
                ENDCG
            }
        }
    }
    ```

3. `colored material` <a name="ex-3"></a>

    ![example](./_asset/img/43.png)

    ```c#
    Shader "Holistic/VFColouredMat"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
        }
        SubShader
        {
            Pass
            {
                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag

                #include "UnityCG.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float2 uv:TEXCOORD0;
                };

                struct v2f
                {
                    float2 uv:TEXCOORD0;
                    float4 vertex:SV_POSITION;
                    float4 col: COLOR;
                };

                sampler2D _MainTex;
                float4 _MainTex_ST;

                v2f vert (appdata v)
                {
                    v2f o;
                    o.vertex = UnityObjectToClipPos(v.vertex);
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                    o.col.r = o.uv.x;
                    return o;
                }

                fixed4 frag (v2f i):SV_Target
                {
                    fixed4 col = tex2D(_MainTex, i.uv);
                    return col * i.col;
                }
                ENDCG
            }
        }
    }
    ```