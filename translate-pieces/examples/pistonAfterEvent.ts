import { world, system, PistonActivateAfterEvent } from '@minecraft/server';

world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    console.warn(
        `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
    );
});
