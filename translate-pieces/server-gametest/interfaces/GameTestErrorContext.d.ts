/* IMPORT */ import { Vector3 } from '../../server';

export interface GameTestErrorContext {
    absolutePosition: Vector3;
    relativePosition: Vector3;
    tickCount: number;
}
