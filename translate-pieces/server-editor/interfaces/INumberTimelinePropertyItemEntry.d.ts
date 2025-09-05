/* IMPORT */ import { RGBA } from '../../server';

/**
 * Properties of the Number timeline property item entry
 */
export interface INumberTimelinePropertyItemEntry {
    color?: RGBA;
    id: string;
    time: number;
    value: number;
}
