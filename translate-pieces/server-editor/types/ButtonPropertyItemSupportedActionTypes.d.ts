/* IMPORT */ import { NoArgsAction, RegisteredAction } from '..';

/**
 * All possible button item action types
 */
export type ButtonPropertyItemSupportedActionTypes = (() => void) | RegisteredAction<NoArgsAction>;
