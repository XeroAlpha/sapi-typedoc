/* IMPORT */ import { EaseOptions, Vector2, Vector3 } from '..';

export interface CameraSetRotOptions {
    easeOptions?: EaseOptions;
    location?: Vector3;
    rotation: Vector2;
}
