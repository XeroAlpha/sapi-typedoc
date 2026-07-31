/* IMPORT */ import { ObservableString } from '..';

/**
 * @beta
 * Details of an image to display.
 */
export interface ImageDetails {
    /**
     * @remarks
     * Identifier of the resource pack that provides the imageSrc
     * asset.
     *
     */
    imagePackId: ObservableString | string;
    /**
     * @remarks
     * Path to an image displayed. Loads the image based on the
     * resource pack defined by imagePack.
     *
     */
    imageSrc: ObservableString | string;
}
