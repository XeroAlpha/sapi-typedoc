/* IMPORT */ import { InvalidWidgetComponentError, InvalidWidgetError, WidgetComponentBase, WidgetComponentRenderPrimitiveAxialSphere, WidgetComponentRenderPrimitiveBox, WidgetComponentRenderPrimitiveDisc, WidgetComponentRenderPrimitiveLine } from '../index';

export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(
        primitive:
            | WidgetComponentRenderPrimitiveAxialSphere
            | WidgetComponentRenderPrimitiveBox
            | WidgetComponentRenderPrimitiveDisc
            | WidgetComponentRenderPrimitiveLine,
    ): void;
}