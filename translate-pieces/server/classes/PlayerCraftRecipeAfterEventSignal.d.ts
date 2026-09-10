/* IMPORT */ import { PlayerCraftRecipeAfterEvent, PlayerCraftRecipeEventOptions } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when a player crafts
 * a recipe.
 */
export class PlayerCraftRecipeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player crafts a
     * recipe.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function callback that is called when this event fires.
     * @param options
     * Additional filtering options for the event subscription.
     */
    subscribe(
        callback: (arg0: PlayerCraftRecipeAfterEvent) => void,
        options?: PlayerCraftRecipeEventOptions,
    ): (arg0: PlayerCraftRecipeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player crafts a
     * recipe.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback to remove from the event subscription.
     */
    unsubscribe(callback: (arg0: PlayerCraftRecipeAfterEvent) => void): void;
}
