# "Dante", an Entry for js13k 2022.

### 🎉  First prize in the Overall and Mobile category in [JS13K 2022](https://github.blog/2022-10-06-js13k-2022-winners/) edition! Play it [here](https://js13kgames.com/public/entries/dante)  🎉

You can read the post mortem [here](https://github.com/SalvatorePreviti/js13k-2022/blob/main/post-mortem.md)

Play it [here](https://js13kgames.com/public/entries/dante)

Music by [Ryan Malm](https://twitter.com/ryanmalm) and [Beethoven](<https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)>).

![image](https://user-images.githubusercontent.com/6913178/198019240-5bfa153e-e55c-44e3-bb8d-32278a51af18.png)

Sources and references:

- Constructive Solid Geometry based on Binary Space Partition Trees:

  - https://people.eecs.berkeley.edu/~jrs/274s19/bsptreefaq.html
  - https://www.researchgate.net/publication/220721659_Set_operation_on_polyhedra_using_binary_space_partitioning_trees
  - https://github.com/evanw/csg.js/ from which I got inspiration for the implementation used here

- Cascaded shadowmaps, I use 2 levels for cascaded shadowmaps so the shadows are always rendered in the camera frustum

  - implementation losely based on https://github.com/JoeyDeVries/LearnOpenGL/tree/master/src/8.guest/2021/2.csm

- Soundbox music player http://sb.bitsnbites.eu/player-small.js

- Roadroller, for compressing further the bundled javascript (it reduces approximately 2 kilobytes) https://github.com/lifthrasiir/roadroller
