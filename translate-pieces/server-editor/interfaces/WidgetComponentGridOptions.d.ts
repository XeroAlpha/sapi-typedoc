/* IMPORT */ import { RGBA, Vector2 } from '../../server';
/* IMPORT */ import { Plane, WidgetComponentBaseOptions } from '..';

export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
    color?: RGBA;
    gridCount?: Vector2;
    gridSize?: Vector2;
    plane?: Plane;
}
