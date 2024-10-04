import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function mobParty(targetLocation: DimensionLocation) {
    const mobs = ['creeper', 'skeleton', 'sheep'];

    // create some sample mob data
    for (let i = 0; i < 10; i++) {
        const mobTypeId = mobs[i % mobs.length];
        const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
        entity.addTag('mobparty.' + mobTypeId);
    }

    const eqo: EntityQueryOptions = {
        tags: ['mobparty.skeleton'],
    };

    for (const entity of targetLocation.dimension.getEntities(eqo)) {
        entity.kill();
    }
}
