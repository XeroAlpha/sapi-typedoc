/* IMPORT */ import { WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
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
    label: string;
}