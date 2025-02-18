/**
 * The error called when an entity is invalid. This can occur
 * when accessing components on a removed entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the entity that is now invalid.
     *
     */
    id: string;
    /**
     * @remarks
     * The type of the entity that is now invalid.
     *
     */
    type: string;
}