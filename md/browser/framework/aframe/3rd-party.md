* [angular](#angular)
* [d3](#d3)
* [node](#node)
* [php](#php)
* [react](#react)
* [unity](#unity)

## Angular <a name="angular"></a>

---

* [`angular aframe starter`](https://www.hackster.io/RONDAGDAG/virtual-reality-angular-aframe-2-starter-6264a5)

* [`aframe + ng`](http://blog.brakmic.com/webvr-with-a-frame-angular/)

## D3 <a name="d3"></a>

---

* & aframe work very well together!

	![3rd-Party](_asset/img/10.png)

## Node <a name="node"></a>

---

* although aframe can load in node, aframe isn't (yet) able to run any simulations at run time.  it's possible to run aframe in node - to get access to its globals.  however, you need to supply a browser `window` mock since node lacks a window object.  aframe is tested with `jsdom` - although any js-based browser implementation should work:

	```markdown
		global.window = require('jsdom').jsdom().defaultView;
		var aframe = require('aframe/src');
		console.log(aframe.version);
	```

## PHP <a name="php"></a>

---

* [`idea-space`](https://github.com/ideaspacevr/ideaspace)

## React <a name="react"></a>

---

![3rd-Party](_asset/img/6.png)

* [`hello-vr`](https://github.com/aschnapp/vr-hello-world)

* [`aframe + react`](https://github.com/ngokevin/aframe-react)

## Unity <a name="unity"></a>

---

* [`unity export to web-vr #1`](https://hacks.mozilla.org/2016/05/exporting-an-indie-unity-game-to-webvr/)

* [`unity export to web-vr #2`](https://github.com/Boondogl/Unity-WebVR-Template)