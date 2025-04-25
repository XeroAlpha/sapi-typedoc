/* IMPORT */ import { ImageAnimationData } from '../index';

/**
 * Properties required to create an Action Bar item.
 */
export interface IActionBarItemCreationParams {
    /**
     * @remarks
     * Initial enabled state of the item. If not defined, default
     * is true.
     *
     */
    enabled?: boolean;
    /**
     * @remarks
     * Sets whether the Action Bar Item's execute is run when it is
     * added to the Action Bar. If not defined, default is false.
     *
     */
    executeOnAdd?: boolean;
    /**
     * @remarks
     * Icon resource for the item.
     *
     */
    icon: string;
    /**
     * @remarks
     * Animation data for sprite sheet icon image
     *
     */
    iconAnimation?: ImageAnimationData;
    /**
     * @remarks
     * Text label for item.
     *
     */
    label: string;
    /**
     * @remarks
     * Tooltip description for the item.
     *
     */
    tooltipDescription?: string;
    /**
     * @remarks
     * Tooltip title for the item.
     *
     */
    tooltipTitle?: string;
}