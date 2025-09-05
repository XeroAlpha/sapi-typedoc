/* IMPORT */ import { RGB } from '..';

/**
 * Represents a fully customizable color within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
}
