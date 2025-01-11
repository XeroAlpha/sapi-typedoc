/* IMPORT */ import { AimAssistTargetMode, Vector2 } from '../index';

/**
 * @beta
 * Settings relating to a player's aim-assist targeting.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * The view distance limit to use for aim-assist targeting.
     *
     */
    distance?: number;
    /**
     * @remarks
     * The Id of the aim-assist preset to activate. Must have a
     * namespace.
     *
     */
    presetId: string;
    /**
     * @remarks
     * The mode to use for aim-assist targeting.
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * The view angle limit to use for aim-assist targeting.
     *
     */
    viewAngle?: Vector2;
}