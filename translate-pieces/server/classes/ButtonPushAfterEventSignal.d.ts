/* IMPORT */ import { IButtonPushAfterEventSignal } from '../index';

/**
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @example buttonPushEvent.ts
 * ```typescript
 * import { world, ButtonPushAfterEvent, system } from '@minecraft/server';
 *
 * world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     world.sendMessage(
 *         `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
 *     );
 * });
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}