import { BlockPermutation, DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addBlockColorCube(targetLocation: DimensionLocation) {
  const allWoolBlocks: string[] = [
    MinecraftBlockTypes.WhiteWool,
    MinecraftBlockTypes.OrangeWool,
    MinecraftBlockTypes.MagentaWool,
    MinecraftBlockTypes.LightBlueWool,
    MinecraftBlockTypes.YellowWool,
    MinecraftBlockTypes.LimeWool,
    MinecraftBlockTypes.PinkWool,
    MinecraftBlockTypes.GrayWool,
    MinecraftBlockTypes.LightGrayWool,
    MinecraftBlockTypes.CyanWool,
    MinecraftBlockTypes.PurpleWool,
    MinecraftBlockTypes.BlueWool,
    MinecraftBlockTypes.BrownWool,
    MinecraftBlockTypes.GreenWool,
    MinecraftBlockTypes.RedWool,
    MinecraftBlockTypes.BlackWool,
  ];

  const cubeDim = 7;

  let colorIndex = 0;

  for (let x = 0; x <= cubeDim; x++) {
    for (let y = 0; y <= cubeDim; y++) {
      for (let z = 0; z <= cubeDim; z++) {
        colorIndex++;
        targetLocation.dimension
          .getBlock(Vector3Utils.add(targetLocation, { x, y, z }))
          ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
      }
    }
  }
}
