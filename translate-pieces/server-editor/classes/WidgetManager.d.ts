/* IMPORT */ import { InvalidWidgetGroupError, WidgetGroup, WidgetGroupCreateOptions } from '../index';

export class WidgetManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}