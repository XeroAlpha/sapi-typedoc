/* IMPORT */ import { ExportResult, GameOptions } from '..';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getGameVersion(): string;
}
