/* IMPORT */ import { Difficulty, GameMode } from '../../server';
/* IMPORT */ import { ProjectExportType } from '..';

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: GameMode;
    initialTimOfDay?: number;
}
