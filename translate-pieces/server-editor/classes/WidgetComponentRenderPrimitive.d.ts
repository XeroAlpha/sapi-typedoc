/* IMPORT */ import { InvalidWidgetComponentError, InvalidWidgetError, PrimitiveType, WidgetComponentBase, WidgetComponentRenderPrimitiveTypeAxialSphere, WidgetComponentRenderPrimitiveTypeBox, WidgetComponentRenderPrimitiveTypeCone, WidgetComponentRenderPrimitiveTypeCuboid, WidgetComponentRenderPrimitiveTypeCylinder, WidgetComponentRenderPrimitiveTypeDisc, WidgetComponentRenderPrimitiveTypeEllipsoid, WidgetComponentRenderPrimitiveTypeLine, WidgetComponentRenderPrimitiveTypePyramid, WidgetComponentRenderPrimitiveTypeWireframeMesh } from '..';

export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws {InvalidWidgetComponentError}
     *
     * @throws {InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     *
     * @throws {InvalidWidgetError}
     */
    setPrimitive(
        primitive:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeCone
            | WidgetComponentRenderPrimitiveTypeCuboid
            | WidgetComponentRenderPrimitiveTypeCylinder
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeEllipsoid
            | WidgetComponentRenderPrimitiveTypeLine
            | WidgetComponentRenderPrimitiveTypePyramid
            | WidgetComponentRenderPrimitiveTypeWireframeMesh,
    ): void;
}
