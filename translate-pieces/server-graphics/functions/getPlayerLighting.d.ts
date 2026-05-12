/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeLighting } from '..';

/**
 * @remarks
 * Retrieves the PlayerLighting component to control lighting
 * for a particular player in Vibrant Visuals. This offers the
 * same controls as BiomeLighting, but PlayerLighting controls
 * will always take precedence over BiomeLighting.
 *
 * @worldMutation
 *
 */
export function getPlayerLighting(biome: BiomeType, player: Player): BiomeLighting;
