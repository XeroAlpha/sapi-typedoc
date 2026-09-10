/* IMPORT */ import { Block, ItemStack, Player } from '..';

/**
 * @beta
 * Contains information regarding a player crafting a recipe.
 */
export class PlayerCraftRecipeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block where the recipe was crafted, if applicable.
     *
     */
    readonly block?: Block;
    /**
     * @remarks
     * The item stack crafted by the player.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player who crafted the recipe.
     *
     */
    readonly player: Player;
}
