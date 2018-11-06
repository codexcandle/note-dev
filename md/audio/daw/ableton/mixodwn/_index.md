* [freq-map](./freq-map)

	---

* tool-prep
	* [eq8](#eq8)
	* [saturator](#saturator)
	* [track](#track)
	* [rack](#rack)

	---

* [project](#setup-project)
* [mix](#mix)
* [export](#export)

## Project <a name="setup-project"></a>

---

* `reference track`

	![mix](_asset/img/14.png)

* `name, color, & group`

	![setup](_asset/img/19.png)

	![setup](_asset/img/20.png)

	![setup](_asset/img/08.png)

* `ear fatigue`

	#1 - `take breaks, don't rush!`

	![mix](_asset/img/22.png)

	#2 - `mix @ talk volume!`

	![mix](_asset/img/29.png)

## Tool

---

* set default `eq8` <a name="eq8"></a>

	1. filter1 -> 4x high-pass @ 30 Hz
	2. filter 3 -> steep notch @ 250 Hz (deactivated!)
	3. filter 7 -> high-shelf
	4. filter 8 -> low-pass @ 22 kHz (deactivated!)
	5. filters 2, 4, 5, 6 - leave as unmodified bell curves
	6. turn on `over-sampling / hi-qulity` (right-click title bar)
	7. `save as default preset` (right-click title bar)

		![Overview](_asset/img/03.png)

* set default `saturator` <a name="saturator"></a>

	1. wave-shape -> sinoid fold
	2. turn on `hi-quality` (right-click title bar)
	3. `save as default preset` (right-click title bar)

		![Overview](_asset/img/05.png)

* set default `track` <a name="track"></a>

	* audio

		---

		1. create `audio track`
		2.  value -> `-7.dB`
		3. add fx -> `saturator` + `eq8` (disable both!)

			```txt
			NOTE: Heavy on cpu; only really needed at `mixdown` stage.
			```

		4.  `save as default AUDIO track` (right-click track)

	* midi

		---

		1. create `midi track`
		2. value -> `-7.dB`
		3. via audio track above, copy over disabled fx -> `eq8` + `saturator`
		4.  `save as default MIDI track` (right-click track)		

		![setup](_asset/img/11.png)

		![setup](_asset/img/07.png)

* set default mixing `rack` <a name="rack"></a>

	1. via audio track above, add fx

		```txt
		- dynamic tube
		- saturator
		- glue compressor
		- eq8
		```

		![setup](_asset/img/12.png)

	2.  hit rack's `save` button (e.g. `My-Mixing-Rack-2018`)

## Mix <a name="mix"></a>

---

* `chains`

	#1

	![mix](_asset/img/83.png)

	#2

	![mix](_asset/img/84.png)

* `headroom`

	![mix](_asset/img/13.png)

	![mix](_asset/img/28.png)

	![mix](_asset/img/30.png)

* `eq + filter`

	#1 - `use as much as you can!`

	![mix](_asset/img/14.png)

	#2 - `sonic territory`

	![mix](_asset/img/33.png)

	#3 - `cut below 30 Hz`

	![mix](_asset/img/31.png)

	#4 - `snare`

	![mix](_asset/img/27.png)

* `layering`

	`sine-wave` (or deeper kick)

	![mix](_asset/img/32.png)

* `compression`

	#1 - `side-chain`

	![mix](_asset/img/15.png)

	#2 - `new-york`

	![mix](_asset/img/21.png)

* `panning`

	#1 - `stereo image`

	![mix](_asset/img/16.png)

	#2 - `mono` (bass + kick)

	![mix](_asset/img/34.png)

	#3 - `Haas Effect`

	![mix](_asset/img/17.png)

* `distortion`

	#1 - `bussing #1`

	![mix](_asset/img/23.png)

	#1 - `bussing #2`

	![mix](_asset/img/24.png)

	#1 - `bussing #3`

	![mix](_asset/img/25.png)

## Export <a name="export"></a>

---

* `stem`

	![setup](_asset/img/26.png)

###### REF

---

* ask-audio - [`accelerated mixing tricks in ableton live 9`](https://ask.audio/articles/accelerated-mixing-tricks-in-ableton-live-9)