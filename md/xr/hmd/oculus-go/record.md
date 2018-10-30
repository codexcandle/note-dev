> Tell me what you're seeing so that I can help you!

### TODO: Framerate for the O-Go should be set at 60 (not at 70/75!) Confirm code below.

* [record](#record)
	* [native](#native)
	* [adb](#adb-record)
	* [facebook](#facebook)
	* [vysor](#vysor)
	* [droid@screen](#droid)
* [stream](#stream)
	* [to phone](#to-phone)
	* [vlc](#vlc)
	* [m-player](#mplayer)
	* [wifi](#wifi)
* [known-issues](#known-issues)

## Record <a name="record"></a>

---

### native <a name="native"></a>

* is the easiest (& most basic) option.
* to record - on o-go device, go to `home - sharing - record video`.
* to view video - on o-go device, go to `home - explore - gallery - internal storage`.
* to view file - plug in o-go device to pc, & nav to `<VR_HEADSET>/oculus/VideoShots`.

### adb <a name="adb"></a>

* ![ADB](_asset/img/5.png)

* ![ADB](_asset/img/6.png)

* record single video

	![ADB](_asset/img/7.png)

	![ADB](_asset/img/10.png)

	```c#
		// creates vids of "good" quality, & not too big
		// full hd video
		adb shell screenrecord --size 1920x1080 --bit-rate 12000000 /sdcard/video.mp4
		adb pull /sdcard/video.mp4 c:\Users\OculusGoVideo.mp4
		adb shell rm /sdcard/video.mp4
	```

	The first command will record a full HD video of the Go contents until you press the CTRL+C key combination, for a maximum of 3 minutes length. The second command copies the video from the device to your PC and gives it the name that you choose (in my case c:\Users\OculusGoVideo.mp4) & the third one deletes the temp file on your device.

* again, to stop recording - `CNTRL+C`.

* to get screenshot:

	```c#
		adb shell screencap /sdcard/screen.png
		adb pull /sdcard/screen.png c:\Users\anton\Pictures\ViveFocusPicture.png
		adb shell rm /sdcard/screen.png
	```

### facebook <a name="facebook"></a>

  ![Facebook Live](_asset/img/1.png)

### vysor <a name="vysor"></a>

  ![Vysor](_asset/img/3.png)  

### droid@Screen <a name="droid"></a>

  ![Droid@Screen](_asset/img/2.png)

## Stream <a name="stream"></a>

---

### to phone! <a name="to-phone"></a>

  ![stream to phone](_asset/img/12.png)

### vlc <a name="vlc"></a>

* in terminal type:

	```c#
		// basic
		adb exec-out screenrecord --bit-rate=16m --output-format=h264 - | "C:\Program Files (x86)\VideoLAN\VLC\vlc.exe" --demux h264 --h264-fps=70 --clock-jitter=0 -
	```

	```c#
		// continuous?
		adb exec-out "while true; do screenrecord --bit-rate=16m --output-format=h264 --time-limit 180 -; done" | "C:\Program Files (x86)\VideoLAN\VLC\vlc.exe" --demux h264 --h264-fps=60 --clock-jitter=0 -
	```

### m-player <a name="mplayer"></a>

  ![M-Player](_asset/img/4.png)

* in terminal type:

	```c#
		// basic?
		adb exec-out screenrecord --bit-rate=16m --output-format=h264 - | <PATH_TO_MPLAYER> -demuxer h264es -fps 75 -fs -
	```

	```c#
		// continuous?
		adb exec-out "while true; do screenrecord --bit-rate=16m --output-format=h264 --time-limit 180 -; done" | "C:\Program Files\Mplayer\mplayer.exe" -demuxer h264es -fps 60 -fs -
	```

### wifi (adb) <a name="wifi"></a>

* all the above commands can work via usb - & via wifi!
* to connect adb over wifi, connect your hmd & type:

	```c#
		// tell adb to connect over tcp/ip vs. usb
		adb tcpip 5555
		adb connect <OCULUS_GO_IP>:5555
	```

	NOTE:  To get your ip, type `adb shell ip addr show wlan0`.
  
	![Wifi](_asset/img/11.png)

	![Wifi](_asset/img/8.png)

* then, you could use:

	```c#
		// note "2m" is slightly lower than above, to help framerate
		adb exec-out screenrecord --bit-rate=2m --output-format=h264 - | <PATH_TO_MPLAYER> -demuxer h264es -fps 75 -
	```

* final perfect command! - to address the 3 mins limit, instruct adb to start a new streaming after the first one finishes using a command line loop.

	```c#
		// final perfect command line statement for USB streaming (for Wi-fi just diminish the bit-rate)
		adb exec-out "while true; do screenrecord --bit-rate=16m --output-format=h264 --time-limit 180 -; done" | <PATH_TO_MPLAYER> -demuxer h264es -fps 75 -fs -
	```

## Known issues (adb) <a name="known-issues"></a>

---

  ![Known Issues](_asset/img/9.png)
