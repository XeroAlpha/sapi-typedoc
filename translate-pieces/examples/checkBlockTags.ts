import { DimensionLocation } from "@minecraft/server";

function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch the block
  const block = targetLocation.dimension.getBlock(targetLocation);

  // check that the block is loaded
  if (block) {
    log(`Block is dirt: ${block.hasTag("dirt")}`);
    log(`Block is wood: ${block.hasTag("wood")}`);
    log(`Block is stone: ${block.hasTag("stone")}`);
  }
}
