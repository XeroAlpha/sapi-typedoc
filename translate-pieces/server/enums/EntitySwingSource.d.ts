/* IMPORT */ import { PlayerSwingStartAfterEvent } from '..';

/**
 * @beta
 * Enumerator describing the source of an Entity swing. Sent as
 * part of {@link PlayerSwingStartAfterEvent}
 */
export enum EntitySwingSource {
    /**
     * @remarks
     * Sent when the Entity swings as part of an attack.
     *
     */
    Attack = 'Attack',
    /**
     * @remarks
     * Sent when the Entity swings as part of a build action.
     *
     */
    Build = 'Build',
    /**
     * @remarks
     * Sent when the Entity swings as part of dropping an item.
     *
     */
    DropItem = 'DropItem',
    /**
     * @remarks
     * Sent when the Entity swings as part of an event response.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * Sent when the Entity swings as part of an interaction.
     *
     */
    Interact = 'Interact',
    /**
     * @remarks
     * Sent when the Entity swings as part of a mine action.
     *
     */
    Mine = 'Mine',
    /**
     * @remarks
     * Sent when the Entity swing has no determinable source.
     *
     */
    None = 'None',
    /**
     * @remarks
     * Sent when the Entity swings as part of throwing an item.
     *
     */
    ThrowItem = 'ThrowItem',
    /**
     * @remarks
     * Sent when the Entity swings as part of using an item.
     *
     */
    UseItem = 'UseItem',
}
