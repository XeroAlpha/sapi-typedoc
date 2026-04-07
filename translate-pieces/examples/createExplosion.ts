import { DimensionLocation } from "@minecraft/server";

function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  log("Creating an explosion of radius 10.");
  targetLocation.dimension.createExplosion(targetLocation, 10);
}
