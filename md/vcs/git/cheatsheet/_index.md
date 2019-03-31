1. [download tools](#tools)
2. [save creds](#creds)
3. [store password](#password)
4. [download remote](#download-remote)
5. [start repo](#start-repo)
6. [set remote repo](#remote-repo)
7. [check status](#status)
8. [add files](#add-files)
9. [resolve merge conflicts](#merge-conflicts)

## 1.  Download Tools <a name="tools"></a>

---

* [git](https://git-scm.com/downloads)

* [git-lfs](https://git-lfs.github.com/)

## 2.  Save Creds <a name="creds"></a>

---

* set credentials

	```c#
	// name
	git config --global user.name "FIRST_NAME LAST_NAME"

	// email
	git config --global user.email "MY_NAME@example.com"
	```

## 3.  Store Password <a name="password"></a>

---

* set keychain credential to auto-login

	```c#
	// mac
	git config --global credential.helper osxkeychain

	// windows
	git config --global credential.helper wincred
	```

## 4.  Download Remote Repo <a name="download-remote"></a>

---

* clone via:

	```c#
	git clone
	```

## 5.  Start Repo <a name="start-repo"></a>

---

* start with

	```c#
	git init
	```

## 6.  Specify Remote Repo <a name="remote-repo"></a>

---

* specify where you want our repo hosted (& name)

	```c#
	git remote add origin "URL"
	```

## 7.  Check Status <a name="status"></a>

---

* check status

	```c#
	git status
	```

## 8.  Add Files <a name="add-files"></a>

---

* add things

	```c#
	git add "file"

	// -to add everything, use:
	git add .
	git commit -m "initial commit"
	git push origin master
	```

## 9.  Resolve Merge Conflicts <a name="merge conflicts"></a>

---

* merge conflicts?

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