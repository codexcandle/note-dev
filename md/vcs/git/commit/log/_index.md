* [overview](#overview)

## Overview <a name="overview"></a>

---

* `git log` - this command is used to show the reachable recorded history of a project from the most recent commit snapshot backwards. By default it will only show the history of the branch you’re currently on, but can be given different or even multiple heads or branches from which to traverse. It is also often used to show differences between two or more branches at the commit level.
* `-p` and `--stat` - these flags help you to get an idea of what was introduced in each commit & the `--pretty` and `--oneline` options to view the history more concisely, along with some simple date and author filtering options.
* `--decorate` option to easily visualize where our branch pointers are located & we also use the `--graph` option to see what divergent histories look like.

	* ![Overview](./_asset/img/14.png)

	* ![Overview](./_asset/img/15.png)

* `-g` option to view the Git reflog through this tool instead of doing branch traversal.
* `-S` and `-L` options to do fairly sophisticated searches for something that happened historically in the code such as seeing the history of a function.
* `--show-signature` to add a validation string to each commit in the git log output based on if it was validly signed or not.

* ![Overview](./_asset/img/01.png)

* ![Overview](./_asset/img/02.png)

* ![Overview](./_asset/img/03.png)

* ![Overview](./_asset/img/04.png)

* ![Overview](./_asset/img/05.png)

* ![Overview](./_asset/img/06.png)

* ![Overview](./_asset/img/07.png)

* ![Overview](./_asset/img/08.png)

* ![Overview](./_asset/img/09.png)

* ![Overview](./_asset/img/10.png)

* ![Overview](./_asset/img/11.png)

* ![Overview](./_asset/img/12.png)

* ![Overview](./_asset/img/13.png)