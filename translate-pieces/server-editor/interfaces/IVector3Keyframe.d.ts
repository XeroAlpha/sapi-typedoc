/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { LocalizedString } from '..';

/**
 * A keyframe in a Vector3 Timeline Player entry
 */
export interface IVector3Keyframe {
    id: string;
    name?: LocalizedString;
    time: number;
    value: Vector3;
}
