// A function that spawns a particle at a random location near the target location for all players in the server
import { world, MolangVariableMap, DimensionLocation, Vector3 } from '@minecraft/server';

function spawnConfetti(location: DimensionLocation) {
    for (let i = 0; i < 100; i++) {
        const molang = new MolangVariableMap();

        molang.setColorRGB('variable.color', {
            red: Math.random(),
            green: Math.random(),
            blue: Math.random()
        });

        const newLocation: Vector3 = {
            x: location.x + Math.floor(Math.random() * 8) - 4,
            y: location.y + Math.floor(Math.random() * 8) - 4,
            z: location.z + Math.floor(Math.random() * 8) - 4,
        };
        location.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
    }
}
