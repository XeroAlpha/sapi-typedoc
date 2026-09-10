/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError } from '../../common';
/* IMPORT */ import { InvalidRecipeError, ItemStack } from '..';

/**
 * @beta
 * Provides access to the slots and recipe of a players active
 * crafting UI ie. stonecutter.
 */
export class RecipeCraftingContext {
    private constructor();
    /**
     * @remarks
     * The amount of addressable input slots for getInputItem and
     * setInputItem.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly inputSlotCount: number;
    /**
     * @remarks
     * Whether this recipe crafting context is valid. Invalidates
     * when the player closes the crafting UI or leaves.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The identifiers of the recipes that are valid for the
     * current input items.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly validRecipes: string[];
    /**
     * @remarks
     * Gets the item in the provided input slot.
     *
     * @param slot
     * The zero-based input slot index.
     * @returns
     * The item stack in the input slot, or undefined if the slot
     * is empty.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     */
    getInputItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * Gets the item produced by the currently selected recipe.
     *
     * @returns
     * The output item stack, or undefined if there is no output.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     */
    getOutputItem(): ItemStack | undefined;
    /**
     * @remarks
     * Sets or clears an item in an input slot.
     *
     * @worldMutation
     *
     * @param slot
     * The zero-based input slot index.
     * @param item
     * The item stack to place in the slot, or undefined to clear
     * the slot.
     * @throws This function can throw errors.
     *
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     */
    setInputItem(slot: number, item?: ItemStack): void;
    /**
     * @remarks
     * Selects a recipe for the current crafting operation.
     *
     * @worldMutation
     *
     * @param recipeId
     * The identifier of a valid recipe to select.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidRecipeError}
     */
    setSelectedRecipe(recipeId: string): void;
}
