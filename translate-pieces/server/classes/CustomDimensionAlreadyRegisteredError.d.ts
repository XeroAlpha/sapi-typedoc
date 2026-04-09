/**
 * @beta
 * Thrown when trying to register a custom dimension with a
 * name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}
