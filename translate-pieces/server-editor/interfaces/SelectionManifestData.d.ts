/* IMPORT */ import { SelectionManifestEntry } from '..';

export interface SelectionManifestData {
    entries: SelectionManifestEntry[];
    generationId: number;
    inProgress: boolean;
    processedBlocks: number;
    progress: number;
    totalBlocks: number;
}
