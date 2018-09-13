* [overview](#overview)
* example
	* [create file](#create-file)
	* [delete file](#delete-file)

## Overview <a name="overview"></a>

---

* [more on wikipedia...](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

## EX

---

### create file <a name="create-file"></a>\

* 	using 'touch':

	```narkdown
		touch /Users/username/.ssh/config
	```

* injected text:

	```markdown
		echo "some text" > myfile.txt
	```

* injected text (with "embedded quotes"):

	```markdown
		// :
		echo "console.log('nice')" > hello.js
	```

### delete file <a name="delete-file"></a>\

* basic:

	```markdown
		rm file.txt
	```