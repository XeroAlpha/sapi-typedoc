/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { BlockComponent, InvalidEntityError, Player, RecipeCraftingContext } from '..';

/**
 * Represents a block component that provides access to recipe
 * crafting.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecipeCraftingComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Returns an array of all players currently interacting with
     * this block.
     *
     */
    readonly players: Player[];
    static readonly componentId = 'minecraft:recipe_crafting';
    /**
     * @remarks
     * Gets the recipe crafting context for a player interacting
     * with this block.
     *
     * @param player
     * The player for whom to retrieve the crafting context.
     * @returns
     * The current recipe crafting context for the player, or
     * undefined if the player isn't crafting.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     */
    getCraftingContext(player: Player): RecipeCraftingContext | undefined;
}
