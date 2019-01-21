* [overview](#overview)
* type
    * [color](#color)
    * [range](#range)
    * [texture](#texture)
    * [cube](#cube)
    * [float](#float)
    * [vector](#vector)
* [example](#example)

## Overview <a name="overview"></a>

---

* ![overview](./_asset/img/11.png)

## Type <a name="type"></a>

---

* `color` <a name="color"></a>

    ![overview](./_asset/img/01.png)

* `range` <a name="range"></a>

    ![overview](./_asset/img/02.png)

* `texture` <a name="texture"></a>

    ![overview](./_asset/img/03.png)

    `3d`

    ![overview](./_asset/img/07.png)

    `uv` access

    ![overview](./_asset/img/12.png)

* `cube` <a name="cube"></a>

    ![overview](./_asset/img/04.png)

* `float` <a name="float"></a>

    ![overview](./_asset/img/05.png)

* `vector` <a name="vector"></a>

    ![overview](./_asset/img/06.png)

## EX <a name="example"></a>

---

* `code #1` - set texture (simple)

    ![overview](./_asset/img/14.png)

    ![overview](./_asset/img/15.png)

    `-with slider?`

    ![overview](./_asset/img/16.png)

    ![overview](./_asset/img/17.png)

* `code #2`

    ![example](./_asset/img/27.png)

    ```c#
    Shader "Holistic/FirstShaderChallenge" {

        Properties {
            _myColour ("Example Colour", Color) = (1,1,1,1)
            _myNormal ("Example Normal", Color) = (1,1,1,1)
            _myEmission ("Example Emission", Color) = (1,1,1,1)
        }

        SubShader {
            CGPROGRAM
                #pragma surface surf Lambert

                struct Input {
                    float2 uvMainTex;
                };

                fixed4 _myColour;
                fixed4 _myEmission;
                fixed4 _myNormal;

                void surf (Input IN, inout SurfaceOutput o){
                    o.Albedo = _myColour.rgb;
                    o.Emission = _myEmission.rgb;
                    o.Normal = _myNormal;
                }
            ENDCG
        }

        FallBack "Diffuse"
    }
    ```

    `-set emission by refleciton map?`

    ![overview](./_asset/img/18.png)

    ![overview](./_asset/img/19.png)

    ![overview](./_asset/img/20.png)

    ![overview](./_asset/img/21.png)

    `TIP! - add similar skybox material!`

    ![overview](./_asset/img/23.png)

    ![overview](./_asset/img/24.png)

    ![overview](./_asset/img/25.png)

    ![overview](./_asset/img/26.png)

* `code #3`

    ![example](./_asset/img/28.png)

    ```c#
    Shader "Holistic/PropChallenge2"
    {
        Properties {
            _myTex ("Example Texture", 2D) = "white" {}
        }
        SubShader {

        CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _myTex;
            fixed4 _myColor;

            struct Input {
                float2 uv_myTex;
            };

            void surf (Input IN, inout SurfaceOutput o) {
                o.Albedo = (tex2D(_myTex, IN.uv_myTex)).rgb;
                o.Albedo.g = 1;
            }

        ENDCG
        }
        Fallback "Diffuse"
    }
    ```

* `code #4`

    ![example](./_asset/img/29.png)

    ```c#
    Shader "Holistic/PropChallenge3"
    {
        Properties {
            _myTex ("Example Texture", 2D) = "white" {}
        }
        SubShader {

        CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _myTex;

            struct Input {
                float2 uv_myTex;
            };

            void surf (Input IN, inout SurfaceOutput o) {
                //note below how to create a colour on the fly with code
                float4 green = float4(0,1,0,1);
                o.Albedo = (tex2D(_myTex, IN.uv_myTex) * green).rgb;
            }

        ENDCG
        }
        Fallback "Diffuse"
    }
    ```

* `code #5`

    ![example](./_asset/img/30.png)

    ```c#
    Shader "Holistic/PropChallenge4"
    {
        Properties {
            _myTex ("Texture", 2D) = "white" {}

            //set this texture to black to stop the white
            //overwhelming the effect if no emission texture
            //is present
            _myEmis ("Texture", 2D) = "black" {}
        }
        SubShader {

            CGPROGRAM
            #pragma surface surf Lambert

            sampler2D _myTex;
            sampler2D _myEmis;

            struct Input {
                float2 uv_myTex;
                float2 uv_myEmis;
            };

            void surf (Input IN, inout SurfaceOutput o) {
                o.Albedo = (tex2D(_myTex, IN.uv_myTex)).rgb;
                o.Emission = (tex2D(_myEmis, IN.uv_myEmis)).rgb;
            }

            ENDCG
        }

        Fallback "Diffuse"
    }
    ```