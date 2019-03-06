* [overview](#overview)
* [branch](#branch)
    * [head](#head)
    * [tracking branch](#tracking-branch)
    * [git branch](#branch)
    * [-v](#branch-v)
    * [--merged](#branch-merged)
    * [-d](#branch-d)
* [checkout](#checkout)
    * [stash](#stash)
* [merge](#merge)
    * [merge tool](#merge-tool)
* example
    * [create (from existing)](#create-from-existing)
    * [resolve git bash merge](#resolve-git-bash)

## Overview <a name="overview"></a>

---

* ![overview](./_asset/img/14.png)

* ![overview](./_asset/img/38.png)

* ![overview](./_asset/img/39.png)

* ![overview](./_asset/img/40.png)

* ![overview](./_asset/img/41.png)

* ![overview](./_asset/img/42.png)

* ![overview](./_asset/img/43.png)

* ![overview](./_asset/img/44.png)

* ![overview](./_asset/img/45.png)

## Branch <a name="branch"></a>

---

* ![branch](./_asset/img/01b.png)

* `head` <a name="head"></a>

    ![branch](./_asset/img/03.png)

    ![branch](./_asset/img/07.png)

    ![branch](./_asset/img/06.png)

    ![branch](./_asset/img/08.png)

* `tracking branch` - in Tracking Branches, we use the `git branch -u` option to set up a tracking branch.

* `git branch` - this command is actually something of a branch management tool. It can list the branches you have, create a new branch, delete branches & rename branches.

    ![branch](./_asset/img/02.png)

* `git branch -v`<a name="branch-v"></a>

    * ![branch](./_asset/img/32.png)

* `git branch --merged`<a name="branch-merged"></a>

    * ![branch](./_asset/img/33.png)

    * ![branch](./_asset/img/34.png)

    * ![branch](./_asset/img/35.png)

    * ![branch](./_asset/img/37.png)

* `git branch -d`<a name="branch-d"></a>

    * ![branch](./_asset/img/36.png)

## Checkout <a name="checkout"></a>

---

* `git checkout` - this command is used to switch branches & check content out into your working directory.

    ![checkout](./_asset/img/05.png)

    ![checkout](./_asset/img/09.png)

    ![checkout](./_asset/img/10.png)

    ![checkout](./_asset/img/11.png)

    ![checkout](./_asset/img/12.png)

* `--track` flag - used to start tracking branches in Tracking Branches.
* `--conflict=diff3` flag - used to reintroduce file conflicts.
* `-b` - causes new branch to be created as if git-branch were called & then checked out. Is created if doesn’t exist; otherwise, is reset, which is transactional equivalent of:

    ```c#
    // branch is not reset/created unless "git checkout" is successful.\
    $ git branch -f <branch> [<start point>]
    $ git checkout <branch>
    ```

### stash <a name="stash"></a>

---

* `git stash` - this command is used to temporarily store uncommitted work in order to clean out your working directory without having to commit unfinished work on a branch.

## Merge <a name="merge"></a>

---

* `git merge` - this tool is used to merge one or more branches into the branch you have checked out. It will then advance the current branch to the result of the merge.
There are very few variations of the merge command — generally just git merge `<branch>` with the name of the single branch you want to merge in.
* `squashed merge` - wwhere Git merges the work but pretends like it’s just a new commit without recording the history of the branch you’re merging in.
* `-Xignore-space-change` command and the `--abort` flag to abort a problem merge.
* `Subtree merging` - ???

* ![merge](./_asset/img/15.png)

* ![merge](./_asset/img/16.png)

* ![merge](./_asset/img/17.png)

* ![merge](./_asset/img/18.png)

* ![merge](./_asset/img/19.png)

* ![merge](./_asset/img/20.png)

* ![merge](./_asset/img/21.png)

* ![merge](./_asset/img/22.png)

* ![merge](./_asset/img/23.png)

* ![merge](./_asset/img/24.png)

* ![merge](./_asset/img/25.png)

* ![merge](./_asset/img/26.png)

* ![merge](./_asset/img/27.png)

* ![merge](./_asset/img/28.png)

* ![merge](./_asset/img/29.png)

### mergetool <a name="merge-tool"></a>

---

* `git mergetool` - this command simply launches an external merge helper in case you have issues with a merge in Git.

* ![merge](./_asset/img/30.png)

* ![merge](./_asset/img/31.png)

## EX <a name="example"></a>

---

* `create from existing` <a name="create-from-existing"></a>

    1. Create new branch based on existing one. (will be only local for now.)

        ```git
        git checkout -b {NEW_branch_name} {SOURCE_branch_name}
        ```

    2. Push branch to origin (i.e. remote) for everyone else!

        ```git
        git push origin {NEW_branch_name}
        ```

        ![Debug](./_asset/img/01.png)

* `resolve git bash` <a name="resolve-git-bash"></a>

    ![example](./_asset/img/46.png)