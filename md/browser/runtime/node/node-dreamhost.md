* [overview](#overview)
* [setup](#setup)
	1. [passenger](#passenger)
	2. [standarrd install](#standard-install)
	3. [custom install](#custom-install)
	4. [test install](#test-install)
* [packages](#packages)
	1. [local package installation](#local-package-installation)
	2. [testing locally installed packages](#testing-locally)
	3. [creating packages.json file for locally installed packages](#package-json)
	4. [global package installation](#global-package)
* [trouble-shoot](#trouble-shoot)

## Overview <a name="overview"></a>

----

* your domain must run on a private server (vps) or dedicated server running ubuntu in order to enable node.js.
* [more @ dreamhost](https://www.dreamhost.com/)

## Setup <a name="setup"></a>

---

### passenger <a name="passenger"></a>

* using [passenger](https://github.com/phusion/passenger/wiki/Phusion-Passenger%3A-Node.js-tutorial#understanding_passenger) - you can enable node with the dreamhost panel.  (You can do this without the panel - as you can create a node app & deploy it manually.  However, this can be a lot of work.  Thus, deploying your Node app with Passenger is much easier & recommended.  If you chose to not use Passenger, you would need to find a way to manually deploy your app.)

* when you enable the checkbox feature in the panel, Passenger knows your website is set up to run a Node.js app, & automatically deploys it. For example, if you have the following setup:

	```markdown
		app directory: example.com/app.js
		web directory: example.com/public
	```

    Passenger will automatically load the app.js file in the app directory. So if you visit example.com, it would load the app.js file.

* Passenger runs your Node.js files using the system version at:

    ```markdown
        [server]$ which node
        /usr/bin/node
    ```

    If you installed a custom version, Node.js automatically writes lines to your user's .bashrc file. Those lines change the version to your locally installed version. For example:

    ```markdown
        [server]$ which node
        /home/exampleuser/.nvm/versions/node/v6.10.0/bin/node
    ```

###  standard install <a name="standard-install"></a>

1. navigate to:

	```markdown
		Panel > Domains > Manage Domains
	```

2. click edit (to the right of your domain under the 'web hosting' column.

	![dreamhost](./../../../../../www/_asset/img/lang/js/runtime/node/1.png)

3. scroll down to 'web options', & check 'passenger (ruby/nodejs/python apps only):'.  Your 'Web directory' field automatically adds a /public folder to the end.

4. check node-js in the new option that appears to allow Node.js to use Passenger on your domain.

	![dreamhost](./../../../../../www/_asset/img/lang/js/runtime/node/2.png)

### custom install (of node & nvm)<a name="custom-install"></a>

1. Check the version of Passenger running on your private server. The server must run version 4.0.37 or later.

	```markdown
	[server]$ dpkg -l | grep passenger
	```

2. Visit [NVM](https://github.com/creationix/nvm) site to see what version of NVM to install.
3. Make sure you're in your user's directory.

	```markdown
		[server]$ cd ~
	```

4. Run the following command to download NVM. Change the version number as needed:

	```markdown
		[server]$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
	```

* this command installs NVM into a new directory under your user named /.nvm
* this command also adds the following to your .bashrc file:

	```markdown
		export NVM_DIR="$HOME/.nvm"
		[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
		[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
	```

5. View the creating & editing a file via SSH article for instructions on how to edit your existing .bash_profile. Here, add the following:

	```markdown
		source ~/.bashrc
	```

6. Run the following command to allow your shell to use this new version of nvm:

	```markdown
		[server]$ . ~/.bash_profile
	```

7. To test if you can now use NVM, run the following which should respond with the version you have installed:

	```markdown
		[server]$ nvm --version
		0.33.0
	```

8. Check which versions of Node.js are available:

	```markdown
		[server]$ nvm ls-remote
	```

9. Install any version of Node.js you wish:

	```markdown
		[server]$ nvm install 6.10.0
	```

10. Check which version of Node.js is running by entering the following:

	```markdown
		[server]$ node -v
		v6.10.0
	```

	Regarding [NPM](https://docs.npmjs.com/), at this point you have NVM and Node.js installed & active. NPM is also installed with Node.js.

11. Check the version:

	```markdown
		[server]$ npm -v
	```

12. To update npm to the latest version:

	```markdown
		[server]$ npm install npm@latest -g
	```

13. Check the directory NPM writes to:

	```markdown
		[server]$ npm config get prefix
		/home/exampleuser/.nvm/versions/node/v6.10.0
	```

    If you installed NVM as shown above, you'll see the directory response as the /.nvm folder under your current user.

### test install <a name="test-install"></a>

Now that you have installed node, to confirm it's working:

* test via simple script:

	1. create a file named `HelloWorld.js`, & add the following:

		```markdown
			console.log('Hello World!');
		```

	2. via terminal, run the script:

		```markdown
			[server]$ node HelloWorld.js
			Hello World!				// should show "Hello World!" in terminal output
		```

* or, test by creating a basic HTTP server to load a site:

	1. create a file in your web directory titled `server.js`, & add the following code in the file:

		```markdown
			// this HTTP server will listen on port 8888
			var http = require("http");

			http.createServer(function(request, response) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("Hello World");
			response.end();
			}).listen(8888);
		```

	2. start the server by running the following:

		```markdown
			[server]$ node server.js
		```

	3. if you have enabled node.js in the panel, you can just visit your site to see the file functioning.  If you have not, visit the page in a browser with port 8888 appended to the end (e.g. `http://example.com:8888`).

	If running correctly, your site will display the text Hello World!.

## Packages <a name="packages"></a>

---

### local package installation <a name="local-package-installation"></a>

* to install a package locally, nav to your site's app directory (not the /public directory). The command to install a package is:

	```markdown
		[server]$ npm install <package_name>
	```

	For example, this installs a packages called 'lodash'.:

	```markdown
		[server]$ npm install lodash
		/home/username/example.com
		└── lodash@4.17.4

		npm WARN enoent ENOENT: no such file or directory, open '/home/username/example.com/package.json'
		npm WARN example.com No description
		npm WARN example.com No repository field.
		npm WARN example.com No README data
		npm WARN example.com No license field.
	```

	This creates a directory in your site's application directory called `/node_modules`.

* you should then check to confirm it was correctly installed. You must be in your site's app directory where the local /node_modules directory resides:

	```markdown
		[server]$ ls node_modules
		lodash
	```

### testing locally installed packages <a name="testing-locally"></a>

* as per an example (from [npmjs-docs](docs.npmjs.com):

	1. create file named index.js:

		```markdown
			// index.js
			var lodash = require('lodash');

			var output = lodash.without([1, 2, 3], 1);
			console.log(output);
		```

	2. run the file using:

		```markdown
			node index.js		// should output [2, 3]
		```

		```markdown
			[server]$ node index.js
			[ 2, 3 ]

			// if module wasn't correctly installed, an error will occur.
		```

### creating a packages.json file for locally installed packages <a name="package-json"></a>

* it's a good idea to create a local packages.json file in your site's app directory where the `/node_modules` directory resides (as this package.json file helps to manage your locally installed packages).

* to be clear, this package.json file is different than the package.json file within any locally installed package. For example:

	```markdown
		Local site package.json file location: /example.com/package.json
		Locally installed package package.json file: /example.com/node_modules/<module_name>/package.json
	```

### global package installation <a name="global-package"></a>

* use the -g flag to install a package globally:

	```markdown
		[server]$ npm install -g <package_name>
	```

* for example, this installs a packages called 'jshint':

	```markdown
		[server]$ npm install -g jshint
		/home/username/.nvm/versions/node/v6.10.0/bin/jshint -> /home/username/.nvm/versions/node/v6.10.0/lib/node_modules/jshint/bin/jshint
		/home/username/.nvm/versions/node/v6.10.0/lib
		└─┬ jshint@2.9.4
		├─┬ cli@1.0.1
		│ └─┬ glob@7.1.1
		│   ├── fs.realpath@1.0.0
		│   ├─┬ inflight@1.0.6
		│   │ └── wrappy@1.0.2
		│   ├── inherits@2.0.3
		│   ├── once@1.4.0
		│   └── path-is-absolute@1.0.1
		├─┬ console-browserify@1.1.0
		│ └── date-now@0.1.4
		├── exit@0.1.2
		├─┬ htmlparser2@3.8.3
		│ ├── domelementtype@1.3.0
		│ ├── domhandler@2.3.0
		│ ├─┬ domutils@1.5.1
		│ │ └─┬ dom-serializer@0.1.0
		│ │   ├── domelementtype@1.1.3
		│ │   └── entities@1.1.1
		│ ├── entities@1.0.0
		│ └─┬ readable-stream@1.1.14
		│   ├── core-util-is@1.0.2
		│   ├── isarray@0.0.1
		│   └── string_decoder@0.10.31
		├── lodash@3.7.0
		├─┬ minimatch@3.0.3
		│ └─┬ brace-expansion@1.1.6
		│   ├── balanced-match@0.4.2
		│   └── concat-map@0.0.1
		├── shelljs@0.3.0
		└── strip-json-comments@1.0.4
	```

* global modules are installed under your user in the following directory:

	```markdown
		/home/username/.nvm/versions/node/v6.10.0/lib/node_modules
	```

* you can confirm which packages are installed globally by running the following:

	```markdown
		[server]$ npm list -g --depth=0
		/home/username/.nvm/versions/node/v6.10.0/lib
		├── jshint@2.9.4
		└── npm@4.4.1
	```

## Trouble-shoot <a name="trouble-shoot"></a>

---

* > Passenger is not using your custom version of Node.js

    If you find the custom version you installed is not being used:

	1. Add the following code to an .htaccess file in your project's directory:

		```markdown
			PassengerNodejs /home/username/.nvm/versions/node/v6.0.0/bin/node
		```

     	(-make sure to change the username and version to the version you have installed!)

    2. reload Passenger by running the following command in the app's directory:

		```markdown
			[server]$ mkdir tmp && touch restart.txt
		```

      	In the future, you just need to touch the restart.txt file to restart the application.

		```markdown
			[server]$ touch tmp/restart.txt
		```

      	[more info...](https://www.phusionpassenger.com/library/config/apache/reference/)