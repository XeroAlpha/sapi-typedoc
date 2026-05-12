/* IMPORT */ import { RGBA, Vector3 } from '../../server';

export interface GuidePlane {
    fillColor: RGBA;
    normal: Vector3;
    origin: Vector3;
    outlineColor: RGBA;
    planeId: string;
    visible: boolean;
}
