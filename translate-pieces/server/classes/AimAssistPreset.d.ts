/* IMPORT */ import { EngineError } from '../../common';

/**
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
     * @throws
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @throws
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
     * @throws {EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @remarks
     * Gets the list of block Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of block Ids.
     * @throws
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * Gets the list of entity Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of entity Ids.
     * @throws
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * Gets the list of entity type families to exclude from aim
     * assist targeting.
     *
     * @returns
     * The array of entity type families.
     * @throws {EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * Gets the per-item aim-assist category Ids.
     *
     * @returns
     * The record mapping item Ids to aim-assist category Ids.
     * @throws
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * Gets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @returns
     * The array of item Ids.
     * @throws
     */
    getLiquidTargetingItems(): string[];
}
