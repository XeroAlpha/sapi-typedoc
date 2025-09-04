/* IMPORT */ import { Plane, WidgetComponentBaseOptions, minecraftserver } from '../index';

export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
    color?: minecraftserver.RGBA;
    gridCount?: minecraftserver.Vector2;
    gridSize?: minecraftserver.Vector2;
    plane?: Plane;
}