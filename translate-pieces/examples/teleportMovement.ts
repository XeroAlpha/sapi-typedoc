import { world, system } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const targetLocation = { x: 0, y: 0, z: 0 };

const pig = overworld.spawnEntity('minecraft:pig', targetLocation);

let inc = 1;
const runId = system.runInterval(() => {
    pig.teleport(
        { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
        {
            facingLocation: targetLocation,
        },
    );

    if (inc > 100) {
        system.clearRun(runId);
    }
    inc++;
}, 4);
