/* IMPORT */ import { EngineError } from '../../common';

/**
 * @rc
 * Handle to an aim-assist preset that exists in the
 * world.aimAssist registry.
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * Optional. Default aim-assist category Id used for items not
     * provided to setItemSettings.
     *
     * @throws This property can throw when used.
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @throws This property can throw when used.
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * The unique Id associated with the preset.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * Gets the list of block tags to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of block tags.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @remarks
     * Gets the list of block Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of block Ids.
     * @throws This function can throw errors.
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * Gets the list of entity Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of entity Ids.
     * @throws This function can throw errors.
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * Gets the list of entity type families to exclude from aim
     * assist targeting.
     *
     * @returns
     * The array of entity type families.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * Gets the per-item aim-assist category Ids.
     *
     * @returns
     * The record mapping item Ids to aim-assist category Ids.
     * @throws This function can throw errors.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * Gets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @returns
     * The array of item Ids.
     * @throws This function can throw errors.
     */
    getLiquidTargetingItems(): string[];
}
