/* IMPORT */ import { RGBA, Vector3, WidgetComponentRenderPrimitiveTypeBase } from '../index';

export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    center: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    size?: Vector3;
    constructor(
        center: Vector3,
        color: RGBA,
        size?: Vector3,
    );
}