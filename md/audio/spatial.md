* [overview](#overview)
* details
    * [3d > surround](#surround-vs-3d)
    * [hrtf](#hrtf)
    * [tips](#tips)

// SORTING....
// ---------------------------------
* [unity](#unity)
    * [spatializers](#spatializers)
* [formats](#formats)
    * [ambisonics](#ambisonics)
    * mpeg-h
    * ac4
// ---------------------------------

## Overview <a name="overview"></a>

---

* aka 3d-Audio, spatial audio.

* replicates how sound waves interact with the environment as well as your head & ears, so that you really feel like you're in the virtual world.  is how we naturally hear sound.

* using headphones, sounds seem to come from the outside world - not the headphones.  Because sounds are transferred directly into your auditory canal (without reaching your head, body, or ear), this technology allows for replication of true 3d.

## Details <a name="details"></a>

### 3d > surround <a name="surround-vs-3d"></a>\

---

* in movie theaters years ago, the entire soundtrack was played in one speaker, or a collection of speakers, that were placed behind the movie screen.  Today, audiences in movie theaters are used to having sounds thunder from each side of them.  What they expect is - surround sound.

* surround sound is achieved by placing muliple speakers (additional audio channels) around a room (360) - to put you in the center of the action, which makes it much more realistic.

  ![Surround Sound](_asset/img/1.png)

* surround sound & 3d sound are used in very similar ways.

* however, with 3d sound, sounds come from above & below you (vs. just left or right).

* with surround sound speakers, the sound is sent to both ears (instead of left or right), and the spekaers interfere with the clear signal each ear should have.

### hrtf <a name="hrtf"></a>\

---

* head-related transfer functions - mesurements that describe the directivity pattern of human ears, that is, a description of how sound, arriving from given direction, reaches the left ear and right ear.  A person's HRTF's measurements depend on the direction, elevation, distance, and the frequency of the sound.

* Below (left) shows the representation of the right HRTF of a human for the horizontal plane only and at a distance of one meter.  The right-side shows the sensitivity of the right ear for 1khz as function of the direction & elevation for a distance of one meter.

  ![HRTF](_asset/img/2.png)

### tips <a name="tips"></a>\

---

* mono @ 48khz - for the best experience, make all spatialized audio files this.






// SORTING BELOW...........................................

## Unity <a name="unity"></a>

### spatializers <a name="spatializers"></a>\

  ![Spatializers](_asset/img/3.png)

## Formats <a name="formats"></a>

---

### Ambisonics <a name="ambisonics"></a>

* is a 40-yr old format for encoding 3d audio
* up until recently, was considered a bit of a relic.
* however, translates perfectly to VR!
* google adopted this for vr & 360-video on youtube.

### MPEG-H

--

### AC4

--

## Tips <a name="tips"></a>

---

> “Audio’s function within any game, film or any other medium is either to give the player or viewer information or to influence their emotional state.”

> "Because of the fragility of the player's acceptance of the virtual world, audio should be an integral part of the design process.  If immersion & presence is your goal, your sound team will be the ones that will have to deliver."



* `voice in your head` - you don't want that voice-in-your-head effect as sounds that are more localized to space sound more convincing if going for an immersive effect. “If something is close, it needs to sound close, and if something is far away it needs to sound far away.  How we give players information about distance is absolutely critical for them to be able to localise something accurately in VR.... If you were to shut your eyes, you’d usually be able to tell what sort of room you were in just by listening to how sounds tail off within it.

* `proximity effect` - sounds that appear closer to you have more of a bassier tone (e.g. narrator's voice in an old movie – sounds closer, was recorded with condenser mic closer than normal stage mic.)

* `law of two & a half` - there are limits to the amount of auditory info that can be processed by the brain.  If you have 1 person in a room, you can hear them clearly; if you have 2, you can maybe make our parts from each; but if you have 3 - you will probably hear a garbled mess & become annoyed.  For example, 1 or 2 sets of footsteps can easily be isolted by the brain, but 3 becomes a group of things happening, and out goes your ability to distinguish between individual elements.  So make sure audio considerations are made in early in the design process, & care must be taken to respect the limits of the brain's ability to process auditory info.  However - if you want to briefly disorient the player on purpose, this can be used to great effect! (but like everything, you need "light & shade.")

* `bend reality` - use audio to bend reality without breaking it:

  ![Bend Reality](_asset/img/4.png)