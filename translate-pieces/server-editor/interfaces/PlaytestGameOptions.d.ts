/* IMPORT */ import { minecraftserver } from '../index';

export interface PlaytestGameOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    gameMode?: minecraftserver.GameMode;
    showCoordinates?: boolean;
    spawnPosition?: minecraftserver.Vector3;
    timeOfDay?: number;
    weather?: number;
}