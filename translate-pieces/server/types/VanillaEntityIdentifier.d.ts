/* IMPORT */ import { EntityType, minecraftvanilladata } from '../index';

/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | minecraftvanilladata.MinecraftEntityTypes
    | `${minecraftvanilladata.MinecraftEntityTypes}`
    | `${minecraftvanilladata.MinecraftEntityTypes}<${string}>`;