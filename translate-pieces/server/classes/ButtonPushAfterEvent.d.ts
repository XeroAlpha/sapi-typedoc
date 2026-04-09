/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * Contains information related to changes to a button push.
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Optional source that triggered the button push.
     *
     */
    readonly source: Entity;
}
