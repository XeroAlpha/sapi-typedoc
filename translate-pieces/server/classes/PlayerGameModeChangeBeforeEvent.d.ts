/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * @beta
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}