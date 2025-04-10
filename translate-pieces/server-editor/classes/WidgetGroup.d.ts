/* IMPORT */ import { InvalidWidgetGroupError, Widget, WidgetCreateOptions, minecraftserver } from '../index';

export class WidgetGroup {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetGroupError}
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
     * @throws This function can throw errors.
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
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
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}