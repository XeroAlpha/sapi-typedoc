/* IMPORT */ import { IPropertyItemOptionsBase, LocalizedString, TagContainerVariant } from '..';

/**
 * Optional properties for Tag Container property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITagContainerPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * This callback is called when a tag is added.
     *
     */
    onTagAdded?: (tag: string) => void;
    /**
     * @remarks
     * This callback is called when a tag is removed.
     *
     */
    onTagRemoved?: (tag: string) => void;
    /**
     * @remarks
     * Initial tags for the container.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * Available tags pool to select from.
     *
     */
    tagsPool?: string[];
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Visual variant of the tag container. If undefined, it will
     * default to Inverted.
     *
     */
    variant?: TagContainerVariant;
}
