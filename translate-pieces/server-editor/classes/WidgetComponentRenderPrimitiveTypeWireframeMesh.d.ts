/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, WireframeMeshOptions } from '..';

export class WidgetComponentRenderPrimitiveTypeWireframeMesh extends WidgetComponentRenderPrimitiveTypeBase {
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
    meshId: string;
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
    scale?: Vector3;
    constructor(
        center: Vector3,
        meshId: string,
        color: RGBA,
        options?: WireframeMeshOptions,
    );
}
