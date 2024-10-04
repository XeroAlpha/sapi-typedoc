// A function the creates a sign at the specified location with text on both sides and dye colors
import {
    DimensionLocation,
    BlockPermutation,
    BlockSignComponent,
    BlockComponentTypes,
    DyeColor,
    SignSide,
} from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function createSignAt(location: DimensionLocation) {
    const block = location.dimension.getBlock(location);
    if (!block) {
        console.warn('Could not find a block at specified location.');
        return;
    }
    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, {
        ground_sign_direction: 8,
    });
    block.setPermutation(signPerm);
    const sign = block.getComponent(BlockComponentTypes.Sign);

    if (sign !== undefined) {
        sign.setText(`Party Sign!\nThis is green on the front.`);
        sign.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
        sign.setTextDyeColor(DyeColor.Green);
        sign.setTextDyeColor(DyeColor.Red, SignSide.Back);

        // players cannot edit sign!
        sign.setWaxed(true);
    } else {
        console.warn('Could not find a sign component on the block.');
    }
}
