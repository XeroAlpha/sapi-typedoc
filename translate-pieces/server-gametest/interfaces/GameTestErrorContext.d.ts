/* IMPORT */ import { Vector3 } from '../index';

export interface GameTestErrorContext {
    absolutePosition: Vector3;
    relativePosition: Vector3;
    tickCount: number;
}