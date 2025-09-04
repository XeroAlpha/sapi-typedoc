/* IMPORT */ import { RGBA, Vector3, WidgetComponentRenderPrimitiveTypeBase } from '../index';

export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
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
    radius: number;
    constructor(center: Vector3, radius: number, color: RGBA);
}