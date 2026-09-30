/* IMPORT */ import { Entity, ItemStack, Player, Vector3 } from '..';

/**
 * Contains information about an attack initiated through a
 * player item interaction before it causes effects. Set cancel
 * to true to prevent the attack.
 */
export class PlayerItemAttackEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The normalized world-space direction used for the attack.
     * For standard client-initiated transaction attacks, this
     * direction is derived from the client-provided hit position
     * and the player's server-side eye position. Other attack
     * paths can provide a server-derived direction. This property
     * is undefined when the attack path does not provide an aim
     * direction.
     *
     */
    readonly aimDirection?: Vector3;
    /**
     * @remarks
     * If set to true, the attack does not cause damage or other
     * authoritative attack effects.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * A snapshot of the item held by the attacking player. This
     * property is undefined when the player holds no item.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player that initiated the attack.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity targeted by the attack.
     *
     */
    readonly target: Entity;
}
