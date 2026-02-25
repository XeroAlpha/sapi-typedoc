/* IMPORT */ import { MinecraftBlockTypes, MinecraftEntityTypes } from '../../vanilla-data';

/**
 * @beta
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 */
export class AimAssistCategorySettings {
    /**
     * @remarks
     * Optional. Default targeting priority used for block types
     * not provided to setBlockPriorities.
     *
     * @worldMutation
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * Optional. Default targeting priority used for entity types
     * not provided to setEntityPriorities.
     *
     * @worldMutation
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * The unique Id used to register the category with. Must have
     * a namespace.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * Constructor that takes a unique Id to associate with the
     * created AimAssistCategory. Must have a namespace.
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     *
     * @returns
     * The record mapping block tags to their priority settings.
     * Larger numbers have greater priority.
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     *
     * @returns
     * Map entity type families to their priority settings in a
     * Record. Larger numbers have greater priority.
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     * @param blockPriorities
     * A record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * Sets the priority settings used for block targeting.
     *
     * @worldMutation
     *
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     * @param entityPriorities
     * A record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * Sets the priority settings used for entity targeting.
     *
     * @worldMutation
     *
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}
