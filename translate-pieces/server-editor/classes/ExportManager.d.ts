/* IMPORT */ import { ExportResult, GameOptions } from '..';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
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
     * @throws
     */
    getGameVersion(): string;
}
