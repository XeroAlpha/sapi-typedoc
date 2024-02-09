/* IMPORT */ import { GameRule } from '../index';

/**
 * @beta
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    readonly rule: GameRule;
    readonly value: boolean | number;
}