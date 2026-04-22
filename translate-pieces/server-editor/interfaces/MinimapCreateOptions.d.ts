/* IMPORT */ import { VectorXZ } from '../../server';
/* IMPORT */ import { MinimapTrackingMode } from '..';

export interface MinimapCreateOptions {
    dataId?: string;
    freeCenter?: VectorXZ;
    trackingMode?: MinimapTrackingMode;
    yLevel?: number;
}
