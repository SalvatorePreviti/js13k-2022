# Dante - a post mortem

![image](https://user-images.githubusercontent.com/6913178/198019158-0bb1beff-3f78-47c8-ae43-8924eba2e7d1.png)

Dante is my entry for js13k 2022 competition, an HTML5 game in 13 kilobytes.
It won the first place overall and in the mobile category.

Source code [here](https://github.com/SalvatorePreviti/js13k-2022)

Game playable [here](https://js13kgames.com/entries/dante)

Github blog [here](https://github.blog/2022-10-06-js13k-2022-winners/)

## Inspiration and theme

The theme of this year was DEATH, it was announced on the 13th of August, and the deadline of the competition was on the 13th of September 2022.

I didn't code at all for the first two days, spent them thinking on the idea, the style and making a mental plan on how to execute it.
Almost every videogame has death in it, so I wanted to do something different and not too obvious.

Went through many ideas and had long chats with my friend [Ben](https://github.com/bencoder). We worked together on two js13k entries, [xx142-b2.exe](https://github.com/bencoder/js13k-2019), first place in 2019, and [Island Not Found](https://github.com/SalvatorePreviti/js13k-2020), 13th place in 2020. We had fun working together, but this year he could not join. Nonetheless, he helped me focus and great inputs.

---

I thought to move the focus on the afterlife, and my italian origins.

Thought about Dante Aligheri's Divine Comedy. I've read it in italian during high school.
There are many games that take hell in a not too serious and not too dark way (Doom to start with), so I thought it could be possible to make something fun, not too heavy, and still related to the theme.

I had a very simple idea: What happens if "Infernal delivery service", like any post service, has a glitch? What happens if a delivery of souls ends up in the wrong place? Who is going to bring them to the right place? "Dante", the little red devil, is going to save the day. He is immortal, of course, he is a devil, and he has to catch 13 souls lost in hell, a twisted 3D world full of levers, traps, and atmospheric and weird infernal structures.

Chasing ghosts is of course the opposite of pacman, where you usually run away from them, another element that was fun to play with. Another idea I had was to add some commentary of our current political and societal situation, like Dante Aligheri did in his work, in form of a popup message when the player catch a soul.

---

The graphics takes inspiration from the 90s movies like The Lawnmower, Hackers, and the bad CGI of many B movies of the time.
It takes inspiration from games like Doom, Unreal, and the old 90s demoscene. Graphics had to be nothing too fancy but a bit funny, camp and kitsch, and full of colour. Architecturally the game is inspired roman, medieval, baroque architecture, with a hint of brutalism. I thought of places I lived in in Italy, Palermo and Rome.
There are a lot of pentagons and hexagons everywhere instead of more classic pentagrams or pop culture "infernal" symbols: I wanted to avoid the obvious.

Is quite hard to create a consistent style in so little amount of space, but I think I managed to do it enough.

---

During development I listened to more metal than usual. Considering the theme and the setting of the game seemed a good musical choice. Went through many artists in my playlist, in particular: Black Sabbath, Slayer, Metallica, Pantera, Sepultura. Two albums of Sepultura (brazilian metal band) got me pretty inspired, Dante XXI (based on Dante's inferno) and A-Lex (based on Clockwork Orange). There is in A-Lex a metal version of Beethoven's Symphony No. 9 that sounded great. Found another great metal execution of Beethoven's ["Moonlight Sonata", Piano Sonata No. 14](https://www.youtube.com/watch?v=r6CTw_a0I14) that sounded just like it was made for the game.

Not being at all versed in music composition, I had a chat online on JS13K Slack with [Ryan Malm](https://github.com/Rybar), gave him access to a first demo of the game, explained my idea and the sources of inspiration, and in just few hours he made a first short version of the song. And it was amazing! Perfect. That was it.

I am very grateful for his work, he left me speachless. The music is a bit metal, a bit 8 bit, a bit 90s, not too serious, not too dark, even a bit funny, and still epic. Just perfect for the game.

## Development

### Tooling

Prepared some tools before the begining of the competition, based on the setup used for the previous entries.

- [spglsl](https://github.com/SalvatorePreviti/spglsl) A glsl minifier I wrote for JS13K, used for [Island Not Found](https://github.com/SalvatorePreviti/js13k-2020) and used also by other JS13K developers in the past two editions. Whilst the code is not the cleanest (in the end is just a tool for a competition), it makes me happy when somethings I write is used by someone else. The minifier is based on Google [Angle](https://github.com/google/angle) (Almost Native Graphics Layer Engine) to have the same parser and errors that we get in the browser. Wrote a custom emitter that generates minified glsl from glsl. Some optimizations and mangling are performed in the abstract syntax tree. It executes preprocessor directives, removes whitespaces, dead code and extra parentheses, collapses types, replaces ifs with ?: operator, applies constant folding, mangle functions and variable names and some more stuff. This tool is compiled from C++ to WebAssembly with [emscripten](https://emscripten.org/) and it runs in NodeJs as an npm package. Besides some unit tests, I used [Khronos conformance tests](https://registry.khronos.org/webgl/sdk/tests/webgl-conformance-tests.html) in a browser controlled with puppetteer to check that the minified code is still valid.
- [roadroller](https://github.com/lifthrasiir/roadroller) A tool written by
  Kang Seonghoon for js13k. I am impressed of what he created, roadroller removes around 1800 bytes from the final zip of Dante, and we would have a much simpler game without this tool.
- [zopfli](https://en.wikipedia.org/wiki/Zopfli) I monkey patched [adm-zip](https://github.com/cthackers/adm-zip) to use zopfli instead of native nodejs gzip to higher compression rates and squeeze as much as possible.
- Babel, swc, esbuild, terser, uglify3, closure compiler. Added also some custom plugin for swc and babel to sort variables and do some optimization and replace webgl methods with an hash to reduce space. The minify code is not the cleanest, and is a result of raw experimentation and empirical observation. Is very hard to preemtively imagine how certain things could generate more compressible code than others, is not so intuitive and generally a very hard problem.
- [ViteJS](https://github.com/vitejs/vite), very fast transpilation times reload or hot reload, perfect for local development. It bundles using rollup, and it is very easy to configure.
- [TypeScript](https://www.typescriptlang.org/), [eslint](https://eslint.org/), linting and typechecking also during the competition helps me write more readable code and avoid bugs. There is not really much time to work on unit tests during a competition instead :)

There are many other packages and tools used, but I think these are the most important ones.

#### Constructive Solid Geometry, [CSG](https://en.wikipedia.org/wiki/Constructive_solid_geometry)

I enjoyed how I and Ben worked on the level design of [Island Not Found](https://github.com/SalvatorePreviti/js13k-2020/wiki/Post-Mortem). It had a ray marching based renderer and used constructive solid geometry.
See the amazing [Inigo Quilez articles](https://iquilezles.org/articles/distfunctions/) for more information.
However performance was hard to maintain and decreased quickly with the size and complexity of the world. Glsl compilation time was also a big problem.

Constructive solid geometry is an effective way to define a complex world in code and allows to create complex shapes, with concave solids, holes and complex shapes with just few lines of code.
I decided to prepare for the competition a small setup based on CSG on polygons.
Triangles are in general much more performant on the hardware we use now, they have nice antialiasing out of the box, and performance decreases more or less linearly with the number of vertices.

While there are in general more performant solutions to constructive solid geometry, for example based on [BVH](https://en.wikipedia.org/wiki/Bounding_volume_hierarchy) like [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh), I landed on using the classic [Binary Space Partition Trees](https://www.researchgate.net/publication/220721659_Set_operation_on_polyhedra_using_binary_space_partitioning_trees).
The amount of code required to implement it is incredibly small, even smaller and simpler than I expected.

Implementation [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/geometry/csg.ts)

Almost everything in software engineering is a trade off.
BSPs have drawbacks:

- construction can be slow and suboptimal
- the tree might result very unbalanced, causing bad performances
- finding the perfect construction is an NP-hard problem
- it generates more triangles and vertices that what would be needed because every polygon get splitted by every plane.

They have however the great advantage to generate only convex polygons as a result of the boolean operations.
A convex polygon splitted by a plane outputs two convex polygons, and the triangulation of a convex polygon is trivial.
Triangulation of a convex polygon requires just a loop, compared to other methods, like Ear clipping, for example, that becomes even more complicated if there are holes involved.

To reduce the number of resulting triangles, I merge some polygons back after the boolean operation by keeping track of the parent of as split. If both the two polygons resulting from a split are in the resulting set, I replace both with the common parent, recursively. This is a very simple, cheap and effective way to reduce the number of triangles, also if not perfect.

The BSP implementation I wrote is recursive and relies havily on tail call optimization of all modern JS engines to avoid stack overflow and to stay fast.

Another trick I used is to work only with positions, colors and a flag "smooth" when building the geometry. I do not use directly indices when building the level, this simplified construction and level designs a lot.
Normals and vertex indices are instead calculated afterwards, when the geometry is finalized and polygons triangulated. I use a hash map to merge same vertices together, converting the vertex to string as key, and the [Newell's algorithm](https://stackoverflow.com/questions/27326636/calculate-normal-vector-of-a-polygon-newells-method) to compute the normal for all the polygons. If a flag "smooth" is on, I average the normals of all the polygons that share the same vertex.

Implementation [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/game/triangle-buffers.ts)

All this is surprisingly quite fast. The game has in total 24264 unique vertices, 23818 triangles (more are rendered using instancing however), and on my M1 macbook pro it takes 70 milliseconds to generate all the triangles from the level definition.

Note that for performance and memory, I am not using a single BSP tree, I do rely on Z-buffer as well for unioning different unrelated geometries, overdraw is not really a problem for performance. BSP trees are mainly used to carve holes, substraction and union of coplanar polygons in specific places.

#### Level design

The whole level and models are defined [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/game/level.ts) in 1065 lines of code.

The only editor used for this game was Visual Studio Code. Level design via code is surprisingly easier than it might seem, and seems to be an underappreciated technique. In general, we saw this happening in the world outside of game development: react is a great example - code replaced various RAD and GUI tools. Level design via code is a great way to create complex levels, and it is also a great way to leverage procedural generation.
In [this short video](https://twitter.com/SN74HC00/status/1560946345871134720) you can see some real time editing. The main requirement is - speed! A fast iteration loop between writing code and seeing the result is needed.

This game uses very simple primitives to build everything: box, cylinder, sphere.
The horn shape is procedurally generated and is used both for the Dante horns and as decoration in the level. Sphere is used to build Dante's head and body.
A modified and distorted sphere is used to generate the soul model procedurally.

Shapes are transformed using simple matrix transformations - translation, rotation, scale, skew. The CSG boolean operations are used to substract shapes allowing the creation of holes and complex geometries.
I used the [DOMMatrix](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix) API. It is slow and was not designed for real time 3D graphics, but comes for free in all browsers.
I preferred to use the space I had to add more game than implementing my own matrix library or using gl-matrix.

#### Shadows and light

I decided to do some experimentation with shadow mapping techniques before the competition started, and I am happy I did because without shadows the game looks very bad. Shadows are not only very important for the look of the game, but also for the gameplay. Dante has to move from one platform to another and without shadows the depth perception is bad.

Tried to apply a bit of the 3 lights technique - a blueish/purpleish ambient light, a orangish light coming from the lava, and a yellowish main light coming from somewhere in the sky. Only the main directional light casts shadows.

Shadows are hard. And to maintain the same quality of shadows for all the level I decided to use [CSM, Cascaded Shadowmaps](https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf)

The key point of CSM compared to classic shadowmapping is that the shadows are rendered only for a small portion of the scene, the portion that is in the frustum of the camera. This allows to use a smaller texture and/or have good resolution for it everywhere. I used just two levels, two textures of 2048x2048 pixels, so at every frame the scene is rendered three times, once for each level of the CSM with a different framebuffer and the final render. Only the depth buffer is used, no color buffer is needed for the CSM. The depth buffer is then used in the main fragment shader to render the shadows.

Since it is a directional light, light rays can be approximated to be all parallel, so an [ortographic projection matrix](https://en.wikipedia.org/wiki/Orthographic_projection) is used to render the world from the point of view of the light, with a lookat matrix over the axis aligned bounding box built over the frustum splitted by the CSM splitting plane.

Now, the math involved here is really a bit complicated :D but luckily I found a very good implementation from where I took inspiration: https://github.com/JoeyDeVries/LearnOpenGL/tree/master/src/8.guest/2021/2.csm

To improve shadow quality, I do both some interpolation in the fragment shader and use hardware PCF (percentage closer filter) [See this for more information](https://developer.nvidia.com/gpugems/gpugems/part-ii-lighting-and-shadows/chapter-11-shadow-map-antialiasing).
Note: PCF filter is not supported everywhere. iOS and some Android devices do NOT support it, this means that on iPhone and iPad shadows looks more pixelated than on other devices. However, the result seems to not be too bad so I ignored this problem.

Main fragment shader code for light and shadows [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/shaders/main-fragment.frag)

#### Textures

How can you put textures in 13k? Simple, you don't.

First of all, thanks a lot to [Maxime Euziere](https://xem.github.io/) for suggesting trying SVG instead of writing glsl or js code to generate the texture! It was a great idea!

Textures are generated procedurally from a [single SVG file](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/groundTexture.svg).

In each RGB channel I store a different noise texture and I load the SVG at startup. I am using [feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence) filter to do that, it is just perlin/simplex noise but by leveraging this in the SVG instead of writing the texture generation in JavaScript reduced the amount of code required.
And the great thing of this is that the texture is repeatable thanks to the SVG attribute `stitchTiles="stitch"`

One channel is used for the world surfaces, one channel is used for the lava, and another channel for the sky, that is visible in first person mode only.
All three channels are used to add a bit of fake bump mapping to the world surfaces by distorting the surface normals.

The amount of texturing is decided by the alpha channel when assigning the color to a polygon. If alpha is 0, the surface is flat, if alpha is 1, the surface is fully rough.

Generating this texture is veeery slow, 500ms on my M1 macbook pro with Chrome or Safari, even slower on the android 2017 phone I used for tests. It is faster on Firefox, but Firefox seems to have some issues with the stich tiles attribute used in conjunction with with [feDiffuseLighting](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting), used to give some effect to the texture - I had to write extra SVG code to fix that.

What about UV coordinates for texturing? Simple, there are no UV coordinates.

I am using a very old and classic technique to do the texture mapping just in the fragment shader: [triplanar mapping](https://bgolus.medium.com/normal-mapping-for-a-triplanar-shader-10bf39dca05a#d715). It is a very simple technique, but it works very well for this game. The idea is to sample the texture in three different directions, and then blend the results together. The result is a texture that is always aligned with the surface, and by using the positions before being transformed by the world transformation matrices, the technique works also for moving objects.

#### Sky and lava

Implementation [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/shaders/sky-fragment.frag)

Sky and lava are rendered using a single triangle that covers the entire screen after rendering the geometry. By leveraging the z-buffer, sky and lava are rendered only where no geometry was rendered before.

The technique for the lava is very simple: I find the intersecion point of the ray that starts from the current fragment to a plane below the ground. Is literally ray tracing, but with just a single plane. From this I compute the texel coordinates to fetch, and distort it using the classic sin(gameTime) technique used in many games from the 90s to create a waving effect.

Since it is a simple texture, and the texture has mipmaps, it is very fast to render, and looks good even at the horizon with no aliasing artifacts and with a nice blurred effect that feels pretty "natural" and that comes for free.

To transition between the sky and the ground I use a simple linear fade to black at the horizon. The sky uses a form of biplanar mapping over an hemisphere.

The final result is pretty impressive considering the extreme simplicity of it, I was surprised by how it turned out, even better than I expected

#### Collision detection

The main idea here is: reuse the same code to do shadows, render the world, and do collision detection, without any additional data structure (BSP or BVH) that would have added a lot of complexity (especially for moving object).

To make the game fit in the little space available, and considering that the only thing that really need collision detection is the player, I decided to try to implement something a bit unorthodox: I am using the GPU to do the collision detection, by rendering the world from the point of view of the player (from two axis aligned quads, front and back), encoding in the output the distance to the nearest surface and the model Id of the surface where the player is walking on in a texture that i read with [readPixels](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/readPixels).

I and Ben used a very similar technique before in the game Island Not Found, however since the geometry there was defined using SDF in the fragment shader, was easy to compute the distance to the nearest geometry from an entire cylinder in a single texture and with great accuracy.
That is of course not possible with classic rasterization - with SDF is easy to curve the space, with rasterization only homogeneous transformations can be used, so two textures are needed to cover 360 degrees and the result of the distance calculation is much more "imprecise".

The idea however is simple - push the player in the opposite direction if the distance to something is less than the player radius.
Push the player up if the distance to the ground is less than the player height.
It required however a lot of trial and error to find the right constants and adjust the calculations to make it work. Is not perfect, but it works well enough for this game, both in platformer view and first person view.

One big issue of this approach is that readPixel is very slow, is a blocking operation! It stalls both CPU and GPU, blocking the main thread.
Since this is required at every frame update, the asynchronous version of readPixel would have not worked, because is usually some frames behind. I needed the synchronous version.
ReadPixels requires that all the queue of commands to the GPU are flushed and complete (glFinish) and it blocks the main thread until everything is executed and ready to be transferred back from the GPU.

However first implementation tried to use the same canvas, and this was causing big delays and slow downs in older machines.

While I was constantly hitting 120fps on the M1 Mac on Chrome and Firefox, older machines were indeed suffering quite a bit.

I tried to refactor the code many times until I finally had the idea to use a second canvas to do collision detection, and this changed everything.
The idea is that by using a second canvas, I have two differents command queues to the GPU that can finish in different times and run in parallel.
This does not only increase the parallelism and makes readPixels faster, this also reduced the amount of state changes required to render the world and the collision: I do not switch or change of the WebGL context or the shader that renders collision. With OpenGL, and so with Webgl2, every state change has a big cost, something that will improved with WebGPU when will be ready.

Luckily both Chrome and Firefox provide great developer tools, so is easy to profile and capture and detailed information of calls duration, GPU stalls and GPU rendering time. This was really helpful to optimize everything.

#### Performance optimizations, instancing, batching

The first implementation of Dante was not really optimal in terms of speed.
I was using a single draw call for every model, every lever, every soul.

Since everything has to be rendered multiple times (2 times for the shadows, 2 times for the collision, 1 time for rendering) the number of draw calls was very high.

The solution to this was to use batching and instancing.

#### Batching

Vertex shader source code [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/shaders/main-vertex.vert).

There is a big uniform buffer that contains all the transformations of all the objects in the world. This buffer is updated once every frame per canvas.

I assign a modelId to every vertex in the scene, writing it in the W component of the vertex position. This is required by the collision shader to see where the player is walking on and is also used to fetch the right transformation from the big uniform array.

The big uniform array is just an array of vec4. It cannot be an array of mat4 because older devices have the limit of 256 vec4 uniforms for the vertex shader (minimum supported value by webgl2), too little to render the entire level.
I did not want to introduce the use of [Uniform Buffers Objects](https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object), both because slower than uniforms and because they requires a lot of code.

Part of this array contains only translations: If the modelId is less than a specific value, a translation matrix is generated in the vertex shader.
If the modelId is greater or equal than that value, that is a model that requires full transformation (scaling, rotation, translation), so a full mat4 is read from the big uniform buffer. If the modelId is negative, that is a soul and so instead gl_InstanceID is used as index in the big buffer array to find the right world matrix.

#### Instancing

Souls are not rendered using the batching scheme explained above, they are using [instancing](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced). This is because souls contains too many vertices to be repeated in the vertex buffer 13 times (around 2000 triangles in total to keep it smooth and nice).

gl_InstanceID is used to find the index of the right transformation matrix from the uniform buffer instead of the modelId encoded in the vertex position, that is negative for souls.

So, in the end, two single calls are needed to render the whole world for a given step, code [here](https://github.com/SalvatorePreviti/js13k-2022/blob/96ff2f28196e143bcc5e70be8b58135719d51472/app/main-loop.ts#L58) :
drawElementsInstanced and drawElements

### Input, gameplay

The game supports first person and platformer view.
The game can be won playing 100% in first person or platformer view, however some puzzles are definitely easier in first person, some others in platformer view.
Is up to the player to decide how to play, and I think this is quite fun. I like first person view, but I also like platformer view, and I think that the game is better if the player can choose.
The game is played with the keyboard, and the mouse is used only to look around in first person view.
There is support for gamepad and touch screen. Touch screen was much more difficult than I expected. I decided to implement virtual joysticks not visible on screen, and this takes already a lot of space in the final bundle, and actually too much to add visible joysticks or other control mechanisms, and spent a lot of time trying to adjust it for phone and tablet.
Is not perfect, but is playable on mobile.

I decided to use extremely simple controls: move, switch levers. I did not want to add jump because would have added another input in the touch screen and increased complexity. Many reported that jumping could have improved the game, and I agree. In next one :)

The gameplay is very simple as well, and the difficulty is not too high - is a competition, and there were another 160 games! I did not want to do something too challenging to play.
Something that most of the player could finish.

Game state is saved in localstorage every time a lever is pulled or a sould catched.
The game restarts in the last checkpoint if the page gets reloaded.
A button to clear the localstorage and reload the page is available in the pause menu.

### Audio

[Ryan Malm](https://github.com/Rybar) composed the song, based on ["Moonlight Sonata", Piano Sonata No. 14](https://www.youtube.com/watch?v=r6CTw_a0I14) in [soundbox](https://sb.bitsnbites.eu/).
There are no sound effects, but the music is rich enough that there was no need. Is hard even to notice that they are not there.
To reduce the size of the music player and the song as much as possible, I had to spend some time to hardcode and optimize both, so the source code of soundbox player was heavily modified to occupy as little as possible, and can now play only that song.
There are some interesting minification tricks I used there, source code [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/app/music/music-player.ts)

## Final considerations

There is much more that could be discussed, I did use a lot of tricks to make the game work in so little space. Please feel free reach me out if you want to have some more details, you can find me on twitter https://twitter.com/SN74HC00

Does all this work worth the effort?
No, because is just crazy and pure madness. And also absolutely yes because is crazy and pure madness! :D

The fun in this competition is creating something, and this year I really had the urge to create something.
Is great to share it with other people that are passioned about games, game development and coding. Is great to exchange knowledge and tricks used in the various games, ideas and play them all. JS13K is a great community - everyone is trying to do their best and trying to help each other in the same time. Great thanks to https://twitter.com/end3r for this competition, it has been fun also this year.

It was tiring, but like every year, but gave me some hard and new problems to solve. The constraints of time and space are a huge push for creativity and creative solutions: is not only educational and fun, is also a big exercise in problem solving.
