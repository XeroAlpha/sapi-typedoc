import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
});
