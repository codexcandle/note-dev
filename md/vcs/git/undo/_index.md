* [overview](#overview)
* [modified](#modified)
* [staged](#staged)
* [commit](#commit)

## Overview <a name="overview"></a>

---

[more @ git-book](https://git-scm.com/book/en/v2)

## Modified <a name="modified"></a>

---

1. you change a file & see:

    ![Undo Modified](./_asset/img/01.png)

2. revert it by:

    ```txt
    // git checkout -- <the-local-file-path>
    git checkout -- CONTRIBUTING.md
    ```

    (NOTE: Note the space after the double-dash!)

## Staged <a name="staged"></a>

---

1. let’s say you’ve changed 2 files & want to commit them as 2 separate changes, but you accidentally type `git add *` & stage both. How can you unstage one?

    ![Undo Staged](./_asset/img/03.png)

2. unstage a file by:

    ```txt
    // git reset HEAD <the-local-file-path>
    git reset HEAD CONTRIBUTING.md
    ```

    (NOTE: The command is a bit strange, but it works.)

    ![Undo Staged](./_asset/img/04.png)

3. unstage ALL:

    ```txt
    git reset
    ```

    -& to RESET ALL MODIFIED (dangerous!):

    ```txt
    git reset --hard
    ```

    (NOTE: This will not only unstage your added files, but will revert any changes you made in your working directory. If you created any new files in working directory, it'll not delete them, however.)

## Commit <a name="commit"></a>

---

1. you commit & realize you forgot to stage the changes in a file you wanted to add to this commit.  To resolve:

    ```txt
    $ git commit -m 'initial commit'
    $ git add forgotten_file
    $ git commit --amend
    ```

    (NOTE: You end up with a single commit — the 2nd commit replaces the results of the 1st!)

    ![Redo Commit](./_asset/img/02.png)