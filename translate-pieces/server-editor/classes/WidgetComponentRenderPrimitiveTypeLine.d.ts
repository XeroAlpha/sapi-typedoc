/* IMPORT */ import { WidgetComponentRenderPrimitiveTypeBase, minecraftserver } from '../index';

export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
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
    end: minecraftserver.Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    start: minecraftserver.Vector3;
    constructor(
        start: minecraftserver.Vector3,
        end: minecraftserver.Vector3,
        color: minecraftserver.RGBA,
    );
}