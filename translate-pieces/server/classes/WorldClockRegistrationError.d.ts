/* IMPORT */ import { WorldClockRegistry } from '..';

/**
 * @beta
 * Error thrown by {@link WorldClockRegistry.registerClock}
 * when failing to register a world clock.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRegistrationError extends Error {
    private constructor();
}
