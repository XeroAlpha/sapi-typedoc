/**
 * An action which needs no additional client side arguments on
 * execute
 */
export type NoArgsAction = {
    actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};