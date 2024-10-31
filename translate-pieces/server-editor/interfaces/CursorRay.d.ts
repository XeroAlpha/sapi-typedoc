/* IMPORT */ import { minecraftserver } from '../index';

export interface CursorRay {
    end: minecraftserver.Vector3;
    hit: boolean;
    start: minecraftserver.Vector3;
}