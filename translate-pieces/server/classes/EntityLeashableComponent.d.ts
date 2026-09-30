/* IMPORT */ import { Entity, EntityComponent } from '..';

/**
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns true if another entity can 'steal' the leashed
     * entity by attaching their own leash to it.
     *
     * @throws
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * Distance in blocks at which the leash stiffens, restricting
     * movement.
     *
     * @throws
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * Returns true if the entity is leashed.
     *
     * @throws
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * Entity that is holding the leash.
     *
     * @throws
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * Identifier of entity that is holding the leash.
     *
     * @throws
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * Distance in blocks at which the leash breaks.
     *
     * @throws
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     *
     * @worldMutation
     *
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws
     * Throws if the entity to leash to is over the max distance,
     * and if the player is dead or in spectator mode.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * @worldMutation
     *
     * @throws
     */
    unleash(): void;
}
