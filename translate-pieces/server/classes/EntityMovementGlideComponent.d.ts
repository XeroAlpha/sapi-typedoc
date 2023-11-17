/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * @beta
 * When added, this movement control allows the mob to glide.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}