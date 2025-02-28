/* IMPORT */ import { ItemComponent, ItemComponentTypeMap } from '../index';

/**
 * @rc
 */
export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemComponent;