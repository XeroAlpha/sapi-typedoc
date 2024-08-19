/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class GameTestError extends Error {
    private constructor();
    context?: GameTestErrorContext;
    messageParameters: string[];
    type: GameTestErrorType;
}