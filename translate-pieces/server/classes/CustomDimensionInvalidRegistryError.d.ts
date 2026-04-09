/**
 * @beta
 * Thrown when trying to register a custom dimension outside of
 * the system startup event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionInvalidRegistryError extends Error {
    private constructor();
}
