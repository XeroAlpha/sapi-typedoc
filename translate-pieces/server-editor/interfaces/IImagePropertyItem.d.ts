/* IMPORT */ import { IPropertyItemBase, ImageResourceData } from '..';

/**
 * A property item which supports Image properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IImagePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Height of the image.
     *
     */
    readonly imageHeight: number;
    /**
     * @remarks
     * Width of the image.
     *
     */
    readonly imageWidth: number;
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string | ImageResourceData>;
    /**
     * @remarks
     * Updates the size of the image.
     *
     * @param width
     * New width of the image.
     * @param height
     * New height of the image.
     */
    resizeImage(width: number, height: number): void;
}
