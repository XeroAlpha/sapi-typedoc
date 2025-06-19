/* IMPORT */ import { ClipboardItem, EditorStructure, EditorStructureSearchOptions, minecraftserver } from '../index';

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createEmpty(id: string, size: minecraftserver.Vector3): EditorStructure;
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
    deleteStructure(id: string): void;
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
    getOrCreateStructure(id: string): EditorStructure;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}