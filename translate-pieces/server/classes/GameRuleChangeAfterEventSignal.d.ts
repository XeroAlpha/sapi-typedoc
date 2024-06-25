/* IMPORT */ import { GameRuleChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world.gameRules
     * property is changed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
}