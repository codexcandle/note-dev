# note-dev

---

An ever-growing markdown-formatted library of developer notes.  (Sharing is caring & all.)

## Build

1. setup PANDOC (app + vs-code plugin):

		https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/

2. To create an html document with Pandoc within VS Code:

    * Create a corresponding "settings.json" file, & place (copy) in ".vscode" folder.
		* Click somewhere in the markdown file you are seeking to convert.
    * [Press Ctrl+K, then P.]  (You will be prompted with an option to choose html, docx, or pdf.)
    * Select html to render an html document.  (The resulting HTML document will launch in your default browser.)

			NOTE:  Needed Optimization -
		* have to MANUALLY copy "settings.json" from target file's parent "_config" directory to setup build
		* automate this process w/ a script

## Deploy

---

> TODO - write automated deployment script.  Manually copying for now.

1. copy "large files" folder to "backup file server".

		```md
		// start
		./_asset-large

		// target
		"\\192.168.1.999\........\_note-dev (assets-large)"
		```

2. copy all to "live" server.

		https://www.codebycandle.com/notes

## Debug

If you get html page w/ missing styles, trying deleting a "../" prefix on the "--css=" property path of the ".md" file's corresponding "settings.json" file.

	```js
	// e.g.
	{
	"pandoc.htmlOptString": "-s -o ../../../../www/xr/hmd/quest/index.html -t html5 --css=../../../_asset/css/style.css --metadata title='xr.hmd.quest'"
	}
	```