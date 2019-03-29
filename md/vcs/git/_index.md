* [overview](#overview)

    ---

    * [cheatsheet](./cheatsheet)

    ---

* [init / clone](./init-clone)
* [config / help](./config-help)
* [commit](./commit)
    * [log](./commit/log)
    * [tag](./commit/tag)
* [undo](./undo)
* [branch / merge](./branch-merge)
* [remote](./remote)

## Overview <a name="overview"></a>

---

* `stream of snapshots`

    ![Overview](./_asset/img/00.png)

    ![Overview](./_asset/img/04.png)

* `pros`

    1.  `nearly every operation is local` - most operations in Git need only local files & resources to operate — generally no information is needed from another computer on your network.
    2. `git has integrity` - everything in Git is checksummed before it is stored & is then referred to by that checksum. This means it’s impossible to change the contents of any file or directory without Git knowing about it.

    ![Overview](./_asset/img/01.png)

* `3 stages`

    ![Overview](./_asset/img/02.png)

    ![Overview](./_asset/img/03.png)

* `blobs`

    ![Overview](./_asset/img/05.png)

    ![Overview](./_asset/img/06.png)

* [more @ git-book](https://git-scm.com/book/en/v2)