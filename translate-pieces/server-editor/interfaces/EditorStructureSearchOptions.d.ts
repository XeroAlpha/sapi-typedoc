/* IMPORT */ import { StructureSource } from '../index';

export interface EditorStructureSearchOptions {
    displayName?: string;
    idPattern?: string;
    includeSources?: StructureSource[];
    includeTags?: string[];
}