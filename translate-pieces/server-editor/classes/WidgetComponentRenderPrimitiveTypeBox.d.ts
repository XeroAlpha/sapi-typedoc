/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    size?: minecraftserver.Vector3;
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}