* [overview](#overview)
* get-element
	* [by-id](#get-element-by-id)
	* [by-tag-name](#get-element-by-tag-name)
	* [by-class-name](#get-element-by-class-name)
* [query-selector](#query-selector)
* [query-selector-all](#query-selector-all)

## Overview <a name="overview"></a>

---

* [more @ wikipedia](http://www.infocodify.com/html_dom/selecting_items)

## getElementById <a name="get-element-by-id"></a>

---

* returns element that matches specific ID value you pass to it.
* returns `null` if no element on the page has the specified ID.
* demo

	```js
	<script type="text/javascript">
		var byId = function()
		{
			var element = document.getElementById("outerDiv");
			alert(element.innerHTML);
		}
	</script>
	```

## getElementByTagName <a name="get-element-by-tag-name"></a>

---

* used when you want to do something to all elements of a particular type
* demo

```js
<script type="text/javasript">
var tag = function(){
	var paragraphs = document.getElementsByTagName("p");
	alert("there are " + paragraphs.length + " Paragraphs is the DOM");
}
</script>
```

## getElementByClassName <a name="get-element-by-class-name"></a>

---

* get all elements of the same CSS class
* useful when you have many elements with the same style but perhaps want to modify them at run time.
* returns a `NodeList`
* demo

	```js
	<script type="text/javascript">
		var className = function()
		{
			var paragraphs = document.getElementsByClassName("subPara");
			alert("<p> ekenebts with class subPara: " + paragraphs.length);
		};
	</script>
	```

## querySelector <a name="query-selector"></a>

---

* returns the FIRST element it finds that matches the selector criteria passed to it
* demo - `find by unique id`

	```js
	<script type="text/javascript">
		var selector = function()
		{
			var paragraphs = document.querySelector("#outerDiv");
			alert("Selected the DOm element with unique ID=outerDiv");
		}
	</script>
	```

## querySelectorAll <a name="query-selector-all"></a>

---

* returns all elements that match the selector criteria passed in
* demo

	```js
	<script type="text/javascript">
		var selectAll = function()
		{
			var paragraphs = document.querySelectorAll("p");
			alert("selected all <p> with quesrySelectAll");
		};
	</script>
	```