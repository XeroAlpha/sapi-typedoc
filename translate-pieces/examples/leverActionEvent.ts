import { world, system, LeverActionAfterEvent } from '@minecraft/server';

world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
    console.warn(
        `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
    );
});

