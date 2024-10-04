import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~

// Equivalent scripting code would be:
function spawnPigs(dimension: Dimension) {
    const armorStandArray = dimension.getEntities({
        type: 'armor_stand',
    });
    const playerArray = dimension.getPlayers({
        location: { x: 0, y: -60, z: 0 },
        closest: 4,
        maxDistance: 15,
    });
    armorStandArray.forEach(entity => {
        playerArray.forEach(player => {
            dimension.spawnEntity('pig', {
                x: player.location.x + 1,
                y: player.location.y,
                z: player.location.z,
            });
        });
    });
}
