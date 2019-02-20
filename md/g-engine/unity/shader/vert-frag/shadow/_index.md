* [overview](#overview)
* [transfer shadow caster normal offset](#transfer-shadow)
* [pass](#pass)
* [material shadow](#material-shadow)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overview](_asset/img/02.png)

## Transfer Shadow Caster Normal Offset <a name="transform-shadow"></a>

---

* ![transfer shadow caster normal offset](_asset/img/03.png)

* ![transfer shadow caster normal offset](_asset/img/04.png)

* ![transfer shadow caster normal offset](_asset/img/08.png)

## Pass <a name="pass"></a>

---

* ![pass](_asset/img/10.png)

* ![pass](_asset/img/09.png)

* ![pass](_asset/img/14.png)

* ![pass](_asset/img/15.png)

* ![pass](_asset/img/16.png)

* ![pass](_asset/img/17.png)

* ![pass](_asset/img/18.png)

* ![pass](_asset/img/19.png)

## Material Shadow <a name="material-shadow"></a>

---

* ![material shadow](_asset/img/20.png)

* ![material shadow](_asset/img/21.png)

* ![material shadow](_asset/img/22.png)

* ![material shadow](_asset/img/23.png)

* ![material shadow](_asset/img/24.png)

* ![material shadow](_asset/img/25.png)

* ![material shadow](_asset/img/26.png)

* ![material shadow](_asset/img/29.png)

* ![material shadow](_asset/img/30.png)

## EX <a name="example"></a>

---

* `vf diffuse shadows`

    ```c#
    Shader "Holistic/VFDiffuseShadows"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
        }
        SubShader
        {
            Pass
            {
                Tags {"LightMode"="ForwardBase"}

                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag
                #pragma multi_compile_fwdbase nolightmap nodirlightmap nodynlightmap novertexlight
                #include "UnityCG.cginc"
                #include "UnityLightingCommon.cginc"
                #include "Lighting.cginc"
                #include "AutoLight.cginc"

                struct appdata
                {
                    float4 vertex : POSITION;
                    float3 normal : NORMAL;
                    float4 texcoord : TEXCOORD0;
                };

                struct v2f
                {
                    float2 uv : TEXCOORD0;
                    fixed4 diff : COLOR0; 
                    float4 pos : SV_POSITION;
                    SHADOW_COORDS(1)
                };

                v2f vert (appdata v)
                {
                    v2f o;
                    o.pos = UnityObjectToClipPos(v.vertex);
                    o.uv = v.texcoord;
                    half3 worldNormal = UnityObjectToWorldNormal(v.normal);
                    half nl = max(0, dot(worldNormal, _WorldSpaceLightPos0.xyz));
                    o.diff = nl * _LightColor0;
                    TRANSFER_SHADOW(o)

                    return o;
                }

                sampler2D _MainTex;

                fixed4 frag (v2f i) : SV_Target
                {
                    fixed4 col = tex2D(_MainTex, i.uv);
                    fixed shadow = SHADOW_ATTENUATION(i);
                    col.rgb *= i.diff * shadow;
                    return col;
                }
                ENDCG
            }
            Pass
            {
                Tags {"LightMode"="ShadowCaster"}

                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag
                #pragma multi_compile_shadowcaster
                #include "UnityCG.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float3 normal:NORMAL;
                    float4 texcoord:TEXCOORD0;
                };

                struct v2f
                {
                    V2F_SHADOW_CASTER;
                };

                v2f vert(appdata v)
                {
                    v2f o;
                    TRANSFER_SHADOW_CASTER_NORMALOFFSET(o)
                    return o;
                }

                float4 frag(v2f i):SV_Target
                {
                    SHADOW_CASTER_FRAGMENT(i)
                }
                ENDCG
            }
        }
    }
    ```

* `vf diffuse colored shadows`

    ![example](_asset/img/31.png)

    ```c#
    Shader "Holistic/VFDiffuseColouredShadows"
    {
        Properties
        {
            _MainTex ("Texture", 2D) = "white" {}
        }
        SubShader
        {
            Pass
            {
                Tags
                {
                    "LightMode"="ForwardBase"
                }

                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag
                #pragma multi_compile_fwdbase nolightmap nodirlightmap nodynlightmap novertexlight
                #include "UnityCG.cginc"
                #include "UnityLightingCommon.cginc"
                #include "Lighting.cginc"
                #include "AutoLight.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float3 normal:NORMAL;
                    float4 texcoord:TEXCOORD0;
                };

                struct v2f
                {
                    float2 uv:TEXCOORD0;
                    fixed4 diff:COLOR0;
                    float4 pos:SV_POSITION;
                    SHADOW_COORDS(1)
                };

                v2f vert (appdata v)
                {
                    v2f o;
                    o.pos = UnityObjectToClipPos(v.vertex);
                    o.uv = v.texcoord;
                    half3 worldNormal = UnityObjectToWorldNormal(v.normal);
                    half nl = max(0, dot(worldNormal, _WorldSpaceLightPos0.xyz));
                    o.diff = nl * _LightColor0;
                    TRANSFER_SHADOW(o)

                    return o;
                }

                sampler2D _MainTex;

                fixed4 frag (v2f i) : SV_Target
                {
                    fixed4 col = tex2D(_MainTex, i.uv);
                    fixed shadow = SHADOW_ATTENUATION(i);
                    //shadow will be near 0 (black) where darkest
                    //so when it is near 0 add some red
                    col.rgb *= i.diff * shadow + (shadow < 0.2 ? float3(1,0,0):0);
                    return col;
                }
                ENDCG
            }
            Pass
            {
                Tags {"LightMode"="ShadowCaster"}

                CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag
                #pragma multi_compile_shadowcaster
                #include "UnityCG.cginc"

                struct appdata
                {
                    float4 vertex:POSITION;
                    float3 normal:NORMAL;
                    float4 texcoord:TEXCOORD0;
                };

                struct v2f
                {
                    V2F_SHADOW_CASTER;
                };

                v2f vert(appdata v)
                {
                    v2f o;
                    TRANSFER_SHADOW_CASTER_NORMALOFFSET(o)
                    return o;
                }

                float4 frag(v2f i):SV_Target
                {
                    SHADOW_CASTER_FRAGMENT(i)
                }
                ENDCG
            }
        }
    }
    ```