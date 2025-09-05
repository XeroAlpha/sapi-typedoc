/* IMPORT */ import { RGBA, Vector2 } from '../../server';
/* IMPORT */ import { Plane, WidgetComponentBase } from '..';

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
