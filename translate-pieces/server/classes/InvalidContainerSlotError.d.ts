/**
 * The container slot is invalid. This can occur when the
 * owning container is destroyed or unloaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}
