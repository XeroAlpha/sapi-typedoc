// Spawns an adult horse
import { DimensionLocation } from '@minecraft/server';

function spawnAdultHorse(location: DimensionLocation) {
    // Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult
    location.dimension.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', location);
}
