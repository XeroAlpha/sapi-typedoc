// Creates an explosion of radius 15 that does not break blocks
import { DimensionLocation } from '@minecraft/server';

function createExplosions(location: DimensionLocation) {
    // Creates an explosion of radius 15 that does not break blocks
    location.dimension.createExplosion(location, 15, { breaksBlocks: false });

    // Creates an explosion of radius 15 that does not cause fire
    location.dimension.createExplosion(location, 15, { causesFire: true });

    // Creates an explosion of radius 10 that can go underwater
    location.dimension.createExplosion(location, 10, { allowUnderwater: true });
}
