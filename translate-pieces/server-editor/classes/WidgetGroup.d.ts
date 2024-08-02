/* IMPORT */ import { InvalidWidgetError, InvalidWidgetGroupError, Widget, WidgetCreateOptions, minecraftserver } from '../index';

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
     * This property can't be edited in read-only mode.
     *
     */
    visible: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    visibleBounds: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    delete(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}