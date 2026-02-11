/* IMPORT */ import { CustomForm, Observable } from '..';

/**
 * @beta
 * The options for including a spacer in {@link CustomForm}.
 */
export interface DividerOptions {
    /**
     * @remarks
     * Whether or not this divider is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}
