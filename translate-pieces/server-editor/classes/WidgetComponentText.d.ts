/* IMPORT */ import { WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
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
    label: string;
}