* [vertex:vert](#vertex-vert)
* [appdata](#appdata)
* [compile](#compile)
* [vertices](#vertices)
* [amount](#amount)
* [example](#example)

## vertex:vert <a name="vertex-vert"></a>

---

* ![overview](_asset/img/02.png)

* ![overview](_asset/img/03.png)

* ![overview](_asset/img/04.png)

## appdata <a name="appdata"></a>

---

* ![overview](_asset/img/05.png)

* ![overview](_asset/img/06.png)

* ![overview](_asset/img/07.png)

## compile <a name="compile"></a>

---

* ![overview](_asset/img/09.png)

* ![overview](_asset/img/10.png)

* ![overview](_asset/img/11.png)

* ![overview](_asset/img/12.png)

* ![overview](_asset/img/13.png)

* ![overview](_asset/img/14.png)

## vertices <a name="vertices"></a>

---

* ![overview](_asset/img/15.png)

* ![overview](_asset/img/16.png)

## amount <a name="amount"></a>

---

* ![overview](_asset/img/17.png)

* ![overview](_asset/img/18.png)

* ![overview](_asset/img/19.png)

* ![overview](_asset/img/20.png)

* ![overview](_asset/img/21.png)

## EX <a name="example"></a>

---

* `vertex extrusion`

    ```c#
    Shader "Holistic/Extrude"
    {
        Properties
        {
        _MainTex ("Texture", 2D) = "white" {}
        _Amount ("Extrude", Range(-1,1)) = 0.01
        }

        SubShader
        {
        CGPROGRAM
            #pragma surface surf Lambert vertex:vert

            struct Input
            {
                float2 uv_MainTex;
            };

            struct appdata
            {
                float4 vertex:POSITION;
                float3 normal:NORMAL;
                float4 texcoord:TEXCOORD0;
            };

            float _Amount;

            void vert (inout appdata v)
            {
                v.vertex.xyz += v.normal * _Amount;
            }

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