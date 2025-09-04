/* IMPORT */ import { Difficulty, GameMode, ProjectExportType } from '../index';

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: GameMode;
    initialTimOfDay?: number;
}