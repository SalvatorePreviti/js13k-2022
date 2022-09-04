const COLLISION_TEXTURE_SIZE = 10;

for (let i = 0; i < COLLISION_TEXTURE_SIZE; ++i) {
  console.log(Math.sin((i / (COLLISION_TEXTURE_SIZE - 1)) * Math.PI).toFixed(3));
}
