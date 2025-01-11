/* IMPORT */ import { MouseRayCastAction, NoArgsAction, StatefulAction } from '../index';

/**
 * Full set of all possible raw actions
 */
export type Action = NoArgsAction | MouseRayCastAction | StatefulAction;