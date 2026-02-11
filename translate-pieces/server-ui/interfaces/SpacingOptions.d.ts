/* IMPORT */ import { CustomForm, Observable } from '..';

/**
 * @beta
 * The options for including a spacer in {@link CustomForm}.
 */
export interface SpacingOptions {
    /**
     * @remarks
     * Whether or not this spacer is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}
