# note-dev

---

An ever-growing markdown-formatted library of developer notes.  (Sharing is caring & all.)

## Build

1. setup PANDOC (app + vs-code plugin):

		https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/

2. To create an html document with Pandoc within VS Code:

    * Create a corresponding "settings.json" file, & place (copy) in ".vscode" folder.
		* Click somewhere in the markdown file you are seeking to convert.
    * Press Ctrl+k and then p.  (You will be prompted with an option to choose html, docx, or pdf.)
    * Select html to render an html document.  (The resulting HTML document will launch in your default browser.)

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
