/* IMPORT */ import { ItemType } from '..';

/**
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     *
     */
    static getAll(): ItemType[];
}
