/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * @beta
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}