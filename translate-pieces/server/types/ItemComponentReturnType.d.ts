/* IMPORT */ import { ItemComponentTypeMap, ItemCustomComponentInstance } from '../index';

export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;