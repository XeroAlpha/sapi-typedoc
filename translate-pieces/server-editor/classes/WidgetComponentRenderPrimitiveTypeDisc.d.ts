/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
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
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}