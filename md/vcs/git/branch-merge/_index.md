* [overview](#overview)
    * [branch](#branch)
    * [checkout](#checkout)
    * [merge](#merge)
    * [log](#log)
    * [stash](#stash)
    * [tag](#tag)
* example
    * [create branch from exisitng](#create-branch-from-existing)

## Overview <a name="overview"></a>

---

[more @ git-book](https://git-scm.com/book/en/v2)

### branch <a name="branch"></a>

---

* `git branch` - this command is actually something of a branch management tool. It can list the branches you have, create a new branch, delete branches & rename branches.
* `tracking branch` - in Tracking Branches, we use the `git branch -u` option to set up a tracking branch.

### checkout <a name="checkout"></a>

---

* `git checkout` - this command is used to switch branches & check content out into your working directory.
* `--track` flag - used to start tracking branches in Tracking Branches.
* `--conflict=diff3` flag - used to reintroduce file conflicts.
* `-b` - causes new branch to be created as if git-branch were called & then checked out. Is created if doesn’t exist; otherwise, is reset, which is transactional equivalent of:

    ```c#
    // branch is not reset/created unless "git checkout" is successful.\
    $ git branch -f <branch> [<start point>]
    $ git checkout <branch>
    ```

### merge <a name="merge"></a>

---

* `git merge` - this tool is used to merge one or more branches into the branch you have checked out. It will then advance the current branch to the result of the merge.
There are very few variations of the merge command — generally just git merge `<branch>` with the name of the single branch you want to merge in.
* `squashed merge` - wwhere Git merges the work but pretends like it’s just a new commit without recording the history of the branch you’re merging in.
* `-Xignore-space-change` command and the `--abort` flag to abort a problem merge.
* `Subtree merging` - ???

### mergetool <a name="mergetool"></a>

---

* `git mergetool` - this command simply launches an external merge helper in case you have issues with a merge in Git.

### log <a name="log"></a>

---

* `git log` - this command is used to show the reachable recorded history of a project from the most recent commit snapshot backwards. By default it will only show the history of the branch you’re currently on, but can be given different or even multiple heads or branches from which to traverse. It is also often used to show differences between two or more branches at the commit level.
* `-p` and `--stat` - these flags help you to get an idea of what was introduced in each commit & the `--pretty` and `--oneline` options to view the history more concisely, along with some simple date and author filtering options.
* `--decorate` option to easily visualize where our branch pointers are located & we also use the `--graph` option to see what divergent histories look like.
* `-g` option to view the Git reflog through this tool instead of doing branch traversal.
* `-S` and `-L` options to do fairly sophisticated searches for something that happened historically in the code such as seeing the history of a function.
* `--show-signature` to add a validation string to each commit in the git log output based on if it was validly signed or not.

### stash <a name="stash"></a>

---

* `git stash` - this command is used to temporarily store uncommitted work in order to clean out your working directory without having to commit unfinished work on a branch.

### tag <a name="tag"></a>

---

* `git tag` - this command is used to give a permanent bookmark to a specific point in the code history. Generally this is used for things like releases.
* `-s` flag to create a GPG signed tag & verify one with the `-v` flag.

## EX <a name="example"></a>

---

* `create branch from existing` <a name="create-branch-from-existing"></a>

    1. Create new branch based on existing one. (will be only local for now.)

        ```git
        git checkout -b {NEW_branch_name} {SOURCE_branch_name}
        ```

    2. Push branch to origin (i.e. remote) for everyone else!

        ```git
        git push origin {NEW_branch_name}
        ```

        ![Debug](./_asset/img/01.png)