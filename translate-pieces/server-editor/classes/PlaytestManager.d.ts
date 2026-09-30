/* IMPORT */ import { GameOptions, PlaytestSessionResult } from '..';

export class PlaytestManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}
