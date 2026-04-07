import { DimensionLocation } from '@minecraft/server';
import { Vector3Utils } from '@minecraft/math';

function spawnAdultHorse(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
    log('Create a horse and triggering the ageable_grow_up event, ensuring the horse is created as an adult');
    targetLocation.dimension.spawnEntity(
        'minecraft:horse<minecraft:ageable_grow_up>',
        Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
    );
}
