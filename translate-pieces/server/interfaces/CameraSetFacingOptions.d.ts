/* IMPORT */ import { EaseOptions, Entity, Vector3 } from '../index';

export interface CameraSetFacingOptions {
    easeOptions?: EaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}