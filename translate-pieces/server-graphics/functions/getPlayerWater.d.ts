/* IMPORT */ import { BiomeType, Player } from '../../server';
/* IMPORT */ import { BiomeWater } from '..';

/**
 * @remarks
 * Retrieves the PlayerWater component to control water for a
 * particular player in Vibrant Visuals. This offers the same
 * controls as BiomeWater, but PlayerWater controls will always
 * take precedence over BiomeWater.
 *
 * @worldMutation
 *
 */
export function getPlayerWater(biome: BiomeType, player: Player): BiomeWater;
