/* IMPORT */ import { GameMode, Player } from '..';

/**
 * Contains information regarding an event after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The previous game mode before the change.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The current game mode after the change.
     *
     */
    readonly toGameMode: GameMode;
}
