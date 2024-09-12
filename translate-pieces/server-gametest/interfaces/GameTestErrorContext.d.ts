/* IMPORT */ import { minecraftserver } from '../index';

export interface GameTestErrorContext {
    absolutePosition: minecraftserver.Vector3;
    relativePosition: minecraftserver.Vector3;
    tickCount: number;
}