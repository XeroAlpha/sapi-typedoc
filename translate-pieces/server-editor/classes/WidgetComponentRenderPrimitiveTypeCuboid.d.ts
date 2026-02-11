/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeCuboid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    alpha?: number;
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
    lengthX: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lengthY: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lengthZ: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation?: Vector3;
    constructor(
        center: Vector3,
        lengthX: number,
        lengthY: number,
        lengthZ: number,
        color: RGBA,
        rotation?: Vector3,
        alpha?: number,
    );
}
