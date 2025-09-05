/* IMPORT */ import { InputMode, Player } from '..';

/**
 * Event data for when a player input mode changes.
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The new input mode used by the player.
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * The player that had an input mode change.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The previous input mode used by the player.
     *
     */
    readonly previousInputModeUsed: InputMode;
}
