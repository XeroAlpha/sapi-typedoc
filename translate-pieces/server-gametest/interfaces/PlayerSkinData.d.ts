/* IMPORT */ import { PersonaArmSize, PlayerPersonaPiece, RGB } from '../index';

/**
 * Data pertaining to a player's configured skin.
 */
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: RGB;
}