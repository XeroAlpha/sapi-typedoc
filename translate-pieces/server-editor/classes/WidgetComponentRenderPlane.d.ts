/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { RenderPlaneGridResolution, WidgetComponentBase } from '..';

export class WidgetComponentRenderPlane extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    fillColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridResolution: RenderPlaneGridResolution;
    /**
     * @remarks
     * @worldMutation
     *
     */
    maxSizeChunks: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normal: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: RGBA;
}
