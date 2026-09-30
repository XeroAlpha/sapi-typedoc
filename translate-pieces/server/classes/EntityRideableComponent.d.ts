/* IMPORT */ import { Entity, EntityComponent, Seat } from '..';

/**
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @seeExample minibiomes.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws
     */
    readonly interactText: string;
    /**
     * @remarks
     * The max width a mob can be to be a passenger.
     *
     * @throws
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * Number of seats for riders defined for this entity.
     *
     * @throws
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     *
     * @worldMutation
     *
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     *
     * @worldMutation
     *
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     *
     * @worldMutation
     *
     * @throws
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * @throws
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * @throws
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * @throws
     */
    getSeats(): Seat[];
}
