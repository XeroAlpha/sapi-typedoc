import { world, MolangVariableMap, Vector3 } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe(event => {
    const targetLocation = event.player.location;
    for (let i = 0; i < 100; i++) {
        const molang = new MolangVariableMap();

        molang.setColorRGB('variable.color', {
            red: Math.random(),
            green: Math.random(),
            blue: Math.random()
        });

        const newLocation: Vector3 = {
            x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
            y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
            z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
        };
        event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
    }
});
