import { world, system, BlockPermutation, BlockPistonState, PistonActivateAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a couple of piston blocks
  const piston = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (piston === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState("facing_direction", 3));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState("facing_direction", 1));

  world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    const eventLoc = pistonEvent.piston.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "Piston event at " +
          system.currentTick +
          (pistonEvent.piston.isMoving ? " Moving" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanding ? " Expanding" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanded ? " Expanded" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracting ? " Retracting" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracted ? " Retracted" : "")
      );
    }
  });
}
