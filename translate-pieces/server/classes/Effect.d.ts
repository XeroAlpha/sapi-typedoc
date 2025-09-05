/**
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
}
