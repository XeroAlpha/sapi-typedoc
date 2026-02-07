/* IMPORT */ import { Vector3 } from '../../server';

export interface WidgetComponentBoundingBoxLimit {
    max: Vector3;
    maxBlockVolume?: number;
    min: Vector3;
}
