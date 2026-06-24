/* IMPORT */ import { Vector3 } from '../../server';

/**
 * A keyframe in a Vector3 Timeline Player entry
 */
export interface IVector3Keyframe {
    id: string;
    time: number;
    value: Vector3;
}
