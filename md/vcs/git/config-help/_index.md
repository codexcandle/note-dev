* [overview](#overview)
* [config](#config)
* [help](#help)

## Overview <a name="overview"></a>

---

* [more @ git-book](https://git-scm.com/book/en/v2)

## Config <a name="config"></a>

---

* you should have to do these things only once on any given computer; they’ll stick around between upgrades. You can also change them at any time by running through the commands again.
* `git config` - this tool lets you get / set config variables that control all aspects of how Git looks & operates. These variables can be stored in 3 different places:

    ![config](./_asset/img/01.png)

* `identity`

    ![config](./_asset/img/02.png)

    ```txt
    // to set email
    git config --global user.email "tyler@codebycandle.com"
    ```

    ```txt
    // to list current
    git config --list
    git config -l
    ```

* `editor`- you can configure the default text editor that will be used when Git needs you to type in a message. If not configured, Git uses your system’s default editor.

    ```txt
    // emacs
    git config --global core.editor emacs

    // notepad++
    git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
    ```

    ![editor](./_asset/img/03.png)

    ![editor](./_asset/img/04.png)

    ![editor](./_asset/img/05.png)

## Help <a name="help"></a>

---

* `3` ways

    ```txt
    git help <verb>             // git-help
    man git-<verb>              // man
    git <verb> -h or --help     // for concise output!

    So, for help with CONFIG command:
    git help config
    ```