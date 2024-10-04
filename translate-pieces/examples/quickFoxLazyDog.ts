// Spawns a fox over a dog
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnAdultHorse(location: DimensionLocation) {
    // Create fox (our quick brown fox)
    const fox = location.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
        x: location.x,
        y: location.y + 2,
        z: location.z,
    });

    fox.addEffect('speed', 10, {
        amplifier: 2,
    });

    // Create wolf (our lazy dog)
    const wolf = location.dimension.spawnEntity(MinecraftEntityTypes.Wolf, location);
    wolf.addEffect('slowness', 10, {
        amplifier: 2,
    });
    wolf.isSneaking = true;
}
