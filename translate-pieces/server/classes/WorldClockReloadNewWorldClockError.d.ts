/**
 * @beta
 * Thrown after using the /reload command when trying to
 * register a world clock that was not previously registered.
 * New world clocks cannot be added during a reload.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadNewWorldClockError extends Error {
    private constructor();
}
