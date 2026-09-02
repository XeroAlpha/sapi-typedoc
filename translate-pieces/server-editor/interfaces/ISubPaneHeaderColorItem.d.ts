/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ISubPaneHeaderItem } from '..';

/**
 * A color picker in a sub pane header.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPaneHeaderColorItem extends ISubPaneHeaderItem {
    /**
     * @remarks
     * Current color value of the header item.
     *
     */
    readonly value: RGBA;
}
