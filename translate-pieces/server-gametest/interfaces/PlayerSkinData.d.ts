/* IMPORT */ import { RGB } from '../../server';
/* IMPORT */ import { PersonaArmSize, PlayerPersonaPiece } from '..';

/**
 * Data pertaining to a player's configured skin.
 */
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: RGB;
}
