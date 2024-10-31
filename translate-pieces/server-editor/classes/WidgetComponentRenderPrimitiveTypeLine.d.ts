/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
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
    end: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    start: minecraftserver.Vector3;
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}