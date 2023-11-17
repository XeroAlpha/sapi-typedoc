/* IMPORT */ import { BlockEvent, Player } from '../index';

/**
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}