/* IMPORT */ import { ExportResult, GameOptions } from '../index';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getGameOptions(useDefault?: boolean): GameOptions;
}