/* IMPORT */ import { ClipboardItem, EditorStructure, EditorStructureSearchOptions } from '../index';

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    loadStructure(location: string, id: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    saveStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}