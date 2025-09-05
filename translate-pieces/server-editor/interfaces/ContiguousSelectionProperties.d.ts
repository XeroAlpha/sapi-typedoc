/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { ContiguousSelectionType } from '..';

export interface ContiguousSelectionProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    fullSelectionToleranceLevel?: number;
    isFace?: boolean;
    selectionDirection?: number;
    size?: number;
    startingLocation?: Vector3;
}
