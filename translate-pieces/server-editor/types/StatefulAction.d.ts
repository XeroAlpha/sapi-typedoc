/* IMPORT */ import { ActionTypes } from '../index';

/**
 * An action which returns the activation state.
 */
export type StatefulAction = {
    actionType: ActionTypes.StatefulAction;
    readonly onExecute: (active: boolean) => void;
};