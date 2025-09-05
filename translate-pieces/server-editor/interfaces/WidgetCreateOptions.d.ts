/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { WidgetCollisionType, WidgetStateChangeEventData } from '..';

export interface WidgetCreateOptions {
    bindPositionToBlockCursor?: boolean;
    collisionOffset?: Vector3;
    collisionRadius?: number;
    collisionType?: WidgetCollisionType;
    lockToSurface?: boolean;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg0: WidgetStateChangeEventData) => void;
    visible?: boolean;
    widgetName?: string;
    worldBoundsMax?: Vector3;
    worldBoundsMin?: Vector3;
}
