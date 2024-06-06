/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * @rc
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}