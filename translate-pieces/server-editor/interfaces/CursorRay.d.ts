/* IMPORT */ import { Vector3 } from '../index';

export interface CursorRay {
    end: Vector3;
    hit: boolean;
    start: Vector3;
}