/* IMPORT */ import { EntityType, MinecraftEntityTypes } from '../index';

/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | MinecraftEntityTypes
    | `${MinecraftEntityTypes}`
    | `${MinecraftEntityTypes}<${string}>`;