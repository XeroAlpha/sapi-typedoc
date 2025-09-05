/**
 * The container is invalid. This can occur if the container is
 * missing or deleted.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerError extends Error {
    private constructor();
}
