/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeAtmospherics } from '..';

/**
 * @remarks
 * Retrieves the PlayerAtmospherics component to control
 * atmospheric scattering for a particular player in Vibrant
 * Visuals. This offers the same controls as BiomeAtmospherics,
 * but PlayerAtmospherics controls will always take precedence
 * over BiomeAtmospherics.
 *
 * @worldMutation
 *
 */
export function getPlayerAtmospherics(
    biome: BiomeType,
    player: Player,
): BiomeAtmospherics;
