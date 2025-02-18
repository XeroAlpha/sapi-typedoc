/* IMPORT */ import { InvalidEntityError, NamespaceNameError, PlayerAimAssistSettings, minecraftcommon } from '../index';

/**
 * @beta
 * A container for APIs related to player aim-assist.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * The player's currently active aim-assist settings, or
     * undefined if not active.
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * Sets the player's aim-assist settings.
     *
     * @worldMutation
     *
     * @param settings
     * Aim-assist settings to activate for the player, if undefined
     * aim-assist will be disabled.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}