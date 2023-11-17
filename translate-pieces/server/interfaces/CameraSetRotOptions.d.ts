/* IMPORT */ import { CameraEaseOptions, Vector2, Vector3 } from '../index';

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}