import { BlockPermutation, DimensionLocation, world, ButtonPushAfterEvent, system } from '@minecraft/server';

// A simple generator that places blocks in a cube at a specific location
// with a specific size, yielding after every block place.
function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
    for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
        for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
            for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
                const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
                if (block) {
                    block.setPermutation(blockPerm);
                }
                yield;
            }
        }
    }
}

// When a button is pushed, we will place a 15x15x15 cube of cobblestone 10 blocks above it
world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const cubePos = buttonPushEvent.block.location;
    cubePos.y += 10;

    const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');

    system.runJob(blockPlacingGenerator(blockPerm, { dimension: buttonPushEvent.dimension, ...cubePos }, 15));
});
