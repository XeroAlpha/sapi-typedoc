/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { ClipboardItem, EditorStructure, EditorStructureSearchOptions } from '..';

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    createEmpty(fullName: string, size: Vector3): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    createFromClipboardItem(item: ClipboardItem, fullName: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    deleteStructure(id: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getExistingTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getStructure(id: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}
