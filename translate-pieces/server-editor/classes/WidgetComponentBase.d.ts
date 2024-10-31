/* IMPORT */ import { InvalidWidgetComponentError, Widget, WidgetComponentStateChangeEventData, WidgetComponentType, minecraftserver } from '../index';

export class WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidWidgetComponentError}
     */
    readonly location: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    lockToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    offset: minecraftserver.Vector3;
    readonly valid: boolean;
    visible: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    delete(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetComponentStateChangeEventData) => void): void;
}