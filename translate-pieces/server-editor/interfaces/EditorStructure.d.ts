/* IMPORT */ import { minecraftserver } from '../index';

export interface EditorStructure {
    storageLocation: string;
    structure: minecraftserver.Structure;
    tags: string[];
}