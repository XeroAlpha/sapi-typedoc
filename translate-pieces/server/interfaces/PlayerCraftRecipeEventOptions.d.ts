/* IMPORT */ import { BlockFilter, EntityFilter, ItemFilter } from '..';

/**
 * Contains options for filtering player craft recipe events.
 */
export interface PlayerCraftRecipeEventOptions {
    /**
     * @remarks
     * Filter for the block where the recipe is crafted.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * Filter for the item crafted by the player.
     *
     */
    itemFilter?: ItemFilter;
    /**
     * @remarks
     * Filter for the player crafting the recipe.
     *
     */
    playerFilter?: EntityFilter;
}
