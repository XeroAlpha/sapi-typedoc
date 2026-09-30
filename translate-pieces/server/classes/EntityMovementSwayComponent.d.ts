/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
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
     * @throws
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}
