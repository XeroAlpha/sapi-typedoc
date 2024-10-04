// A function the creates a sign at the specified location with the specified text
import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function createSignAt(location: DimensionLocation) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm); // Update block to be a sign

    // Update the sign block's text
    // with "Steve's Head"
    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
    }
}
