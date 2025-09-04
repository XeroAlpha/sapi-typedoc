/* IMPORT */ import { Plane, RGBA, Vector2, WidgetComponentBase } from '../index';

export class WidgetComponentGrid extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridCount: Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridSize: Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    plane: Plane;
}