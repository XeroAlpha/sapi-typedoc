/* IMPORT */ import { RGBA, Vector3 } from '../../server';

/**
 * Properties of vector3 timeline property item entry
 */
export interface IVector3TimelinePropertyItemEntry {
    color?: RGBA;
    id: string;
    time: number;
    value: Vector3;
}
