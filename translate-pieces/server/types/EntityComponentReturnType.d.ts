/* IMPORT */ import { EntityComponent, EntityComponentTypeMap } from '../index';

export type EntityComponentReturnType<T extends string> = T extends keyof EntityComponentTypeMap
    ? EntityComponentTypeMap[T]
    : EntityComponent;