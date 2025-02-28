/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @worldMutation
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    color?: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radius: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}