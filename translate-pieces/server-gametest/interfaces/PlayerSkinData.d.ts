/* IMPORT */ import { PersonaArmSize, PlayerPersonaPiece, minecraftserver } from '../index';

/**
 * Data pertaining to a player's configured skin.
 */
export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: minecraftserver.RGB;
}