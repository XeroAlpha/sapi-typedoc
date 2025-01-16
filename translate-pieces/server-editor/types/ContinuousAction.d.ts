/* IMPORT */ import { ActionTypes, ContinuousActionState } from '../index';

/**
 * An action that continues to execute after activation
 */
export type ContinuousAction = {
    readonly actionType: ActionTypes.ContinuousAction;
    readonly onExecute: (state: ContinuousActionState, repeatCount: number) => void;
    repeatDelay?: number;
    repeatInterval?: number;
};