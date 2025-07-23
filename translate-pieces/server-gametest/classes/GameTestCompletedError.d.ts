/* IMPORT */ import { GameTestCompletedErrorReason } from '../index';

export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: GameTestCompletedErrorReason;
}