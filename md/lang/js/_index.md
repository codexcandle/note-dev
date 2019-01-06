* [overview](#overview)
* dom
	* html
		* [inner-html](#inner-html)
	* [select](./dom/select)
	* [alter](./dom/alter)
	* [event](#event)
* [set-timeout](#set-timeout)
* [alert](#alert)
* [console](./console)
* serialize
	* [fetch](./serialize/fetch)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](https://en.wikipedia.org/wiki/JavaScript)

## innerHTML <a name="inner-html"></a>

---

* demo #1

	![innerHTML](_asset/img/02.png)

* demo #2 - `change content of a <p> element with id="demo"`

	```js
	document.getElementById("demo").innerHTML = "Paragraph changed!";
	```

* demo #3 - `delete html content of a <p> element with id="demo"`

	```js
	document.getElementById("demo").innerHTML = "";
	```

* demo #4 - `get html content of <ul> element with id="myList"`

	```js
	var x = document.getElementById("myList").innerHTML;
	```

* demo #5 - `change html content, url, & target of a link`

	```js
	document.getElementById("myAnchor").innerHTML = "W3Schools";
	document.getElementById("myAnchor").href = "https://www.w3schools.com";
	document.getElementById("myAnchor").target = "_blank";
	```

## event <a name="event"></a>

---

* `onload`

	![event](_asset/img/03.png)

* `DOMContentLoaded`

	![event](_asset/img/04.png)

	![event](_asset/img/05.png)

## setTimeout <a name="set-timeout"></a>

---

![setTimeout](_asset/img/00.png)

## Alert <a name="alert"></a>

---

* `remove`

	![alert](_asset/img/01.png)