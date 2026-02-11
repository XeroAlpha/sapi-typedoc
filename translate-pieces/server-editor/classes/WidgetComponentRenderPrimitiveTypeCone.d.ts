/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase } from '..';

export class WidgetComponentRenderPrimitiveTypeCone extends WidgetComponentRenderPrimitiveTypeBase {
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
    numSegments?: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radiusX: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radiusZ: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation?: Vector3;
    constructor(
        center: Vector3,
        radiusX: number,
        radiusZ: number,
        height: number,
        color: RGBA,
        numSegments?: number,
        rotation?: Vector3,
        alpha?: number,
    );
}
