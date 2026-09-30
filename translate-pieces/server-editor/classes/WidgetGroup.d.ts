/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetGroupError, Widget, WidgetCreateOptions } from '..';

export class WidgetGroup {
    private constructor();
    /**
     * @throws {InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visible: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visibleBounds: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    createWidget(location: Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks
     * @worldMutation
     *
     */
    delete(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}
