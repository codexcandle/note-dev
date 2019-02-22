* [overview](#overview)
* [example](#example)
    * [plasma](#ex-1)
    * [vf-plasma](#ex-2)

## Overview <a name="overview"></a>

---

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

## Example <a name="example"></a>

---

* `plasma` <a name="ex-1"></a>

    ```c#
    Shader "Holistic/Plasma"
    {
        Properties
        {
        _Tint("Colour Tint", Color) = (1,1,1,1)
        _Speed("Speed", Range(1,100)) = 10
        _Scale1("Scale 1", Range(0.1,10)) = 2
        _Scale2("Scale 2", Range(0.1,10)) = 2
        _Scale3("Scale 3", Range(0.1,10)) = 2
        _Scale4("Scale 4", Range(0.1,10)) = 2
        }
        SubShader
        {
        CGPROGRAM
        #pragma surface surf Lambert

        struct Input
        {
            float2 uv_MainTex;
            float3 worldPos;
        };

        float4 _Tint;
        float _Speed;
        float _Scale1;
        float _Scale2;
        float _Scale3;
        float _Scale4;

        void surf (Input IN, inout SurfaceOutput o)
        {
            const float PI = 3.14159265;
            float t = _Time.x * _Speed;

            // vertical
            float c = sin(IN.worldPos.x * _Scale1 + t);

            // horizontal
            c += sin(IN.worldPos.z * _Scale2 + t);

            // diagonal
            c += sin(_Scale3*(IN.worldPos.x*sin(t/2.0) + IN.worldPos.z*cos(t/3))+t);

            // circular
            float c1 = pow(IN.worldPos.x + 0.5 * sin(t/5),2);
            float c2 = pow(IN.worldPos.z + 0.5 * cos(t/3),2);
            c += sin(sqrt(_Scale4*(c1 + c2)+1+t));

            o.Albedo.r = sin(c/4.0*PI);
            o.Albedo.g = sin(c/4.0*PI + 2*PI/4);
            o.Albedo.b = sin(c/4.0*PI + 4*PI/4);
            o.Albedo *= _Tint;
        }
        ENDCG
        }
        Fallback "Diffuse"
    }
    ```

* `vf plasma` <a name="ex-2"></a>

    ![overview](_asset/img/18.png)

    ```c#
    Shader "Holistic/VFPlasma"
    {
        Properties
        {
        _Tint("Colour Tint", Color) = (1,1,1,1)
        _Speed("Speed", Range(1,100)) = 10
        _Scale1("Scale 1", Range(0.1,10)) = 2
        _Scale2("Scale 2", Range(0.1,10)) = 2
        _Scale3("Scale 3", Range(0.1,10)) = 2
        _Scale4("Scale 4", Range(0.1,10)) = 2
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
                    float4 vertexColor: COLOR0;
                };

                float4 _Tint;
                float _Speed;
                float _Scale1;
                float _Scale2;
                float _Scale3;
                float _Scale4;

                v2f vert (appdata v)
                {
                    v2f o;
                    o.vertex = UnityObjectToClipPos(v.vertex);
                    return o;
                }

                fixed4 frag (v2f i):SV_Target
                {
                    fixed4 col;

                    const float PI = 3.14159265;
                    float t = _Time.x * _Speed;

                    //these are screen coordinates so
                    //get them down to small values for the
                    //sin to use
                    float xpos = i.vertex.x * 0.001;
                    float ypos = i.vertex.y * 0.001;

                    //vertical
                    float c = sin(xpos * _Scale1 + t);

                    //horizontal
                    c += sin(ypos * _Scale2 + t);

                    //diagonal
                    c += sin(_Scale3*(xpos*sin(t/2.0) + ypos*cos(t/3))+t);

                    //circular
                    float c1 = pow(xpos + 0.5 * sin(t/5),2);
                    float c2 = pow(ypos + 0.5 * cos(t/3),2);
                    c += sin(sqrt(_Scale4*(c1 + c2)+1+t));

                    col.r = sin(c/4.0*PI);
                    col.g = sin(c/4.0*PI + 2*PI/4);
                    col.b = sin(c/4.0*PI + 4*PI/4);
                    return col;
                }
                ENDCG
            }
        }
    }
    ```