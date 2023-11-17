/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '../index';

export class GameTestError extends Error {
    private constructor();
    context?: GameTestErrorContext;
    messageParameters: string[];
    type: GameTestErrorType;
}