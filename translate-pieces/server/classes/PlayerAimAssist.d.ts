/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, NamespaceNameError, PlayerAimAssistSettings } from '..';

/**
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
     * @throws {ArgumentOutOfBoundsError}
     *
     * @throws {EngineError}
     *
     * @throws {Error}
     *
     * @throws {InvalidArgumentError}
     *
     * @throws {InvalidEntityError}
     *
     * @throws {NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}
