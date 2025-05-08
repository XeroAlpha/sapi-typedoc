/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Properties of the Number timeline property item entry
 */
export interface INumberTimelinePropertyItemEntry {
    color?: minecraftserver.RGBA;
    id: string;
    time: number;
    value: number;
}