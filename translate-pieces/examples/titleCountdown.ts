import { world, system } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe(event => {
    event.player.onScreenDisplay.setTitle('Get ready!', {
        stayDuration: 220,
        fadeInDuration: 2,
        fadeOutDuration: 4,
        subtitle: '10',
    });

    let countdown = 10;

    const intervalId = system.runInterval(() => {
        countdown--;
        event.player.onScreenDisplay.updateSubtitle(countdown.toString());

        if (countdown == 0) {
            system.clearRun(intervalId);
        }
    }, 20);
});
