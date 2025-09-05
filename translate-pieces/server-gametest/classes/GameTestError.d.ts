/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '..';

export class GameTestError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    context?: GameTestErrorContext;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    messageParameters: string[];
    /**
     * @remarks
     * @earlyExecution
     *
     */
    type: GameTestErrorType;
}
