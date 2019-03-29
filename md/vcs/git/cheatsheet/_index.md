* [overview](#overview)

## Overview <a name="overview"></a>

---

1.  download.

	* [git](https://git-scm.com/downloads)

	* [git-lfs](https://git-lfs.github.com/)

2.  set creds.

	```c#
	// name
	git config --global user.name "FIRST_NAME LAST_NAME"
	
	// email
	git config --global user.email "MY_NAME@example.com"
	```

3.  store password.

	```c#
	// mac
	git config --global credential.helper osxkeychain

	// windows
	git config --global credential.helper wincred
	```

4.  to start a new repo:

	```c#
	git init
	```

5.  specify where you want our repo hosted (& name).

	```c#
	git remote add origin "URL"
	```

6.  check status.

	```c#
	git status
	```

7.  add things.

	```c#
	git add "file"

	// -to add everything, use:
	git add .
	git commit -m "initial commit"
	git push origin master
	```

8.  to download a remote repo:

	```c#
	git clone
	```

9.  merge conflicts?

	1. checkout your files one by one

		```c#
		git log
		git checkout SHA "file"
		```

	2. in ide, use git diff. (then add, commit, & push.)

	3. screw things up?

		```c#
		git reset --hard head
		git reset --hard SHA
		git checkout SHA "file"
		```

---

###### REF

---

* `github > post-futurist`

	[Unity Git Stuff](https://github.com/thePostFuturist/UnityGitStuff)