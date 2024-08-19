/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @beta
 */
export interface GameTestErrorContext {
    absolutePosition: minecraftserver.Vector3;
    relativePosition: minecraftserver.Vector3;
    tickCount: number;
}