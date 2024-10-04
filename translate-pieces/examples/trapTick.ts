import { system, world } from '@minecraft/server';

function printEveryMinute() {
    try {
        // Minecraft runs at 20 ticks per second.
        if (system.currentTick % 1200 === 0) {
            world.sendMessage('Another minute passes...');
        }
    } catch (e) {
        console.warn('Error: ' + e);
    }

    system.run(printEveryMinute);
}

printEveryMinute();
