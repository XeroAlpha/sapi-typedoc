/* IMPORT */ import { RGBA } from '../../server';

/**
 * Properties of color timeline property item entry
 */
export interface IColorTimelinePropertyItemEntry {
    id: string;
    time: number;
    value: RGBA;
}
