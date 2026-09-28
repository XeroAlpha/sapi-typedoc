/* IMPORT */ import { BlockEntityStorageComponent } from '..';

/**
 * Contains identifying information about an entity stored in a
 * {@link BlockEntityStorageComponent}. Stored entities are not
 * present in the world until they are released.
 */
export class BlockEntityStorageInfo {
    private constructor();
    /**
     * @remarks
     * The entity's definition ID, such as `minecraft:pig`.
     *
     */
    readonly definitionId: string;
    /**
     * @remarks
     * The unique ID of the stored entity. Use this ID with
     * {@link BlockEntityStorageComponent.release} or
     * {@link BlockEntityStorageComponent.transfer}.
     *
     */
    readonly uniqueId: string;
}
