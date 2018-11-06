* [setup](#setup)
	* [eq8](#eq8)
	* [saturator](#saturator)
	* [track](#track)
	* [group](#group)
	* [rack](#rack)

## Setup <a name="setup"></a>

---

* set default `eq8` <a name="eq8"></a>

	1. filter1 -> 4x high-pass @ 30 Hz
	2. filter 3 -> steep nothc @ 250 Hz (deactivated!)
	3. filter 7 -> high-shelf
	4. filter 8 -> low-pass @ 22 kHz (deactivated!)
	5. filters 2, 4, 5, 6 - leave as unmodified bell curves
	6. turn on `over-sampling / hi-qulity` (right-click title bar)
	7. `save as default preset` (right-click title bar)

		![Overview](_asset/img/03.png)

* set default `saturator` <a name="saturator"></a>

	1. wave-shape -> sinoid fold
	2. turn on `over-sampling / hi-qulity` (right-click title bar)
	3. `save as default preset` (right-click title bar)

		![Overview](_asset/img/05.png)

* set default `track` <a name="track"></a>

	* audio

		---

		1. create `audio track`
		2.  value -> `-7.dB`
		3. add fx -> `eq8` + `saturator` (Disable both!)

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

* `group` similar tracks <a name="group"></a>

	![group](_asset/img/08.png)

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

###### REF

---

* ask-audio - [`accelerated mixing tricks in ableton live 9`](https://ask.audio/articles/accelerated-mixing-tricks-in-ableton-live-9)