/* IMPORT */ import { ProjectExportType, minecraftserver } from '../index';

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimOfDay?: number;
}