/* IMPORT */ import { InvalidWidgetGroupError, WidgetGroup, WidgetGroupCreateOptions } from '../index';

export class WidgetManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}