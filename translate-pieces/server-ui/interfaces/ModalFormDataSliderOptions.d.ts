/* IMPORT */ import { minecraftserver } from '../index';

/**
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.slider} to provide
 * additional options for the slider creation.
 */
export interface ModalFormDataSliderOptions {
    /**
     * @remarks
     * The default value for the slider.
     *
     */
    defaultValue?: number;
    /**
     * @remarks
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: minecraftserver.RawMessage | string;
    /**
     * @remarks
     * Defines the increment of values that the slider generates
     * when moved. It will be '1' in case of not providing this.
     *
     */
    valueStep?: number;
}