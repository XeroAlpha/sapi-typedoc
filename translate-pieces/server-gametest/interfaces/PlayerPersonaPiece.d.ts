/* IMPORT */ import { PersonaPieceType } from '..';

/**
 * Data pertaining to a specific player Persona piece.
 */
export interface PlayerPersonaPiece {
    id: string;
    isDefaultPiece?: boolean;
    packId: string;
    productId: string;
    type: PersonaPieceType;
}
