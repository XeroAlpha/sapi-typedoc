/* IMPORT */ import { CustomForm, Observable, UIRawMessage } from '..';

/**
 * @beta
 * The options for including a slider in {@link CustomForm}.
 */
export interface SliderOptions {
    /**
     * @remarks
     * The description of the slider, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this slider is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * The step size of the slider. For example, if this is 2 and
     * the min is 0 and the max is 10, the only selectable values
     * will be 0, 2, 4, 6, 8, 10.
     *
     */
    step?: Observable<number> | number;
    /**
     * @remarks
     * Whether or not this slider is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}
