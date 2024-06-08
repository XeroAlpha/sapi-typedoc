/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * @rc
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}