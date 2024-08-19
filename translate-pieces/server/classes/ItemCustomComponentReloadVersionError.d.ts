/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component with
 * a newer API version.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}