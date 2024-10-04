import { DimensionLocation, BlockPermutation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

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

function placeRainbowCube(location: DimensionLocation) {
    let colorIndex = 0;
    for (let x = 0; x <= cubeDim; x++) {
        for (let y = 0; y <= cubeDim; y++) {
            for (let z = 0; z <= cubeDim; z++) {
                colorIndex++;
                location.dimension
                    .getBlock({ x: location.x + x, y: location.y + y, z: location.z + z })
                    ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
            }
        }
    }
}
