/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
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
    size?: minecraftserver.Vector3;
    constructor(
        center: minecraftserver.Vector3,
        color: minecraftserver.RGBA,
        size?: minecraftserver.Vector3,
    );
}