/* IMPORT */ import { EntityHealCause } from '..';

/**
 * @beta
 * Provides information about how healing has been applied to
 * an entity.
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * Cause enumerator of the source of healing.
     *
     */
    readonly cause: EntityHealCause;
}
