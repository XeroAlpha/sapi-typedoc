/**
 * @beta
 * Thrown when trying to register a world clock outside of the
 * system startup event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockInvalidRegistryError extends Error {
    private constructor();
}
