/* IMPORT */ import { GameRuleChangeAfterEvent } from '..';

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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}
