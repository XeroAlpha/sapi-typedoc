/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { ContiguousSelectionType } from '..';

export interface QuickExtrudeProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    isShrink?: boolean;
    layerCount?: number;
    selectionDirection?: number;
    size?: number;
    startingLocation?: Vector3;
}
