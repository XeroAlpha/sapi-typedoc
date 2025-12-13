/**
 * The error can occur when a block is invalid. This can also
 * occur when accessing components on a block that doesn't have
 * them.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}
