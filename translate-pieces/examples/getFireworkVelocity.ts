// A function that spawns fireworks and logs their velocity after 5 ticks
import { DimensionLocation, system, world } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnFireworks(location: DimensionLocation) {
    const fireworkRocket = location.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, location);

    system.runTimeout(() => {
        const velocity = fireworkRocket.getVelocity();

        world.sendMessage(`Velocity of firework is: ${velocity.x}, ${velocity.y}, ${velocity.z}`);
    }, 5);
}
