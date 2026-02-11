/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypePyramid extends WidgetComponentRenderPrimitiveTypeBase {
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
    height: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation?: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    widthX: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    widthZ?: number;
    constructor(
        center: Vector3,
        widthX: number,
        height: number,
        color: RGBA,
        widthZ?: number,
        rotation?: Vector3,
        alpha?: number,
    );
}
