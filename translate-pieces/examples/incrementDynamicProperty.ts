import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}
