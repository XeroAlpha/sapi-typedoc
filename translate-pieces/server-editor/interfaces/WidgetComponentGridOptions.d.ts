/* IMPORT */ import { Plane, RGBA, Vector2, WidgetComponentBaseOptions } from '../index';

export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
    color?: RGBA;
    gridCount?: Vector2;
    gridSize?: Vector2;
    plane?: Plane;
}