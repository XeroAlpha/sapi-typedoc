/* IMPORT */ import { IPropertyItemBase, LocalizedString, TagContainerVariant } from '..';

/**
 * A property item which supports Tag Container properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITagContainerPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current tags value of the property item.
     *
     */
    readonly tags: ReadonlyArray<string>;
    /**
     * @remarks
     * Current tags pool value of the property item.
     *
     */
    readonly tagsPool: ReadonlyArray<string>;
    /**
     * @remarks
     * Adds a tag to the current tags.
     *
     * @param tag
     * Tag to add.
     */
    addTag(tag: string): void;
    /**
     * @remarks
     * Adds a tag to the tags pool.
     *
     * @param tag
     * Tag to add to the pool.
     */
    addTagToPool(tag: string): void;
    /**
     * @remarks
     * Removes a tag from the current tags.
     *
     * @param tag
     * Tag to remove.
     */
    removeTag(tag: string): void;
    /**
     * @remarks
     * Removes a tag from the tags pool.
     *
     * @param tag
     * Tag to remove from the pool.
     */
    removeTagFromPool(tag: string): void;
    /**
     * @remarks
     * Updates all tags.
     *
     * @param tags
     * New tags array.
     */
    setTags(tags: string[] | undefined): void;
    /**
     * @remarks
     * Updates the tags pool.
     *
     * @param tagsPool
     * New tags pool array.
     */
    setTagsPool(tagsPool: string[] | undefined): void;
    /**
     * @remarks
     * Set title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Sets the visual variant of the tag container.
     *
     * @param variant
     * New variant.
     */
    setVariant(variant: TagContainerVariant | undefined): void;
}
