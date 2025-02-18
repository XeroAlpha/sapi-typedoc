/* IMPORT */ import { EntityType } from '../index';

/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    [Symbol.iterator](): Iterator<EntityType>;
    /**
     * @remarks
     * @worldMutation
     *
     */
    next(): IteratorResult<EntityType>;
}