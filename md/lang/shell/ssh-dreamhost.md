1. [overview](#overview)
2. [setup](#setup)
    1. [enable shell access](#enable)
		2. [locate hostname](#locate-hostname)
3. login
	1. [simple](#simple)
	2. [advanced (passwordless)](#passwordless)
		1. [osx](#passwordless-osx)
		2. [pc](#passwordless-pc)
4. [local config (osx)](#local-config)
5. [invisible remote access (osx)](#invisible)
6. [examples](#examples)

## Overview <a name="overview"></a>

---

* aka secure shell - is most often used as a command line alternative to ftp.

	(with ftp, you use a client to log into your server. With SSH, you use a terminal (or shell) & type in commands to access your server.)

* all ssh traffic travels over a secured connection, rather than plain text. Because of this, the connection is encrypted and secure.  

> DreamHost currently uses OpenSSH software on the server end.

* ssh allows you to take advantage of many tools which are not available with an FTP client:
		- wget
		- curl
		- traceroute
		- rsync
		- top
		- (other tools)

* [more on wikipedia...](https://en.wikipedia.org/wiki/Secure_Shell)

## Setup <a name="setup"></a>

---

### enable shell access <a name="enable"></a>\

* [enable shell acess for your user](https://help.dreamhost.com/hc/en-us/articles/216385837-Enabling-Shell-access)

### locate hostname <a name="locate-hostname"></a>\

some options:

* example.com - can use this if you're logging into a specific website. Just change `example.com` to your actual domain name.

* server.dreamhost.com 	- 'server' is the name of your Shared server

* ps123456.dreamhostps.com - 'ps123456' is the name of your VPS server

* ds123456.dreamservers.com 	'ds123456' is the name of your Dedicated server

* dp-ab12cd34ef.dreamhostps.com 	'dp-ab12cd34ef' is the name of your DreamPress instance

* [more info...](https://help.dreamhost.com/hc/en-us/articles/115000675027-FTP-overview-and-credentials#Finding_your_FTP_server_hostname)

## Login <a name="login"></a>\

---

### simple <a name="simple"></a>\

* run this in terminal:

	```markdown
		[server]$ ssh username@server.dreamhost.com
	```

	OR

	```Markdown
		[server]$ ssh username@example.com
	```

### advanced (passwordless) <a name="passwordless"></a>\

Once you set up a shell user, you must enter your password each time when logging into the server. To avoid this, you can set up passwordless Login. This way, you'll be able to automatically log in each time without needing to enter your password.

#### osx <a name="passwordless-osx"></a>\

1. Generate an RSA private key using ssh-keygen (unless you have already created one).

    Open terminal, & run following command under your username:

	```Markdown
		[server]$ ssh-keygen -t rsa
	```

    This creates a public/private keypair of the type (-t) rsa.

	```Markdown
		Generating a public/private rsa key pair.
		Enter the file in which you wish to save they key (i.e., /home/username/.ssh/id_rsa).
	```

	Enter passphrase.

	```Markdown
		Just hit <ENTER> here (since you don't want a password).
	```

	when done, you'll see:

![RSA Fingerprint](_asset/img/lang/shell/ssh/1.png)

2. Copy the public key you just created on your home computer to your DreamHost server:

* on mac:

	```Markdown
		/*
		    This command assumes you do NOT already have 
			an /.ssh directory under your DreamHost 
			username. This command creates the /.ssh 
			directory for you on your DreamHost server.

    		If you already have an /.ssh directory on 
			your web server, just remove the 
			'mkdir ~/.ssh;' section.
		*/
		[server]$ cat ~/.ssh/id_rsa.pub | ssh username@server.dreamhost.com "mkdir ~/.ssh; cat >> ~/.ssh/authorized_keys"
	```

	which responds with:

	```Markdown
		The authenticity of host 'server.dreamhost.com (208.113.136.55)' can't be established.
		RSA key fingerprint is 50:46:95:5f:27:c9:fc:f5:f5:32:d4:3a:e9:cb:4f:9f.
		Are you sure you want to continue connecting (yes/no)? yes
		
		Warning: Permanently added 'server.dreamhost.com,208.113.136.55' (RSA) to the list of known hosts.
		
		username@server.dreamhost.com's password:
	```

	Enter your ssh uname/pword when prompted.

3.  Confirm the SSH connection:

* the commands above create a new folder under your DreamHost user named `/.ssh` with 700 permissions. In this folder, is your authorized_keys file which was just copied from your home computer which has 600 permissions.

* if everything is configured properly, you should now be able to access your DreamHost account through SSH without a password. Run this command on your home computer where you just created the original keypair.

	```Markdown
		// now log in without a password!
		[server]$ ssh username@server.dreamhost.com
	```

#### pc <a name="passwordless-pc"></a>\

If you're using Windows, you'll need to download a third-party program named PuTTY to emulate a shell environment. View the following articles for further details:

1.  [putty - how to configure](https://help.dreamhost.com/hc/en-us/articles/215464538-How-do-I-configure-PuTTY-)

2.  [putty - how to setup passwordless login](https://help.dreamhost.com/hc/en-us/articles/215464758-How-do-I-set-up-passwordless-login-in-PuTTY-)

## Local Config (OSX) <a name="local-config"></a>\

---

By creating a local configuration file for SSH, you can create shortcuts for servers you frequently access, in addition to configuring more advanced options.

1.  make file:

	```Markdown
		touch /Users/username/.ssh/config
	```

	*NOTE:*/
	Your `.ssh` directory is automatically created when you use the ssh command for the first time. If you have never used ssh before, under this user account - create the directory first using:

	```Markdown
		mkdir /Users/username/.ssh && chmod 700 /Users/username/.ssh
	```

2.  edit file - using vi or any unix text editor:

	```Markdown
		// using vi
		vi /Users/username/.ssh/config
	```

3.  include shortcuts:

	```Markdown
		Host dv

		HostName example.com
		User domainuser
	```

	or to refresh your connection every 30 seconds for a max of one hour: 
	```Markdown
		Host dv

		HostName dv.example.com
		User ftpuser
		ServerAliveInterval 30
		ServerAliveCountMax 120

		Host grid

		HostName grid.example.com
		User serveradmin@grid.example.com
		ServerAliveInterval 30
		ServerAliveCountMax 120
	```

4.  run cmd:

	```Markdown
		ssh dv
	```
## Invisible Remote Access (osx) <a name="invisible"></a>\

---

* you can remotely log into a mac 's command-line environment using ssh, without the currently logged-in grpahical user knowing you're there! (This allows admins to make changes without alering the user to their work.)
* as ssh is a common standard - any os (that supports ssh) can remotely log into your mac!

## EX <a name="example"></a>\

---

* copy key to dreamhost server:

	```Markdown
		// replace "user-name@" below with your actual username
		cat ~/.ssh/id_rsa.pub | ssh user-name@ps1234.dreamhost.com "mkdir ~/.ssh; cat >>
	```

* passwordless login:

	```Markdown
		// replace "user-name@" below with your actual username
		ssh user-name@ps1234.dreamhost.com
	```

* `command list!` (login, run commands, log out!):

![Command list](_asset/img/2.png)

* `multiple machines`

![Multiple Machines](_asset/img/4.png)