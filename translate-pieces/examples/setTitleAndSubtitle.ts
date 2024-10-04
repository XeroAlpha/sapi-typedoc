import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    event.player.onScreenDisplay.setTitle('You respawned', {
        stayDuration: 100,
        fadeInDuration: 2,
        fadeOutDuration: 4,
        subtitle: 'Try not to die next time!',
    });
});
