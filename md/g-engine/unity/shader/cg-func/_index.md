* [overview](#overview)
* [abs](#abs)
* [acos](#acos)
* [all](#all)
* [any](#any)
* [asin](#asin)
* [atan](#atan)
* [atan2](#atan2)
* [ceil](#ceil)
* [clamp](#clamp)
* [cos](#cos)
* [cosh](#cosh)
* [cross](#cross)
* [ddx](#ddx)
* [ddy](#ddy)
* [debug](#debug)
* [degrees](#degrees)
* [determinant](#determinant)
* [distance](#distance)
* [dot](#dot)
* [exp](#exp)
* [exp2](#exp2)
* [faceforward](#faceforward)
* [floor](#floor)
* [fmod](#fmod)
* [fract](#fract)
* [frexp](#frexp)
* [isfinite](#isfinite)
* [isinf](#isinf)
* [isnan](#isnan)
* [ldexp](#ldexp)
* [length](#length)
* [lerp](#lerp)
* [lit](#lit)
* [log](#log)
* [log2](#log2)
* [log10](#log10)
* [max](#max)
* [min](#min)
* [modf](#modf)
* [mul](#mul)
* [noise](#noise)
* [normalize](#normalize)
* [pow](#pow)
* [radians](#radians)
* [reflect](#reflect)
* [refract](#refract)
* [round](#round)
* [rsqrt](#rsqrt)
* [saturate](#saturate)
* [sign](#sign)
* [sin](#sin)
* [sincos](#sincos)
* [sinh](#sinh)
* [smoothstep](#smoothstep)
* [step](#step)
* [sqrt](#sqrt)
* [tan](#tan)
* [tanh](#tanh)
* [tex1D](#tex1D)
* [tex1DProj](#tex1DProj)
* [tex2D](#tex2D)
* [tex2DProj](#tex2DProj)
* [texRECT](#texRECT)
* [tex3D](#tex3D)
* [tex3DProj](#tex3DProj)
* [texCUBE](#texCUBE)
* [texCUBEProj](#texCUBEProj)
* [transpose](#transpose)

## Overview <a name="overview"></a>

---

* ![overview](_asset/img/09.png)

* [more @ wikipedia](https://en.wikipedia.org/wiki/Cg_(programming_language))

## abs <a name="abs"></a>

---

* `abs(x)`- absolute value of x.

## acos <a name="acos"></a>

---

* `acos(x)`- arccos of x in range [0, pi], x in [-1, 1].

## all <a name="all"></a>

---

* `all(x)`- true if ALL components of x != 0 (- false otherwise).

## any <a name="any"></a>

---

* `any(x)`- true if ANY component of x != 0 (- false otherwise).

## asin <a name="asin"></a>

---

* `asin(x)`- arcsin of x in range [-pi / 2, pi / 2]; x in [-1, 1].

## atan <a name="atan"></a>

---

* `atan(x)`- arctan of x in range [-pi / 2, pi / 2].

## atan2 <a name="atan2"></a>

---

* `atan2(y, x)`- arctan y / x in range [-pi, pi].

## ceil <a name="ceil"></a>

---

* `ceil(x)`- smallest integer not less than x.

## clamp <a name="clamp"></a>

---

* `clamp(x, a, b)`- x clamped to the range [a, b]; A if x < a, B if x > b else returns x.

## cos <a name="cos"></a>

---

* `cos(x)`- cos of x.

## cosh <a name="cosh"></a>

---

* `cosh(x)`- hyperbolic cos of x.

## cross <a name="cross"></a>

---

* `cross(A, B)`- cross product of vectors A and B (A and B must be three-component).

## ddx <a name="ddx"></a>

---

* `ddx(a)`- partial derivative of A with respect to screen-space x coord.

## ddy <a name="ddy"></a>

---

* `ddy(a)`- partial derivative of A with respect to screen-space Y coord.

## debug <a name="debug"></a>

---

* `debug(float4 x)`- if compiler DEBUG option is enabled, causes shader to halt with X copied to the COLOR output - otherwise it does nothing.

## degrees <a name="deegrees"></a>

---

* `degrees(x)`- convert radians to degrees.

## determinant <a name="determinant"></a>

---

* `determinant(x)`- determinant of matrix x.

## distance <a name="distance"></a>

---

* `distance(p1, p2)`- pythagorean distance between p1 and p2.

## dot <a name="dot"></a>

---

* `dot(A, B)`- dot product of A and B.

## exp <a name="exp"></a>

---

* `exp(x)`- exponential func e^x.

## exp2 <a name="exp2"></a>

---

* `exp2(x)`- exponential func 2^x.

## faceforward <a name="faceforward"></a>

---

* `faceforward(N, l, Ng)`- N if dot (Ng, 1) < 0 otherwise (-N).

## floor <a name="floor"></a>

---

* `floor(x)`- largest integer not greater than x.

## fmod <a name="fmod"></a>

---

* `fmod(x, y)`- remainder of x / y (with the same sign as x).  (If y == 0, result is unidentified.)

## fract <a name="fract"></a>

---

* `fract(x)`- fractional part of x.

## frexp <a name="fract"></a>

---

* `frexp(x, out exp)`- splits x into normlaized fraction in the interval [?, 1], which is returned, & a power of 2, which is stored in exp.  (If x == 0, both parts of the results are 0.)

## isfinite <a name="isfinite"></a>

---

* `isfinite(x)`- returns true if x is finite.

## isinf <a name="isinf"></a>

---

* `isinf(x)`- returns true if x is infinite.

## isnan <a name="isfinite"></a>

---

* `isnan(x)`- returns true if x is NaN.

## ldexp <a name="ldexp"></a>

---

* `ldepx(x, n)`- x * 2^n.

## length <a name="length"></a>

---

* `length(v)`- pythagorean length of vector.

## lerp <a name="lerp"></a>

---

* `lerp(a, b, f)`- linear interpolation: (1 - f) * a + b * f, f can be a vector of same legnth as A & B.

## lit <a name="lit"></a>

---

* `lit(NDotL, NDotH, m)`- computes lighting coefficients (m is the shininess). Returns: float4: .x = ambient (always 1), .y = diffuse (0 if N.L < 0), .z = specular (0 N.L < 0 or N.H < 0); .w==1.0.

## log <a name="log"></a>

---

* `log(x)`- natural logarithm (x > 0).

## log2 <a name="log2"></a>

---

* `log2(x)`- Log Base 2 (x > 0).

## log10 <a name="log10"></a>

---

* `log2(x)`- Log Base 10 (x > 0).

## max <a name="max"></a>

---

* `max(a, b)`- maximum of A and B.

## min <a name="min"></a>

---

* `min(a, b)`- minimum of A and B.

## modf <a name="modf"></a>

---

* `modf(x, out ip)`- splits X into int and frac parts (each with the same sign as X).  Stores the int part in IP and returns the fractional part.

## mul <a name="mul"></a>

---

* `mul(M, N)`- matrix product of matrix M and matrix N; if M has size AxB, and N has size BxC, returns an AxC.

* `mul(M, v)`- product of matrix M, and column vector v:  If M has size AxB, and v is Bx1, returns Ax1.

* `mul(v, M)`- product of row vector V and matrix M; if v is a 1xA, and M is AxB, returns a 1xB.

## noise <a name="noise"></a>

---

* `noise(x)`- noise function; the returned value is between 0 and 1, and is always the same for a given input value.

## normalize <a name="normalize"></a>

---

* `normalize(v)`- normalize v.

## pow <a name="pow"></a>

---

* `pow(x, y)`- x^y.

## radians <a name="radians"></a>

---

* `radians(x)`- convert degrees to radians.

## reflect <a name="reflect"></a>

---

* `reflect(l, N)`- computes reflection of l in a plane iwth surface normal N (three-component vectors only).

## refract <a name="refract"></a>

---

* `refract(l, N, eta)`- computes refraction of l in a plane with surface normal N and refractive index eta.  Returns (0, 0, 0) for total internal reflection (three-component vectors only).

## round <a name="round"></a>

---

* `round(x)`- closest integer to x.

## rsqrt <a name="rsqrt"></a>

---

* `rsqrt(x)`- reciprocal square root of x (x > 0).

## saturate <a name="saturate"></a>

---

* `saturate(x)`- clamps x to [0, 1].

## sign <a name="sign"></a>

---

* `sign(x)`- sign of x (returns -1, 0, or 1

## sin <a name="sin"></a>

---

* `sin(x)`- sin of x.

## sincos <a name="sincos"></a>

---

* `sincos(float x, out s, out c)`- s is set to sin(x), and c to cos(x).

## sinh <a name="sinh"></a>

---

* `sinh(x)`- hyperbolic sine of x.

## smoothstep <a name="smoothstep"></a>

---

* `smoothstep(min, max, x)`- for values of x b/n min & max.  Returns a smoothly varying vlaue that ranges form 0 at x == min to 1 at x == max.  X is clamped to the range pmin, max[ and then returs a 2 * (x - min) / (max - min) ^ 3 + 3 * (x - min) / (max - min) ^2.

## step <a name="step"></a>

---

* `step(a, x)`- 0 if x < a, 1 if x >=a.

## sqrt <a name="sqrt"></a>

---

* `sqrt(x)`- square root of x (x > 0)

## tan <a name="tan"></a>

---

* `tan(x)`- tan of x.

## tanh <a name="tanh"></a>

---

* `tan(x)`- hyperbolic tan of x.

## tex1D <a name="tex1D"></a>

---

* `tex1D(sampler1D tex, float s)`- 1D nonprojective texture lookup.

* `tex1D(sampler1D tex, float s, float dsdx, float dsdy)`- 1D nonprojective texture lookup with derivatives.

* `tex1D(sampler1D tex, float2 sz)`- 1D nonprojective depth compare texture lookup.

* `tex1D(sampler1D tex, float2 sz, float dsdx, float dsdy)`- 1D nonprojective depth compare texture lookup (with derivatives).

## tex1DProj <a name="tex1DProj"></a>

---

* `tex1DProj(sampler1D tex, float2 sq)`- 1D nonprojective texture lookup.

* `tex1DProj(sampler1D tex, float3 szq)`- 1D projective depth compare texture lookup.

## tex2D <a name="tex2D"></a>

---

* `tex2D(sampler2D tex, float2 s)`- 2D nonprojective texture lookup.

* `tex2D(sampler2D tex, float2 s, float2 dsdx, float2 dsdy)`- 2D nonprojective texture lookup (with derivatives).

* `tex2D(sampler2D tex, float3 sz)`- 2D nonprojective depth compare texture lookup.

* `tex2D(sampler2D tex, float3 sz, float2 dsdx, float2 dsdy)`- 2D nonprojective depth compare texture lookup (with derivatives).

## tex2DProj <a name="tex2DProj"></a>

---

* ![tex2DProj](_asset/img/01.png)

## texRECT <a name="texRECT"></a>

---

* ![texRECT](_asset/img/02.png)

## texRECTProj <a name="texRECTProj"></a>

---

* ![texRECTProj](_asset/img/03.png)

## tex3D <a name="tex3D"></a>

---

* ![tex3D](_asset/img/04.png)

* ![tex3D](_asset/img/05.png)

## tex3DProj <a name="tex3DProj"></a>

---

* ![tex3DProj](_asset/img/06.png)

## texCUBE <a name="texCUBE"></a>

---

* ![texCUBE](_asset/img/07.png)

## transpose <a name="transpose"></a>

---

* ![transpose](_asset/img/08.png)