/* IMPORT */ import { ExportResult, ProjectExportOptions } from '../index';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: ProjectExportOptions): Promise<ExportResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
}