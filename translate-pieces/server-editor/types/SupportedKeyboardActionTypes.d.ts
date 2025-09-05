/* IMPORT */ import { ContinuousAction, NoArgsAction, RegisteredAction, StatefulAction } from '..';

/**
 * Full set of all possible keyboard actions
 */
export type SupportedKeyboardActionTypes =
    | RegisteredAction<NoArgsAction>
    | RegisteredAction<StatefulAction>
    | RegisteredAction<ContinuousAction>;
