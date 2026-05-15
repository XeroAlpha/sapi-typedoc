/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { RenderPlaneGridResolution, WidgetComponentBaseOptions } from '..';

export interface WidgetComponentRenderPlaneOptions extends WidgetComponentBaseOptions {
    fillColor?: RGBA;
    gridResolution?: RenderPlaneGridResolution;
    maxSizeChunks?: number;
    normal?: Vector3;
    outlineColor?: RGBA;
}
