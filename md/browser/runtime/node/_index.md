* [node @ dreamhost](./dreamhost)

---

* [overview](#overview)
* [install](#install)
    * [site](#site)
    * [homebrew](#homebrew)
* [project setup](#project-setup)

---

## Overview <a name="overview"></a>

---

* node.js is a javascript runtime built on the open-source v8 VM javascript engine.  V8 is Google's open-source JS engine, which takes js to convert it into assembly, and finally machine code.  V8 is also used in Chrome browser.  Node is written in C++ (so is v8).  V8 can run standalone or embedded into any C++ app.
* uses an event-driven, non-blocking i/o model that makes it lightweight and efficient (vs. using threads in other langs like java).
* is single-threaded.
* node is used to run js outside of the browser, & uses JavaScript, traditionally a front end programming language on the server side.
* node is really 2 things - a runtime environment & a library.
* npm - node.js' package ecosystem, is the largest ecosystem of open source libraries in the world.  NPM allows you to install / publish node packages with ease.
* ships with a lot of useful modules, so you don't have to write everything from scratch (e.g. something that outputs a stirng on the console).
* [more on wikipedia...](https://en.wikipedia.org/wiki/Linked_list)

## Install <a name="install"></a>\

---

1.  install from:

  * #### site <a name="site"></a>

      [nodejs.org](https://nodejs.org)

      which will install node at:

      ```markdown
          /usr/local/bin/node
      ```

      and npm at:

      ```markdown
          /usr/local/bin/npm
      ```

      (-make sure that /usr/local/bin is in the your PATH!)

  * #### homebrew <a name="homebrew"></a>

      ```markdown
          brew install nodejs
      ```

  * #### dreamhost <a name="dreamhost"></a>\


---
---
---

2.  check version:

  ```markdown
        // check node & npm
        node -v     // # => v6.2.2
        npm -v      // # => 3.9.5
  ```

  OR, since node versions change often, can use:

  [NVM (Node Version Manager)](https://github.com/creationix/nvm)

## Project setup <a name="project-setup"></a>\

---

1.  install dependencies:

  ```markdown
  		npm install
  ```

2. start server:

  ```markdown
  		npm start
  ```

  OR, can use:

  [Nodemon](https://nodemon.io/)

  ```markdown
  		nodemon
  ```
