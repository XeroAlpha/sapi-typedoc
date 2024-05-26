/* IMPORT */ import { Entity, EntityComponent } from '../index';

/**
 * @beta
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly canBeStolen: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly hardDistance: number;
    /**
     * @throws This property can throw when used.
     */
    readonly isLeashed: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly leashHolder?: Entity;
    /**
     * @throws This property can throw when used.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @throws This property can throw when used.
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}