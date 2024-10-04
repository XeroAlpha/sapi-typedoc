// Register a new function that is called when a new entity is created.
import { world, EntitySpawnAfterEvent } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    const spawnLocation = entityEvent.entity.location;
    world.sendMessage(
        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
    );
});
