/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeColorGrading } from '..';

/**
 * @remarks
 * Retrieves the PlayerColorGrading component to control color
 * grading for a particular player in Vibrant Visuals. This
 * offers the same controls as BiomeColorGrading, but
 * PlayerColorGrading controls will always take precedence over
 * BiomeColorGrading.
 *
 * @worldMutation
 *
 */
export function getPlayerColorGrading(
    biome: BiomeType,
    player: Player,
): BiomeColorGrading;
