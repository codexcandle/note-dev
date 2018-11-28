* [overview](#overview)
* [container](#container)
* [composition root](#composition-root)
* [injection](#injection)
* [binding](#binding)
* [installer](#installer)
	* [reusing mono-installers](#reusing-mono-installers)
* [context](#context)
* [non-monobehaviour](#non-monoheaviour)
* [signal](#signal)
* [container (nested)](#container-nested)

## Overview <a name="overview"></a>

---

* [more @ github](https://github.com/svermeulen/Zenject)

## Container <a name="container"></a>

---

![container](./_asset/img/02.jpg)

## Composition Root <a name="composition-root"></a>

---

![composition root](./_asset/img/01.jpg)

## Injection <a name="injection"></a>

---

* `overview`

	![injection](./_asset/img/04.jpg)

	![injection](./_asset/img/05.jpg)

* `4 ways`

	![injection](./_asset/img/03.jpg)

	![injection](./_asset/img/06.jpg)

	![injection](./_asset/img/07.jpg)

	![injection](./_asset/img/08.jpg)

	![injection](./_asset/img/09.jpg)

## Binding <a name="binding"></a>

---

* `overview`

	![binding](./_asset/img/10.jpg)

	![binding](./_asset/img/14.jpg)

* `demo`

	![binding](./_asset/img/11.jpg)

	![binding](./_asset/img/12.jpg)

* `parts`

	1. `contract type`

		`Bind`
		![binding](./_asset/img/13.jpg)

	2. `result type`

		`To`
		![binding](./_asset/img/15.png)

	3. `identifier`

		`WithId`
		![binding](./_asset/img/16.png)

	4. `construction`

		`FromNew`

		![binding](./_asset/img/17.png)

		`FromInstance`

		![binding](./_asset/img/18.png)

		`FromFactory`

		![binding](./_asset/img/19.png)		

	5. `scope`

		`AsTransient`

		![binding](./_asset/img/20.png)

		`AsCached`

		![binding](./_asset/img/21.png)

		![binding](./_asset/img/23.png)

		`AsSingle`

		![binding](./_asset/img/22.png)

	6. `argument`

		`WithArguments`

		![binding](./_asset/img/24.png)

	6. `condition`

		`When`

		![binding](./_asset/img/25.png)

		`WhenInjectedInto`

		![binding](./_asset/img/26.png)

	7. `sub-container`

		`CopyIntoAllSubContainers`

		![binding](./_asset/img/27.png)

	8. `non-lazy`

		`NonLazy`

		![binding](./_asset/img/28.png)

## Installer <a name="installer"></a>

---

* `3 types`

	![installer](./_asset/img/29.png)

	1. `generic installer`

		![installer](./_asset/img/30.png)

		![installer](./_asset/img/31.png)

	2. `mono-installer`

		![installer](./_asset/img/31b.png)

		![installer](./_asset/img/34.png)

		![installer](./_asset/img/35.png)

		![installer](./_asset/img/36.png)

	3. `scriptable-object-installer`

		![installer](./_asset/img/37.png)

		![installer](./_asset/img/38.png)

## Reusing MonoInstallers <a name="reusing-mono-installers"></a>

---

* `3 ways`

	![reusing mono-installers](./_asset/img/39.png)

	1. `in-scene prefab`

	![reusing mono-installers](./_asset/img/40.png)

	![reusing mono-installers](./_asset/img/41.png)

	![reusing mono-installers](./_asset/img/42.png)

	![reusing mono-installers](./_asset/img/43.png)

	![reusing mono-installers](./_asset/img/44.png)

	![reusing mono-installers](./_asset/img/45.png)

	2. `prefab installer`

	![reusing mono-installers](./_asset/img/46.png)

	![reusing mono-installers](./_asset/img/47.png)

	3. `resource installer`

	![reusing mono-installers](./_asset/img/48.png)

	![reusing mono-installers](./_asset/img/49.png)

	![reusing mono-installers](./_asset/img/50.png)

	![reusing mono-installers](./_asset/img/51.png)

	![reusing mono-installers](./_asset/img/52.png)

	![reusing mono-installers](./_asset/img/53.png)

	![reusing mono-installers](./_asset/img/54.png)