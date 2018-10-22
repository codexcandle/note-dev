* hmd
	* [oculus-go](./hmd/go)
	* [gear-vr](./hmd/gear)

---

* view
	* [interactivity](./interactivity)
	* [ui](./ui)

---

* art
	* [lod](#lod)
	* [scale](#scale)
	* [reticule](#reticule)

---

* [locomotion](#locomotion)

---

* [haptics](#haptics)

---

* [time](#time)

---

* map
	* [slam](./map/slam)

## Art <a name="art"></a>

---

### lod <a name="lod"></a>

> No normal maps, specular, txture mapping, bump mapping - as they don't work well in vr.

![LOD](./_asset/img/12.png)

### scale <a name="scale"></a>

> a water-bottle at arm's length...

![scale](./_asset/img/13.png)

### reticule (hands) <a name="reticule"></a>

![Reticule Hands](./_asset/img/18.png)

## Locomotion <a name="locomotion"></a>

---

* teleport like myst:

![Locomotion](./_asset/img/15.png)

* `keep the game running around 90 fps` - as special care is needed here because latency or performance jitters of any kind at this frame rate have triggered motion sickness, & once that sickness starts, it doesn’t taper off until they take off the headset.

* `beware vection` - when another object's motion gives you the illusion that you're moving. (Imagine sitting in a train that isn't moving, and the sight of another train passing on another track gives you the sense that the train you are in is moving.) This, also is to avoid nausea for the player.

	> Creative director Dan Junger and producer Joel Green at Cloudhead Games just made a big decision to kill vection and artificial acceleration at all costs on The Gallery: Call of the Starseed. “Rotational vection is just terrible," says Junger. "Before we were on the Vive and using traditional controllers, we tried making a ‘VR comfort mode,’ to reduce what happens when you turn the camera with the right stick."

## Haptics <a name="haptics"></a>

---

![Haptics](./_asset/img/17.png)

## Time <a name="time"></a>

---

* `time dialation`:

![Time](./_asset/img/19.png)

![Time](./_asset/img/21.png)

![Time](./_asset/img/22.png)

* session time can be flexible:

![Time](./_asset/img/20.png)