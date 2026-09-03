/* IMPORT */ import { EntityComponent, InvalidEntityError, Player } from '..';

/**
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if the entity has no player owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayer?: Player;
    /**
     * @beta
     * @remarks
     * Returns the id of the player that has tamed the entity, or
     * 'undefined' if the entity has no player owner.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:is_tamed';
}
