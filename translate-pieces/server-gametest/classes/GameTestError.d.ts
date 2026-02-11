/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '..';

export class GameTestError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly context?: GameTestErrorContext;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly messageParameters: string[];
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly type: GameTestErrorType;
}
