import { world, ButtonPushAfterEvent, system } from '@minecraft/server';

world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    world.sendMessage(
        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
    );
});
