/* IMPORT */ import { CustomWidget, CustomWidgetCreateOptions, Widget, minecraftserver } from '../index';

export class WidgetGroup {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createCustomWidget(
        customEntityName: string,
        location: minecraftserver.Vector3,
        rotation?: minecraftserver.Vector2,
        options?: CustomWidgetCreateOptions,
    ): CustomWidget;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setIsVisible(isVisible: boolean): void;
}