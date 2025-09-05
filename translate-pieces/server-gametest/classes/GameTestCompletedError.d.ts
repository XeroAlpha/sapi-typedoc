/* IMPORT */ import { GameTestCompletedErrorReason } from '..';

export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: GameTestCompletedErrorReason;
}
