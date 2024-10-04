import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon

// Equivalent scripting code would be:
function spawnFish(dimension: Dimension) {
    dimension
        .getEntities({
            type: 'fox',
        })
        .filter(entity => {
            const block = dimension.getBlock({
                x: entity.location.x,
                y: entity.location.y - 1,
                z: entity.location.z,
            });

            return block !== undefined && block.matches('minecraft:stone');
        })
        .forEach(entity => {
            dimension.spawnEntity('salmon', entity.location);
        });
}
