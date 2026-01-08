/* IMPORT */ import { EngineError } from '../../common';

/**
 * @beta
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * Default targeting priority used for block types not found in
     * getBlockPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     *
     * @throws This property can throw when used.
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * The unique Id associated with the category.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws This function can throw errors.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}
