/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Properties of color timeline property item entry
 */
export interface IColorTimelinePropertyItemEntry {
    id: string;
    time: number;
    value: minecraftserver.RGBA;
}