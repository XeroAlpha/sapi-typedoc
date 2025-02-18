/* IMPORT */ import { NoArgsAction, RegisteredAction } from '../index';

/**
 * All possible button item action types
 */
export type ButtonPropertyItemSupportedActionTypes = (() => void) | RegisteredAction<NoArgsAction>;