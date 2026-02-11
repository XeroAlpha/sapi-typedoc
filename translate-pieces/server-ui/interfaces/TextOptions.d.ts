/* IMPORT */ import { Observable } from '..';

/**
 * @beta
 * The options for including a label or header in {@link
 * CustomForm}.
 */
export interface TextOptions {
    /**
     * @remarks
     * Whether or not this label is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}
