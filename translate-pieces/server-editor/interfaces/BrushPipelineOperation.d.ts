/* IMPORT */ import { BrushPipelineOperationType, minecraftserver } from '../index';

export interface BrushPipelineOperation {
    blockTypes: minecraftserver.BlockType[];
    operation: BrushPipelineOperationType;
}