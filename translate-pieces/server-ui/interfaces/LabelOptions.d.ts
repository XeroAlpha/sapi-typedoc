/* IMPORT */ import { CustomForm, Observable } from '..';

/**
 * @beta
 * The options for including a label in {@link CustomForm}.
 */
export interface LabelOptions {
    /**
     * @remarks
     * Whether or not this label is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}
