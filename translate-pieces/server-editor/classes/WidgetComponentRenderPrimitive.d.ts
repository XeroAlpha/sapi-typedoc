/* IMPORT */ import { InvalidWidgetComponentError, InvalidWidgetError, PrimitiveType, WidgetComponentBase, WidgetComponentRenderPrimitiveTypeAxialSphere, WidgetComponentRenderPrimitiveTypeBox, WidgetComponentRenderPrimitiveTypeDisc, WidgetComponentRenderPrimitiveTypeLine } from '..';

export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(
        primitive:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine,
    ): void;
}
