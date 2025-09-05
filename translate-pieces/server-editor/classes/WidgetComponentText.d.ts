/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { WidgetComponentBase } from '..';

export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    color: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    label: string;
}
