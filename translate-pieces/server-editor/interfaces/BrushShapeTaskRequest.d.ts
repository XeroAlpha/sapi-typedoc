/* IMPORT */ import { RelativeVolumeListBlockVolume } from '..';

export interface BrushShapeTaskRequest {
    cancel: () => void;
    readonly cancelled: boolean;
    readonly progress: number;
    promise: Promise<RelativeVolumeListBlockVolume>;
}
