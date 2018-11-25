* [overview](#overview)
* [dsp-time](#dsp-time)
* [on-audio-filter-read](#on-audio-filter-read)
* example
	* [engine](#engine)
	* [rock-chew](#rock-chew)
	* [metronome](#metronome)
	* [sequencer](#sequencer)
	* [synth](#synth)
	* [noisy lo-fi](#noisy-lofi)
	* [sine @ 440hz](#sine@440)
	* [fire](#fire)
* 3rd-party
	* [usfxr](https://github.com/zeh/usfxr)

###### RELATED

* [procedural audio (theory)](../../../theory/procedural)

## Overview <a name="overview"></a>

---

* `audio flow`

	![Overview](./_asset/img/2.png)

	![Overview](./_asset/img/3.png)

* `performance`

	![Overview](./_asset/img/32.png)

* `api bug` - no positional audio?

	![Overview](./_asset/img/36.png)

* [Audio @ unity](https://unity3d.com/learn/tutorials/s/audio)
* [AudioEffect @ unity](https://docs.unity3d.com/Manual/class-AudioEffect.html)

## dspTime <a name="dsp-time"></a>

---

![dspTime](./_asset/img/35.png)

## OnAudioFilterRead <a name="on-audio-filter-read"></a>

---

![OnAudioFilterRead](./_asset/img/33.png)

![OnAudioFilterRead](./_asset/img/34.png)

![OnAudioFilterRead](./_asset/img/5.png)

## EX

---

* `engine` <a name="engine"></a>

	```c#
	using UnityEngine;

	public class EngineAudio:MonoBehaviour
	{
		[Range(-1f, 1f)]
		public float offset;

		System.Random rand = new System.Random();

		void OnAudioFilterRead(float[] data, int channels)
		{
			for(int i = 0; i < data.Length; i++)
			{
					data[i] = (float)(rand.NextDouble() * 2.0 - 1.0 + offset);
			}
		}
	}
	```

	![Example](./_asset/img/31.png)

	![Example](./_asset/img/13.png)

	The `final` script:

	```c#
	using UnityEngine;

	public class EngineAudio:MonoBehaviour
	{
		[Range(-1f, 1f)]
		public float offset;

		public float cutoffOn = 800;
		public float cutoffOff = 100;

		public bool engineOn;

		System.Random rand = new System.Random();
		AudioLowPassFilter lowPassFilter;

		void Awake()
		{
			lowPassFilter = GetComponent<AudioLowPassFilter>();

			Update();
		}

		void OnAudioFilterRead(float[] data, int channels)
		{
			for(int i = 0; i < data.Length; i++)
			{
				data[i] = (float)(rand.NextDouble() * 2.0 - 1.0 + offset);
			}
		}

		void Update()
		{
			lowPassFilter.cutoffFrequency = engineOn ? cutoffOn : cutoffOff;
		}
	}
	```

* `rock-chew` <a name="rock-chew"></a>

	[LISTEN (@ youtube)](https://youtu.be/IrdeYul24uM)

	```c#
	using UnityEngine;

	public class RockChewAudio:MonoBehaviour
	{
		public static int clicks = 0;
		System.Random rand = new System.Random();

		void OnAudioFilterRead(float[] data, int channels)
		{
			/*
			whether we're generating a click (true)
			or silence (false)
			*/
			bool inClick = false;

			/*
			how many samples of that click
			or silence we still have to go
			*/
			int samplesLeft = 0;
			for(int i = 0; i < data.Length; i += channels)
			{
				if(samplesLeft < 1)
				{
					/*
					if out of clicks, then just generate
					silence for the rest of the time.
					*/
					if(clicks < 1)
					{
						inClick = false;

						samplesLeft = data.Length / channels;
					}
					else if(inClick)
					{
						// generate a small random silence.
						inClick = false;

						samplesLeft = rand.Next(1,10);
					}
					else
					{
						// generate a click.
						inClick = true;

						samplesLeft = rand.Next(2,5);

						clicks--;
					}
				}

				for(int j=0; j<channels; j++)
				{
					data[i+j] = inClick ? (float)(rand.NextDouble() * 2.0 - 1.0) : 0;
				}

				samplesLeft--;
			}
			clicks = 0;
		}
	}
	```

	![Example](./_asset/img/15.png)

	![Example](./_asset/img/17.png)

* `metronome` <a name="metronome"></a>

	```c#
	using UnityEngine;

	/*
	The code example shows how to implement a
	metronome that procedurally generates the
	click sounds via the OnAudioFilterRead callback.

	While the game is paused or suspended, this time
	will not be updated and sounds playing will be
	paused. Therefore developers of music scheduling
	routines do not have to do any rescheduling after
	the app is unpaused.
	*/
	[RequireComponent(typeof(AudioSource))]
	public class AudioTest:MonoBehaviour
	{
		public double bpm = 140.0F;
		public float gain = 0.5F;
		public int signatureHi = 4;
		public int signatureLo = 4;

		private double nextTick = 0.0F;
		private float amp = 0.0F;
		private float phase = 0.0F;
		private double sampleRate = 0.0F;
		private int accent;
		private bool running = false;

		void Start()
		{
			accent = signatureHi;
			double startTick = AudioSettings.dspTime;
			sampleRate = AudioSettings.outputSampleRate;
			nextTick = startTick * sampleRate;
			running = true;
		}

		void OnAudioFilterRead(float[] data, int channels)
		{
			if(!running) return;

			double samplesPerTick = sampleRate * 60.0F / bpm * 4.0F / signatureLo;
			double sample = AudioSettings.dspTime * sampleRate;
			int dataLen = data.Length / channels;

			int n = 0;
			while(n < dataLen)
			{
				float x = gain * amp * Mathf.Sin(phase);
				int i = 0;
				while(i < channels)
				{
					data[n * channels + i] += x;
					i++;
				}

				while(sample + n >= nextTick)
				{
					nextTick += samplesPerTick;
					amp = 1.0F;
					if(++accent > signatureHi)
					{
						accent = 1;
						amp *= 2.0F;
					}

					Debug.Log("Tick: " + accent + "/" + signatureHi);
				}

				phase += amp * 0.3F;
				amp *= 0.993F;
				n++;
			}
		}
	}
	```

* `sequencer` <a name="sequencer"></a>

	[#1 - `FLOISAND`](https://github.com/cfloisand/BeatSynchronizer)

	[#2 - `LUDOMANCER`](https://github.com/Ludomancer/Unity-Audio-Sequencer)

	[#3 - `CHARLIEHUGE`](https://github.com/charliehuge/DesigningSoundMusicSystem)

* `synth` <a name="synth"></a>

	[#1 - `KONSFIK`](http://www.konsfik.com/procedural-audio-made-in-unity3d/)

* `noisy lo-fi` <a name="noisy-lofi"></a>

	![Example](./_asset/img/6.png)

	![Example](./_asset/img/7.png)

* `sine @ 440Hz` <a name="sine@440"></a>

	![Example](./_asset/img/21.png)

	![Example](./_asset/img/22.png)

	![Example](./_asset/img/28.png)

	![Example](./_asset/img/29.png)

* `fire` <a name="fire"></a>

	![Example](./_asset/img/23.png)

	![Example](./_asset/img/24.png)

	![Example](./_asset/img/25.png)

	![Example](./_asset/img/26.png)

	![Example](./_asset/img/27.png)

###### REF

---

* `gamasutra`

	[Procedural Audio In Unity](https://www.gamasutra.com/blogs/JoeStrout/20170223/292317/Procedural_Audio_in_Unity.php)

* `mclimatiano`

	[Audio Filters in Unity3D](http://www.mclimatiano.com/audio-filters-in-unity3d/)

* `mcvuk`

	[Procedural Audio with Unity](https://www.mcvuk.com/development/procedural-audio-with-unity)

* `unity`

	[OnAudioFilterRead](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnAudioFilterRead.html)