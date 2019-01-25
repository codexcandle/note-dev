* [basic lambert](#basic-lambert)
* [basic blinn](#basic-blinn)
* [toon ramp](#toon-ramp)
* [example](#example)

## Basic Lambert <a name="basic-lambert"></a>

---

* ![overview](_asset/img/01.png)

* ![overview](_asset/img/05.png)

* ![overview](_asset/img/06.png)

* ![overview](_asset/img/07.png)

* ![overview](_asset/img/08.png)

* ![overview](_asset/img/09.png)

## Basic Blinn <a name="basic-blinn"></a>

---

* ![overview](_asset/img/10.png)

* ![overview](_asset/img/11.png)

* ![overview](_asset/img/12.png)

* ![overview](_asset/img/13.png)

* ![overview](_asset/img/14.png)

* ![overview](_asset/img/15.png)

## Toon Ramp <a name="toon-ramp"></a>

---

* ![overview](_asset/img/16.png)

* ![overview](_asset/img/17.png)

* ![overview](_asset/img/18.png)

* ![overview](_asset/img/19.png)

* ![overview](_asset/img/20.png)

## EX <a name="example"></a>

---

* #1 - `basic lambert`

    ```c#
    Shader "Holistic/BasicLambert"
    {
        Properties
        {
            _Colour("Colour", Color) = (1,1,1,1)
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf BasicLambert

            half4 LightingBasicLambert(SurfaceOutput s, half3 lightDir, half atten)
            {
                half NdotL = dot (s.Normal, lightDir);
                half4 c;
                c.rgb = s.Albedo * _LightColor0.rgb * (NdotL * atten);
                c.a = s.Alpha;
                return c;
            }

            float4 _Colour;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf(Input IN, inout SurfaceOutput o)
            {
                o.Albedo = _Colour.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* #2 - `basic blinn`

    ```c#
    Shader "Holistic/BasicBlinn"
    {
        Properties
        {
            _Colour("Colour", Color) = (1,1,1,1)
        }
        SubShader
        {
            Tags
            {
                "Queue" = "Geometry"
            }

            CGPROGRAM
            #pragma surface surf BasicBlinn

            half4 LightingBasicBlinn (SurfaceOutput s,
                                        half3 lightDir,
                                        half3 viewDir,
                                        half atten)
            {
                half3 h = normalize (lightDir + viewDir);

                half diff = max (0, dot (s.Normal, lightDir));

                float nh = max (0, dot (s.Normal, h));
                float spec = pow (nh, 48.0);

                half4 c;
                c.rgb = (s.Albedo *
                            _LightColor0.rgb *
                            diff + _LightColor0.rgb * spec) * atten;
                c.a = s.Alpha;

                return c;
            }

            float4 _Colour;

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf(Input IN, inout SurfaceOutput o)
            {
                o.Albedo = _Colour.rgb;
            }
            ENDCG
        }
        FallBack "Diffuse"
    }
    ```

* #3 - `toon ramp` (with texture below!)

    ![example](_asset/img/21.png)

    ```c#
    Shader "Holistic/ToonRamp"
    {
        Properties
        {
            _Color  ("Color", Color) = (1,1,1,1)
            _RampTex ("Ramp Texture", 2D) = "white"{}
        }

        SubShader
        {
            CGPROGRAM
            #pragma surface surf ToonRamp

            float4 _Color;
            sampler2D _RampTex;

            float4 LightingToonRamp (SurfaceOutput s, fixed3 lightDir, fixed atten)
            {
                float diff = dot (s.Normal, lightDir);
                float h = diff * 0.5 + 0.5;
                float2 rh = h;
                float3 ramp = tex2D(_RampTex, rh).rgb;

                float4 c;
                c.rgb = s.Albedo * _LightColor0.rgb * (ramp);
                c.a = s.Alpha;
                return c;
            }

            struct Input
            {
                float2 uv_MainTex;
            };

            void surf (Input IN, inout SurfaceOutput o)
            {
                o.Albedo = _Color.rgb;
            }

            ENDCG
        }

        FallBack "Diffuse"
    }
    ```

* #4 - `toon ramp albedo`

    ![example](_asset/img/22.png)

    ```c#
    Shader "Holistic/ToonRampAlbedo"
    {
        Properties
        {
            _Color  ("Color", Color) = (1,1,1,1)
            _RampTex ("Ramp Texture", 2D) = "white"{}
        }

        SubShader
        {
            CGPROGRAM
            #pragma surface surf ToonRamp

            float4 _Color;
            sampler2D _RampTex;

            float4 LightingToonRamp (SurfaceOutput s, fixed3 lightDir, fixed atten)
            {
                float diff = dot (s.Normal, lightDir);
                float h = diff * 0.5 + 0.5;
                float2 rh = h;
                float3 ramp = tex2D(_RampTex, rh).rgb;

                float4 c;
                c.rgb = s.Albedo * _LightColor0.rgb * (ramp);
                c.a = s.Alpha;
                return c;
            }

            struct Input
            {
                float2 uv_MainTex;
                float3 viewDir;
            };

            void surf (Input IN, inout SurfaceOutput o)
            {
                float diff = dot (o.Normal, IN.viewDir);
                float h = diff * 0.5 + 0.5;
                float2 rh = h;
                o.Albedo = tex2D(_RampTex, rh).rgb;
            }

            ENDCG
        }

        FallBack "Diffuse"
    }
    ```

* #5 - `basic blinn + sin`

    ![example](_asset/img/23.png)

    ![example](_asset/img/24.png)