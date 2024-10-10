/* IMPORT */ import { InputMode, InvalidEntityError } from '../index';

/**
 * @beta
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * The last input mode used by the player.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
}