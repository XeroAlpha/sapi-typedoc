import { world } from "@minecraft/server";

// Fetch the block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
const blockPerm = block.getPermutation();

console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
