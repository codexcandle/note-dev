## Q
What is `Draw Call Batching` & how does it affect game performance?

## A
To draw a gameObject on screen, the engine has to issue a draw call to the graphics API (e.g. OpenGL, Direct3D).

These draw calls are often resource-intesive - with the graphics API doing sigficant work for every draw call (causing performance overhead on the CPU side).  

This is mostly caused by state changes done between the draw calls</u> (e.g. switching to a different material), which causes resouce-intensive validtaion & translation steps in the graphics driver.

Unity uses 2 (batching) techniques to address this:

1. dynamic
	- automatically done by Unity! (as Unity can automatically batch moving GameObjects into the same draw call if they share the same Material - & fulfill certain other criteria.)
	- however, incurs extra CPU overhead as the engine must convert the vertices into world space (?)
2. static
	- manually implemented.
	- allows the engine to reduce draw calls for geometry of any size provided it:
		1. shares the same material
		2. does NOT move
	- however, incurs a larger memory foot print.

###### FURTHER
[draw call batching](./../../engine/unity/optimize/dc-batch/)