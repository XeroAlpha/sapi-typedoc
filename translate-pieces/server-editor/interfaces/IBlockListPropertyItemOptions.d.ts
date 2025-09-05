/* IMPORT */ import { IPropertyItemOptionsBase } from '..';

/**
 * Optional properties for Bool property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockListPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: ReadonlyArray<string>, oldValue: ReadonlyArray<string>) => void;
}
