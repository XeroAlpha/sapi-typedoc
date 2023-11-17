/* IMPORT */ import { CameraEaseOptions, Vector3 } from '../index';

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}