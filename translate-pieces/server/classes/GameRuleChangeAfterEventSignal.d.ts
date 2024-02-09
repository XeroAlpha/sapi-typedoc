/* IMPORT */ import { GameRuleChangeAfterEvent } from '../index';

/**
 * @beta
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
}