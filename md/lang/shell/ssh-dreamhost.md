* [overview](#overview)
* [setup](#setup)
* [login](#login)
* [tricks](#tricks)
	* [profile config!](#profile-config)
	* [invisible remote access!](#invisible)
	* [post-login command list!](#command-list)
	* [multiple machines!](#multiple-machines)

## Overview <a name="overview"></a>

---

* `ssh` - aka secure shell - is most often used as a command line alternative to ftp.

	With FTP, you use a client to log into your server. With SSH, you use a terminal (or shell) & type in commands to access your server.

  All ssh traffic travels over a secured connection, rather than plain text. Because of this, the connection is encrypted & secure.  

  SSH allows you to take advantage of many tools which aren't available with an FTP client (e.g. wget, curl, traceroute, rsync).

* DreamHost uses OpenSSH.

* [more @ wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)

## Setup <a name="setup"></a>

---

1. [enable shell acess for your user](https://help.dreamhost.com/hc/en-us/articles/216385837-Enabling-Shell-access)

2. [locate host-name](https://help.dreamhost.com/hc/en-us/articles/115000675027-FTP-overview-and-credentials#Finding_your_FTP_server_hostname)

## Login <a name="login"></a>\

---

* `simple` method

	```markdown
		[server]$ ssh username@server.dreamhost.com
	```

	OR

	```Markdown
		[server]$ ssh username@example.com
	```

* `advanced` (passwordless)

#### osx

```md
1.
Generate an RSA private key using ssh-keygen (unless you have already created one).

Open terminal, & run following command under your username:

------
	[server]$ ssh-keygen -t rsa
------

This creates a public/private keypair of the type (-t) rsa.

------
	Generating a public/private rsa key pair.
	Enter the file in which you wish to save they key (i.e., /home/username/.ssh/id_rsa).
------

Enter passphrase.

------
	Just hit <ENTER> here (since you don't want a password).
------

When done, you'll see:

```

![RSA Fingerprint](_asset/img/1.png)

```md
2.
Copy the public key you just created on your home computer to your DreamHost server:

------
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
------

...which responds with:

------
	The authenticity of host 'server.dreamhost.com (208.113.136.55)' can't be established.
	RSA key fingerprint is 50:46:95:5f:27:c9:fc:f5:f5:32:d4:3a:e9:cb:4f:9f.
	Are you sure you want to continue connecting (yes/no)? yes

	Warning: Permanently added 'server.dreamhost.com,208.113.136.55' (RSA) to the list of known hosts.

	username@server.dreamhost.com's password:
------

Enter your ssh uname/pword when prompted.

3.
Confirm SSH connection.

------
	// now log in without a password!
	[server]$ ssh username@server.dreamhost.com
------

NOTE: The commands above create a new folder under
your DreamHost user named `/.ssh` with 700 permissions.
In this folder, is your authorized_keys file which was
just copied from your home computer which has 600 
permissions.

```

#### pc

* for windows users, use PuTTY (to emulate a shell enviro):

	- [putty - how to configure](https://help.dreamhost.com/hc/en-us/articles/215464538-How-do-I-configure-PuTTY-)

	- [putty - how to setup passwordless login](https://help.dreamhost.com/hc/en-us/articles/215464758-How-do-I-set-up-passwordless-login-in-PuTTY-)

## Tricks! <a name="tricks"></a>\

---

### profile config <a name="profile-config"></a>\

---

By creating a local config file for SSH, you can create shortcuts for servers you frequently access.

1.  make file:

	```bash
		touch /Users/username/.ssh/config
	```

	NOTE: Your `.ssh` directory is automatically created when you use the ssh command for the first time. If you have never used ssh before, under this user account - create the directory first using:

	```bash
		mkdir /Users/username/.ssh && chmod 700 /Users/username/.ssh
	```

2.  edit file (using vi or any unix text editor):

	```bash
		// using vi
		vi /Users/username/.ssh/config
	```

3.  include shortcuts:

	```bash
		Host dv

		HostName example.com
		User domainuser
	```

	or to refresh your connection every 30 seconds for a max of one hour: 
	```bash
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

	```bash
		ssh dv
	```

### invisible remote access (osx) <a name="invisible"></a>\

---

* you can remotely log into a mac 's command-line environment using ssh, without the currently logged-in "graphical" user knowing you're there! (This allows admins to make changes without alerting the user to their work.)
* as ssh is a common standard - any os (that supports ssh) can remotely log into your mac!

### post-login command list <a name="command-list"></a>\

---

![Command list](_asset/img/2.png)

### multiple machines <a name="multiple-machines"></a>\

---

![Multiple Machines](_asset/img/4.png)