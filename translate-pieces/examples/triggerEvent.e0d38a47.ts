// A function that spawns a creeper and triggers it to explode immediately
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnExplodingCreeper(location: DimensionLocation) {
    const creeper = location.dimension.spawnEntity(MinecraftEntityTypes.Creeper, location);

    creeper.triggerEvent('minecraft:start_exploding_forced');
}
