/* IMPORT */ import { EntityType } from '..';
/* IMPORT */ import { MinecraftEntityTypes } from '../../vanilla-data';

/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | MinecraftEntityTypes
    | `${MinecraftEntityTypes}`
    | `${MinecraftEntityTypes}<${string}>`;
