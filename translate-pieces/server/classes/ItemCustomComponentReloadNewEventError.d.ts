/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component that
 * handles a new event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}
