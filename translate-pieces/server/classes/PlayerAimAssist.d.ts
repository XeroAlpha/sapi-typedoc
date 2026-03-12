/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, NamespaceNameError, PlayerAimAssistSettings } from '..';

/**
 * @rc
 * A container for APIs related to player aim-assist.
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
     * {@link ArgumentOutOfBoundsError}
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}
