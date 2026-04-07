import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a lever
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const lever = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || lever === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  lever.setPermutation(
    BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState("lever_direction", "up_north_south")
  );

  world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
    const eventLoc = leverActionEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Lever activate event at tick " + system.currentTick);
    }
  });
}
