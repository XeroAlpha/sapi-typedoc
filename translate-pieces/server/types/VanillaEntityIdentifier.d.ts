/* IMPORT */ import { EntityType } from '..';
/* IMPORT */ import { MinecraftEntityTypes } from '../../vanilla-data';

export type VanillaEntityIdentifier =
    | EntityType
    | MinecraftEntityTypes
    | `${MinecraftEntityTypes}`
    | `${MinecraftEntityTypes}<${string}>`;
