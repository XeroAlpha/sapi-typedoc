/* IMPORT */ import { EaseOptions, Entity, Vector3 } from '..';

export interface CameraSetFacingOptions {
    easeOptions?: EaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}
