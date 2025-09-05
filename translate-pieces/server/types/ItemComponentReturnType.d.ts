/* IMPORT */ import { ItemComponentTypeMap, ItemCustomComponentInstance } from '..';

export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;
