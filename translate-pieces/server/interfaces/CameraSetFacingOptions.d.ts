/* IMPORT */ import { CameraEaseOptions, Entity, Vector3 } from '../index';

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}