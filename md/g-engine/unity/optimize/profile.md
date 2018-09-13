* [overview](#overview)
* [controls](#controls)
	* [timeline](#timeline)
* [webgl](#webgl)
* [remote](#remote)
	* [ios](#ios)
	* [android](#android)
* [profilers](#profilers)
	* [cpu usage](#cpu)
	* [rendering](#rendering)
	* [memory](#memory)
	* [audio](#audio)
	* [physics](#physics)
	* [gpu](#gpu)
	* [global illumination](#global-illumination)
	* [ui](#ui)

## Overview <a name="overview"></a>

---

* when discussing performance, is vital to remember that ALL optimization attempts must start with a discovery process. Profiling an app - to discover its hotspots! - is the necessary first step, followed by an analysis of profiling results against the project’s technical & Asset architecture.
* you can analyze the performance of the GPU, CPU, memory, rendering, & audio.
* to see the profiling data, you play your game in the Editor with Profiling on, and it records performance data. The Profiler window then displays the data in a timeline, so you can see the frames or areas that spike (take more time) than others.
* by clicking anywhere in the timeline, the bottom section of the Profiler window will display detailed information for the selected frame.
* note that profiling has to instrument your code (that is; add some instructions to facilitate the check). While this has a small impact on the performance of your game, the overhead is small enough to not affect the game framerate.
* when using the profiling tool, focus on those parts of the game that consume the most time.
* compare profiling results before & after code changes & determine the improvements you measure. Sometimes changes you make to improve performance might have a negative effect on frame rate; there may be unexpected consequences of your code optimization.
* `Profiler window` - window > profiler.

  ![Profiler Window](_asset/img/1.png)

## Controls <a name="controls"></a>

---

  ![Controls](_asset/img/2.png)

* the profiler controls are in the toolbar at the top of the window.
* use these to turn profiling on/off, & navigate through profiled frames.
* the transport controls are at the far right end of the toolbar.
* clicking on any of these transport controls pauses the game - when the game is running & the profiler is collecting data.
* `frame` allows you to:
	* go to the 1st recorded frame
	* step one frame back
	* step one frame forward
	* go to the last frame
* the profiler does not keep all recorded frames - so the notion of the first frame should really be thought of as the oldest frame that is still kept in memory.
* `current` - transport button causes the profile statistics window to display data collected in real-time.
* `active` profiler popup menu - allows you to select whether profiling should be done in the editor or a separate player (e.g. a game running on an attached iOS device).
* `save` - button lets you write the recorded frames to a file. 
* `load` - button reads data saved earlier. You can also load a binary profile data written out by the player (when generating log, set Profiler.enableBinaryLog to enable binary format). If “Load” is clicked while the shift button is pressed, file contents is appended to the current profile frames in memory.
* `deep profile` - when enabled, all your script code is profiled (i.e. all function calls are recorded.) This is useful to know where exactly time is spent in your game code. However, this incurs a very large overhead & uses a lot of memory, & as a result your game will run significantly slower while profiling. If you are using complex script code, Deep Profiling might not be possible at all. Deep profiling should work fast enough for small games with simple scripting. If you find that Deep Profiling for your entire game causes the frame rate to drop so much that the game barely runs, you should consider not using this approach, & instead use the approach described below. You may find deep profiling more helpful as you are designing your game and deciding how to best implement key features. Note that for large games deep profiling may cause Unity to run out of memory & so for this reason deep profiling may not be possible. Manually profiling blocks of your script code will have a smaller overhead than using Deep Profiling. Use `Profiler.BeginSample` & `Profiler.EndSample` scripting functions to enable/disable profiling around sections of code.
* `View SyncTime`- when running at a fixed framerate or running in sync with the vertical blank, Unity records the waiting time in “Wait For Target FPS”. By default this amount of time is not shown in the profiler. To view how much time is spent waiting, you can toggle “View SyncTime”. This is also a measure of how much headroom you have before losing frames.

### timeline <a name="timeline"></a>

* the upper part of the Profiler window displays performance data over time. When you run a game, data is recorded each frame, and the history of the last several hundred frames is displayed. Clicking on a particular frame will display its details in the lower part of the window. Different details are displayed depending on which timeline area is currently selected.
* `to get more detail` - the vertical scale of the timeline is managed automatically and will attempt to fill the vertical space of the window. Note that to get more detail in say the CPU Usage area you can remove the Memory & Rendering areas. Also, the splitter between the timeline & the statistics area can be selected and dragged downward to increase the screen area used for the timeline chart.
* consists of several areas: CPU Usage, Rendering & Memory. These areas can be removed by clicking the close button in the panel, & re-added again using the Add Area drop down in the Profile Controls bar.
* the coloured squares in the label area can control whether the associated timeline is displayed or not. To remove a sample from the display, click on the colour key. The key will dim & the data will be removed from the graph. This can be useful to identify the cause of spikes in the CPU graph, for example.

## WebGL <a name="webgl"></a>

---

* can use the Unity profiler on WebGL, just like on any other platform. 
* can't attach to running players in WebGL - however (as WebGL uses WebSockets for communication, which will not allow incoming connections on the browser side.) Instead, use the `Autoconnect profiler` checkbox in the build settings. Note also that draw calls can't currently be profiled for WebGL.

## Remote Profiling <a name="remote"></a>

---

* To profile your game running on another device or a Unity player running on another computer, you can connect the Unity Editor to that other device or computer. The dropdown Active Profiler shows all Unity players running on the local network. These players are identified by player type and the host name running the player “iPhonePlayer (Toms iPhone)”.
* To be able to connect to a Unity player, you must launch that Unity player as a Development build (menu: File > Build Settings…).
* Check the Development Build option in the dialog box. From here you can also check Autoconnect Profiler to make the Editor and Player Autoconnect at startup.

### ios <a name="ios"></a>

* enable remote profiling on iOS devices by following these steps:

    1. connect your iOS device to your WiFi network. (The Profiler uses a local WiFi network to send profiling data from your device to the Unity Editor.)
    2. in the Unity Editor’s Build Settings dialog box (menu: File > Build Settings…), check the Autoconnect Profiler checkbox.
    3. attach your device to your Mac via cable. In the Unity Editor’s Build Settings dialog box (menu: File__>__Build Settings…), check the Autoconnect Profiler checkboxcheck and select Build & Run.
    When the app launches on the device, open the Profiler window in the Unity Editor (Window > Profiler).

	If you are using a firewall, you need to make sure that ports 54998 to 55511 are open in the firewall’s outbound rules - these are the ports used by Unity for remote profiling.

	Note: Sometimes the Unity Editor might not autoconnect to the device. In such cases you can initiate the Profiler connection from Profiler window Active Profiler drop down menu by select appropriate device.

### android <a name="android"></a>

* there are two methods to enable remote profiling on Android devices: WiFi or ADB.
* for wifi profiling, follow these steps:

    1. Make sure to disable Mobile Data on your Android device.
    2. Connect your Android device to your WiFi network.(The Profiler uses a local WiFi network to send profiling data from your device to the Unity Editor.)
    3. Attach your device to your Mac or PC via cable. Check the Development Build and Autoconnect Profiler checkboxes in Unity’s Build Settings dialog box, and click on Build & Run in the Unity Editor.
    4. When the app launches on the device, open the Profiler window in the Unity Editor (Menu: Window > Profiler).
    5. If the Unity Editor fails to autoconnect to the device, select the appropriate device from the Profiler window Active Profiler drop down menu.

	Note: The Android device and host computer (running the Unity Editor) must both be on the same subnet for the device detection to work.

	For ADB profiling, follow these steps:

    1. Attach your device to your Mac or PC via cable and make sure ADB recognizes the device (i.e. it shows in adb devices list).
    2. In the Unity Editor’s Build Settings dialog box (menu: File__>__Build Settings…), check the Development Build__checkboxcheck and select Build & Run__.
    3. When the app launches on the device, open the Profiler window in the Unity Editor (Menu: Window > Profiler).
    4. Select the AndroidProfiler(ADB@127.0.0.1:34999) from the Profiler Window Active Profiler drop down menu. Note: The Unity Editor automatically creates an adb tunnel for your application when you click on Build & Run. If you want to profile another application or you restart the adb server you have to setup this tunnel manually. To do this, open a Terminal window / CMD prompt and enter:

	`adb forward tcp:34999 localabstract:Unity-{insert bundle identifier here}`

	Note: The entry in the drop down menu is only visible when the selected target is Android.

	If you are using a firewall, you need to make sure that ports 54998 to 55511 are open in the firewall’s outbound rules - these are the ports used by Unity for remote profiling.

## Profilers <a name="profilers"></a>

---

### cpu <a name="cpu"></a>

  ![CPU Profiler](_asset/img/1.png)

* the CPU Usage Profiler displays where time is spent in your game. When it is selected, the lower pane displays hierarchical time data for the selected frame.
* `Hierarchy mode` - displays hierarchical time data.
* `Group Hierarchy mode` - groups time data into logical groups (such as Rendering, Physics, Scripts). Because children of any group can also be in different groups (for example, some scripts might also call rendering functions), the percentages of group times often add up to more than 100%.
* drag chart labels up and down to reorder the way the CPU chart is stacked.
* `when selecting an individual item` - in the lower pane, its contribution to the CPU chart is highlighted (& the rest are dimmed). Clicking on an item again de-selects it.

  ![Selecting individual item](_asset/img/4.png)

	In the hierarchical time data, the Self column refers to the amount of time spent in a particular function, not including the time spent calling sub-functions. In the screenshot above, 41.1% of time is spent in the Camera.Render function. This function does a lot of work, and calls the various drawing and culling functions. Excluding all of these functions, only 2.1% of time is spent in the Camera.Render function itself.

	The Time ms and Self ms columns show the same information but in milliseconds. Camera.Render takes 0.01ms but, including all the functions it calls, 0.21ms are consumed. The GC Alloc column shows how much memory has been allocated in the current frame, which is later collected by the garbage collector. Keep this value at zero to prevent the garbage collector from causing hiccups in your framerate.

	The Others section of the CPU profiler records the total of all areas that do not fall into Rendering, Scripts, Physics, Garbage Collection or VSync. This includes Animation, AI, Audio, Particles, Networking, Loading, and PlayerLoop.
* `physics markers` - below provides a brief overview of the various high-level Physics Profiler markers:

	* `Physics.Simulate` - called from FixedUpdate. This updates the present state of the physics by instructing the physics engine (PhysX) to run its simulation.
    * `Physics.Processing` - called from FixedUpdate. This is where all the non-cloth physics jobs are processed. Expanding this marker shows low-level detail of the work being done internally in the physics engine.
    * `Physics.ProcessingCloth` - called from FixedUpdate. This is where all the cloth physics jobs are processed. Expanding this marker will show low level detail of the work being done internally in the physics engine.
    * `Physics.FetchResults` - called from FixedUpdate. This is where the results of the physics simulation are collected from the physics engine.
    * `Physics.UpdateBodies` - called from FixedUpdate. This is where all the physics bodies have their positions and rotations updated as well as where messages that communicate these updates are sent.
    * `Physics.ProcessReports` - called from FixedUpdate. This stage is run once the physics FixedUpdate has concluded, and is where all the various stages of responding to the results of the simulation are processed. Contacts, joint breaks and triggers are updated and messaged here. There are four distinct sub stages:
    	* `Physics.TriggerEnterExits` - called from FixedUpdate. This is where OnTriggerEnter and OnTriggerExit events are processed.
        * `Physics.TriggerStays` - called from FixedUpdate. This is where OnTriggerStay events are processed.
        * `Physics.Contacts` - called from FixedUpdate. This is where OnCollisionEnter, OnCollisionExit and OnCollisionStay events are processed.
        * `Physics.JointBreaks` - called from FixedUpdate. This is where updates and messages relating to joints being broken is processed.
    * `Physics.UpdateCloth` - called from Update. This is where updates relating to cloth and their skinned meshes are made.
    * `Physics.Interpolation` - called from Update. This stage deals with the interpolation of positions and rotations for all the physics objects.

* `performance warnings` - There are some common performance issues the CPU Profiler is able to detect & warn you about. These appear in the Warning column of the lower pane when viewing the CPU Usage.

	The specific issues the Profiler can detect are:

	* `Static Collider.Modify` (Expensive delayed cost)
	* `Static Collider.Move` (Expensive delayed cost)
	* `Static Collider.Create` (Expensive delayed cost)
	* `Animation.DestroyAnimationClip` [Triggers RebuildInternalState]
	* `Animation.AddClip` [Triggers RebuildInternalState]
	* `Animation.RemoveClip` [Triggers RebuildInternalState]
	* `Animation.Clone` [Triggers RebuildInternalState]
	* `Animation.Deactivate` [Triggers RebuildInternalState]

  	![Performance Warnings](_asset/img/5.png)

	In the screenshot above, the Profiler is showing the Static Collider.Move warning. The Warning column shows that this warning has been triggered 12 times in the current frame. The term “delayed cost” means that, although the entry in the Profiler may show a low cost (in this case 0.00ms), the action may trigger more system-demanding operations later on.

* `CPU Profiler Timeline` -
	Mem Record: Native memory performance profiling

	Native memory performance profiling allows you to profile activity inside Unity’s native memory management system and assess how it is affecting runtime performance. This can be useful when searching for unwanted or resource-intensive allocation patterns in Unity’s memory management.

	To profile Unity’s native memory management, you need to record it. To access native memory recording mode (called Mem Record in Unity), go to Window > Profiler to open the Profiler window. Select the CPU Usage Profiler (if it is not visible, click Add Profiler > CPU) then the drop-down menu underneath the Profiler. Next, click Timeline and then select Mem Record.

![CPU Profiler Timeline](_asset/img/6.png)

![CPU Profiler Timeline](_asset/img/7.png)

![CPU Profiler Timeline](_asset/img/8.png)

![CPU Profiler Timeline](_asset/img/9.png)

### rendering <a name="rendering"></a>

![Rendering Profiler](_asset/img/10.png)

* displays rendering statistics.
* the timeline displays count for:
	* batches
	* SetPass Calls
	* triangles (& vertices) rendered.
* the lower pane displays more rendering statistics, which closely match the ones shown in the GameView Rendering Statistics window.

### memory <a name="memory"></a>

### audio <a name="audio"></a>

### physics <a name="physics"></a>

### gpu <a name="gpu"></a>

### global illumination <a name="global-illumination"></a>

### ui <a name="ui"></a>