* [overview](#overview)
* [example](#example)

## Overview <a name="overview"></a>

---

* [more @ mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## EX <a name="example"></a>

---

* code #1

	```js
	document.addEventListener("DOMContentLoaded", function(e){
			getText();
	});

	function getText(){
		fetch('asset/txt/data.json')
		.then(function(res){
			return res.text();
		})
		.then(function(data){
			var obj = JSON.parse(data);
			console.log("success: " + obj.data.items.length);
		})
		.catch(function(err){
			console.log(err);
		});
	}
	```

	```json
	{
		"data": {
			"header": "tylrprkr music",
			"items": [
				{
					"id": "Open"
				},
				{
					"id": "OpenNew",
					"label": "Open New"
				},
				{
					"id": "About",
					"label": "About Adobe CVG Viewer..."
				}
			]
		}
	}
	```