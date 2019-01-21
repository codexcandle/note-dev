* [overview](#overview)
* [create](#create)
* [shaderlab](#shaderlab)
* [cg-program](#cg-program)
* [example](#example)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/Shader)

## Create <a name="create"></a>

---

* ![create](_asset/img/01.png)

* ![create](_asset/img/02.png)

* ![create](_asset/img/05.png)

## Shaderlab <a name="shaderlab"></a>

---

* ![shaderlab](_asset/img/03.png)

* ![shaderlab](_asset/img/04.png)

* ![shaderlab](_asset/img/06.png)

## CG-Program <a name="cg-program"></a>

---

* ![cg-program](_asset/img/07.png)

* ![cg-program](_asset/img/08.png)

* ![cg-program](_asset/img/09.png)

* ![cg-program](_asset/img/10.png)

* ![cg-program](_asset/img/11.png)

* ![cg-program](_asset/img/12.png)

* ![cg-program](_asset/img/13.png)

* ![cg-program](_asset/img/14.png)

* ![cg-program](_asset/img/15.png)

* ![cg-program](_asset/img/16.png)

* ![cg-program](_asset/img/17.png)

* ![cg-program](_asset/img/18.png)

* ![cg-program](_asset/img/20.png)

* ![cg-program](_asset/img/21.png)

* ![cg-program](_asset/img/22.png)

* ![cg-program](_asset/img/23.png)

## EX <a name="example"></a>

---

* ![cg-program](_asset/img/24.png)

* code

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