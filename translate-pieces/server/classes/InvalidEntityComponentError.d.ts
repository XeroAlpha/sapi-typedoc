/**
 * @beta
 * This error can occur when accessing components on an entity
 * that doesn't have them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}
