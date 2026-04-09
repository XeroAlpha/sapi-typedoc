/**
 * @beta
 * Thrown after using the /reload command when trying to
 * register a custom dimension that was not previously
 * registered. New custom dimensions cannot be added during a
 * reload.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}
