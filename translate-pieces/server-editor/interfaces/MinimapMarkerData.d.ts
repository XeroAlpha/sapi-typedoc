/* IMPORT */ import { RGBA, Vector3 } from '../../server';

export interface MinimapMarkerData {
    clickable: boolean;
    color: RGBA;
    label: string;
    position: Vector3;
    rotation: number;
    tooltip: string;
}
