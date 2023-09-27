/**
 * @beta
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Amplitude of the sway motion.
     *
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}