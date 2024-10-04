import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function mobParty(targetLocation: DimensionLocation) {
    const mobs = ['creeper', 'skeleton', 'sheep'];

    // create some sample mob data
    for (let i = 0; i < 10; i++) {
        targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
    }

    const eqo: EntityQueryOptions = {
        type: 'skeleton',
    };

    for (const entity of targetLocation.dimension.getEntities(eqo)) {
        entity.applyKnockback(0, 0, 0, 1);
    }
}
