/* IMPORT */ import { Vector3 } from '../../server';

export interface CursorRay {
    end: Vector3;
    hit: boolean;
    start: Vector3;
}
