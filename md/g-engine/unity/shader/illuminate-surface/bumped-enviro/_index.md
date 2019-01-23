* [overview](#overview)

## Overview <a name="overview"></a>

---

* ![bumped environments](./_asset/img/080.png)

* ![bumped environments](./_asset/img/081.png)

* ![bumped environments](./_asset/img/082.png)

* ![bumped environments](./_asset/img/083.png)

* ![bumped environments](./_asset/img/084.png)

* ![bumped environments](./_asset/img/085.png)

* ![bumped environments](./_asset/img/086.png)

* ![bumped environments](./_asset/img/087.png)

* ![bumped environments](./_asset/img/088.png)

* ![bumped environments](./_asset/img/089.png)

* ![bumped environments](./_asset/img/090.png)

* ![bumped environments](./_asset/img/091.png)

* ![bumped environments](./_asset/img/092.png)

* ![bumped environments](./_asset/img/093.png)

* ![bumped environments](./_asset/img/094.png)

* ![bumped environments](./_asset/img/095.png)

* ![bumped environments](./_asset/img/096.png)

* ![bumped environments](./_asset/img/097.png)

* ![bumped environments](./_asset/img/098.png)

* ![bumped environments](./_asset/img/099.png)

* ![bumped environments](./_asset/img/100.png)

## EX <a name="example"></a>

---

* #1 - `bumped envioronemnt`

    ```c#
    Shader "Holistic/BumpedEnvironment"
    {
        Properties
        {
            _myDiffuse ("Diffuse Texture", 2D) = "white" {}
            _myBump ("Bump Texture", 2D) = "bump" {}
            _mySlider ("Bump Amount", Range(0,10)) = 1
            _myBright ("Brightness", Range(0,10)) = 1
            _myCube ("Cube Map", CUBE) = "white" {}
        }
        SubShader
        {
            CGPROGRAM
                #pragma surface surf Lambert

                sampler2D _myDiffuse;
                sampler2D _myBump;
                half _mySlider;
                half _myBright;
                samplerCUBE _myCube;

                struct Input
                {
                    float2 uv_myDiffuse;
                    float2 uv_myBump;
                    float3 worldRefl; INTERNAL_DATA
                };

                void surf (Input IN, inout SurfaceOutput o)
                {
                    o.Albedo = tex2D(_myDiffuse, IN.uv_myDiffuse).rgb;
                    o.Normal = UnpackNormal(tex2D(_myBump, IN.uv_myBump)) * _myBright;
                    o.Normal *= float3(_mySlider,_mySlider,1);
                    o.Emission = texCUBE (_myCube, WorldReflectionVector (IN, o.Normal)).rgb;
                }
            ENDCG
        }
        Fallback "Diffuse"
    }
    ```

* #2 - 'bumped ref`

    ![example](./_asset/img/101.png)

    ```c#
    Shader "Holistic/BumpedEnvChallenge"
    {
        Properties
        {
            _myBump ("Bump Texture", 2D) = "bump" {}
            _myCube ("Cube Map", CUBE) = "white" {}
        }
        SubShader
        {
            CGPROGRAM
                #pragma surface surf Lambert

                sampler2D _myBump;
                samplerCUBE _myCube;

                struct Input
                {
                    float2 uv_myBump;
                    float3 worldRefl; INTERNAL_DATA
                };

                void surf (Input IN, inout SurfaceOutput o)
                {
                    o.Normal = UnpackNormal(tex2D(_myBump, IN.uv_myBump)) * 0.3;
                    o.Albedo = texCUBE (_myCube, WorldReflectionVector (IN, o.Normal)).rgb;
                }
            ENDCG
        }
        Fallback "Diffuse"
    }
    ```