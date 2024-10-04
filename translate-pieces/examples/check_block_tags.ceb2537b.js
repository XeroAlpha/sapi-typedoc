import { world } from "@minecraft/server";

// Fetch the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);
