/* IMPORT */ import { ActionTypes } from '../index';

/**
 * An action which returns the activation state.
 */
export type StatefulAction = {
    readonly actionType: ActionTypes.StatefulAction;
    readonly onExecute: (active: boolean) => void;
};