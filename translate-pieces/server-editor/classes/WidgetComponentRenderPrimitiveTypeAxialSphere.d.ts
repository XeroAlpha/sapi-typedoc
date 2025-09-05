/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
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
    color?: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radius: number;
    constructor(center: Vector3, radius: number, color?: RGBA);
}
