* [overview](#overview)
* [syntax](#syntax)
	1. [contract type](#contract-type)
	2. [result type](#result-type)
	3. [identifier](#identifier)
	4. [construction](#construction)
	5. [scope](#scope)
	6. [argument](#argument)
	7. [condition](#condition)
	8. [sub-container](#sub-container)		
	9. [non-lazy](#non-lazy)

## Overview <a name="overview"></a>

---

![overview](./_asset/img/10.jpg)

![overview](./_asset/img/14.jpg)

* `demo`

	![binding](./_asset/img/11.jpg)

	![binding](./_asset/img/12.jpg)

* [more @ github](https://github.com/svermeulen/Zenject#binding)

## Syntax <a name="syntax"></a>

---

1. `contract type` <a name="contract-type"></a>

	`Bind`

	![binding](./_asset/img/13.jpg)

2. `result type` <a name="result-type"></a>

	`To`

	![binding](./_asset/img/15.png)

3. `identifier` <a name="identifier"></a>

	`WithId`

	![binding](./_asset/img/16.png)

4. `construction` <a name="construction"></a>

	`FromNew`

	![binding](./_asset/img/17.png)

	`FromInstance`

	![binding](./_asset/img/18.png)

	`FromFactory`

	![binding](./_asset/img/19.png)		

5. `scope` <a name="scope"></a>

	`AsTransient`

	![binding](./_asset/img/20.png)

	`AsCached`

	![binding](./_asset/img/21.png)

	![binding](./_asset/img/23.png)

	`AsSingle`

	![binding](./_asset/img/22.png)

6. `argument` <a name="argument"></a>

	`WithArguments`

	![binding](./_asset/img/24.png)

6. `condition` <a name="condition"></a>

	`When`

	![binding](./_asset/img/25.png)

	`WhenInjectedInto`

	![binding](./_asset/img/26.png)

7. `sub-container` <a name="sub-container"></a>

	`CopyIntoAllSubContainers`

	![binding](./_asset/img/27.png)

8. `non-lazy` <a name="non-lazy"></a>

	`NonLazy`

	![binding](./_asset/img/28.png)

###### REF

---

* infallible code - [`Bindings - Learning Zenject`](https://www.youtube.com/watch?v=qhjC-KWfZRI)