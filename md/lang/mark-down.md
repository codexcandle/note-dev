* [overview](#overview)
* [options](#options)
    1. [italic](#italic)
    2. [bold](#bold)
    3. [h1](#h1)
    4. [h2](#h2)
    5. [link](#link)
    6. [image](#image)
    7. [block-quote](#block-quote)
    8. [list-unordered](#list-unordered)
    9. [list-ordered](#list-ordered)
    10. [list-nested](#list-nested)
    11. [h-rule](#h-rule)
    12. [code-inline](#code-inline)
    13. [code-block](#code-block)
    14. [paragraph](#paragraph)
    15. [table-of-cotents](#toc)

## Overview <a name="overview"></a>

---

* a simple way to format text that looks great on any device.
* doesn’t do anything fancy like change font size, color, or type.
* uses keyboard symbols you already know.
* [more on wikipedia...](https://en.wikipedia.org/wiki/Markdown)

## Options <a name="options"></a>

### ITALIC <a name="italic"></a>\

---

* to avoid creating, escape with backslash (e.g. `\*`)

  ```markdown
  *italic*
  ```

  ```markdown
  _italic_
  ```

\

### BOLD <a name="bold"></a>\

---

* to avoid creating, escape with backslash (e.g. `\_`)

  ```markdown
  **bold**
  ```

  ```markdown
  __bold__
  ```

\

### H1 <a name="h1"></a>\

---

* can add more # at the end to close the header.

  ```markdown
  # Heading 1
  ```

  ```markdown
  Heading 1
  =========
  ```

\

### H2 <a name="h2"></a>\

---

* the more #, the smaller the header.

  ```markdown
  ## Heading 2
  ```

  ```markdown
  Heading 2
  ---------
  ```

\

### LINK <a name="link"></a>\

---

* links can be either inline with the text, or placed at the bottom of the text as references.
* link text is enclosed by square brackets [], and for inline links, the link URL is enclosed by parens ().
* for the "reference-style" form, the link definition can be placed anywhere after a blank line, but is generally near the bottom. Definition identifiers may consist of letters, numbers, spaces, & punctuation. They are not case sensitive.

  ```markdown
  # basic form
  [Link](http://a.com)
  ```

  ```markdown
  # show addy
  You can do anything at <http://html5zombo.com>
  ```

  ```markdown
  # mask addy
  The [University of Rwanda](http://www.ur.ac.rw) was formed in 2013.
  ```

  ```markdown
  # relative link
  [Link](/example.html)
  ```

  ```markdown
  # reference-style
  #1:
  [Link][1]
  ⋮
  [1]: http://b.org

  #2:
  # the title of the link is optional
  [text][id]
  ⋮
  [id]: http://b.org/ "title"

  #3:
  [Hurricane][1] Erika was the strongest and
  longest-lasting tropical cyclone in the 1997 Atlantic [hurricane][1] season.

  [1]:https://goo.gl/YEEHP0
  ```

\

### IMAGE <a name="image"></a>\

---

* almost identical to links, but start with an exclamation point.

  ```markdown
  # basic form
  ![Image](http://url/a.png)
  ```

  ```markdown
  # image
  ![](http://commonmark.org/help/images/favicon.png)
  ```

  ```markdown
  # relative link
  ![alt](./img/shot.png)
  ```

  ```markdown
  # reference-style
  #1:
  ![Image][1]
  ⋮
  [1]: http://url/b.jpg

  #2:
  # the title of the image is optional
  # a title provides more textual detail about what the image shows or contains
  ![alt][id]
  ⋮
  [id]: dog.jpg "title"

  #3:
  # alt text of Logo and title of Creative Commons licensed to this image
  ![Logo][1]
  ⋮
  [1]: http://commonmark.org/help/images/favicon.png "Creative Commons licensed"
  ```

\

### BLOCK-QUOTE <a name="block-quote"></a>\

---

* to create a blockquote, start a line with greater than > followed by an optional space.
* blockquotes can be nested, and can contain other formatting.

  ```markdown
  > Blockquote
  ```

  ```markdown
  > First line
  > Another line
  >
  > > Nested line
  >
  > Last line
  ```

  ```markdown
  The quote
  > Somewhere, something incredible ... to be known

  has been ascribed to Carl Sagan.
  ```

  ```markdown
  My favorite Miss Manners quotes:

  > Allowing mistake to pass w/o comment is a wonderful social grace.
  >
  > Ideological differences are no excuse for rudeness.
  ```

\

### LIST (un-ordered) <a name="list-unordered"></a>\

---

* display list of unordered items.

  ```markdown
  * List
  ```

  ```markdown
  - List
  ```

  ```markdown
  + List
  ```

\

### LIST (ordered) <a name="list-ordered"></a>\

---

* display list of ordered items.

    ```markdown
    1. One
    ```

    ```markdown
    1) One
    ```

\

### LIST (nested) <a name="list-nested"></a>\

---

* to nest one list within another, indent each item in the sublist by four spaces.
* you can also nest other elements like paragraphs, blockquotes or code blocks.
* you can mix ordered and unordered lists.
* to nest a code block, indent by either 8 spaces or two tabs, or use a ``` code block.

  ```markdown
  * Item
      1. First Subitem
      2. Second Subitem
  * Item
      - Subitem
      - Subitem
  * Item
  ```

  ```markdown
  * Fruit
    * Apple
    * Orange
    * Banana
  * Dairy
    * Milk
    * Cheese
  ```

  ```markdown
  + World Cup 2014
    1. Germany
    2. Argentina
    3. Netherlands
  + Rugby World Cup 2015
    1. New Zealand
    2. Australia
    3. South Africa
  ```

  ```markdown
  1. Ingredients

      - spaghetti
      - marinara sauce
      - salt

  2. Cooking

    Bring water to boil, add a pinch of salt and spaghetti. Cook until pasta is **tender**.

  3. Serve

    Drain the pasta on a plate. Add heated sauce.

    > No man is lonely eating spaghetti; it requires so much attention.

    Bon appetit!
  ```

\

### H-RULE <a name="h-rule"></a>\

---

* display horizontal seperator.

  ```markdown
  Rule

  ---
  ```

  ```markdown
  Rule

  ***
  ```

\

### CODE (inline) <a name="code-inline"></a>\

---

* display code in-line.

  ```markdown
  `Inline code` with backticks
  ```

  ```markdown
  When `x = 3`, that means `x + 2 = 5`
  ```

\

### CODE (block) <a name="code-block"></a>\

---

* a code block, or span, displays every character inside exactly as it was typed.
* place 3 backticks ``` on a line above and below.
* 3 backticks on a single line ``` marking the beginning and end of a code block - aka a "code fence".
* one level of indentation in a code block equals 4 spaces or one tab.
* an indented code block continues until it reaches a line that is not indented.

  ```markdown
  # code-fence method
  # below, remove backslashes to make work!
  ----------------------
  A loop in JavaScript:

  \```markdown (markdown here is optional to denote lang)
  var i;
  for (i=0; i<5; i++) {
  console.log(i);
  }
  \```

  What numbers will this print?
  ----------------------
  ```

  ```markdown
  # is this a table?
  Who ate the most donuts this week?

      Jeff  15
      Sam   11
      Robin  6

  ```

\

### PARAGRAPH <a name="paragraph"></a>\

---

* a paragraph is consecutive lines of text with one or more blank lines between them.
* for a line break, add either a backslash \ or two blank spaces at the end of the line.

  ```markdown
  This is a\
  paragraph.
  ```

  ```markdown
  This is 2

  paragraphs.
  ```

\

### TABLE-OF-CONTENTS <a name="toc"></a>\

---

* create section links.

  ```markdown
  # Table of contents
  1. [Introduction](#introduction)
  2. [Some paragraph](#paragraph1)
      1. [Sub paragraph](#subparagraph1)
  3. [Another paragraph](#paragraph2)

  ## This is the introduction <a name="introduction"></a>
  Some introduction text, formatted in heading 2 style

  ## Some paragraph <a name="paragraph1"></a>
  The first paragraph text

  ### Sub paragraph <a name="subparagraph1"></a>
  This is a sub paragraph, formatted in heading 3 style

  ## Another paragraph <a name="paragraph2"></a>
  The second paragraph text
  ```

\
