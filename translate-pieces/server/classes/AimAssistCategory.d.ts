/* IMPORT */ import { EngineError } from '../../common';

/**
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
     * @throws
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     *
     * @throws
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
     * @throws
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     * @throws {EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     * @throws
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     * @throws {EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}
