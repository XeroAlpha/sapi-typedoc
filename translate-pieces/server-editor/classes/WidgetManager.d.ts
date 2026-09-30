/* IMPORT */ import { WidgetGroup, WidgetGroupCreateOptions } from '..';

export class WidgetManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}
