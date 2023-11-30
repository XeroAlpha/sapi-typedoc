/* IMPORT */ import { EntityType } from '../index';

/**
 * @beta
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     *
     */
    static get(identifier: string): EntityType | undefined;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     *
     */
    static getAll(): EntityType[];
}