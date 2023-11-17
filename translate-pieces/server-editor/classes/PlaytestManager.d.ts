/* IMPORT */ import { PlaytestGameOptions, PlaytestSessionResult } from '../index';

export class PlaytestManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: PlaytestGameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}