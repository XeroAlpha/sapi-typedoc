/* IMPORT */ import { BlockComponentTypeMap, BlockCustomComponentInstance } from '../index';

export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockCustomComponentInstance;