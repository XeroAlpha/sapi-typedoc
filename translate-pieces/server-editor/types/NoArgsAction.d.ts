/* IMPORT */ import { ActionTypes } from '../index';

/**
 * An action which needs no additional client side arguments on
 * execute
 */
export type NoArgsAction = {
    readonly actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};