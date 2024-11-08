/* IMPORT */ import { WidgetStateChangeEventData, minecraftserver } from '../index';

export interface WidgetCreateOptions {
    bindPositionToBlockCursor?: boolean;
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    lockToSurface?: boolean;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
    visible?: boolean;
}