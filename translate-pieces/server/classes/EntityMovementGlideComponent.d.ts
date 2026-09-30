/* IMPORT */ import { EntityBaseMovementComponent } from '..';

/**
 * When added, this movement control allows the mob to glide.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}
