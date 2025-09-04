/* IMPORT */ import { Plane, WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentGrid extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridCount: minecraftserver.Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    gridSize: minecraftserver.Vector2;
    /**
     * @remarks
     * @worldMutation
     *
     */
    plane: Plane;
}