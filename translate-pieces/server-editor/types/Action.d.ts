/* IMPORT */ import { ContinuousAction, MouseRayCastAction, NoArgsAction, StatefulAction } from '..';

/**
 * Full set of all possible raw actions
 */
export type Action = NoArgsAction | MouseRayCastAction | StatefulAction | ContinuousAction;
