/* IMPORT */ import { MinecraftBlockTypes, MinecraftEntityTypes, MinecraftItemTypes } from '../index';

/**
 * @beta
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * Optional. Default aim-assist category Id used for items not
     * provided to setItemSettings.
     *
     * @worldMutation
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * Optional. Aim-assist category Id used for an empty hand.
     *
     * @worldMutation
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * The unique Id used to register the preset with. Must have a
     * namespace.
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * Constructor that takes a unique Id to associate with the
     * created AimAssistPreset. Must have a namespace.
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * Gets the list of block/entity Ids to exclude from aim assist
     * targeting.
     *
     * @returns
     * The array of block/entity Ids.
     */
    getExcludedTargets(): string[] | undefined;
    /**
     * @remarks
     * Gets the per-item aim-assist category Ids.
     *
     * @returns
     * The record mapping item Ids to aim-assist category Ids.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * Gets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @returns
     * The array of item Ids.
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * Sets the list of block/entity Ids to exclude from aim assist
     * targeting.
     *
     * @worldMutation
     *
     * @param targets
     * An array of block/entity Ids.
     */
    setExcludedTargets(
        targets?: (
            | keyof typeof MinecraftBlockTypes
            | keyof typeof MinecraftEntityTypes
            | string
        )[],
    ): void;
    /**
     * @remarks
     * Sets the per-item aim-assist category Ids.
     *
     * @worldMutation
     *
     * @param itemSettings
     * A record mapping item Ids to aim-assist category Ids.
     * Category Ids must have a namespace.
     */
    setItemSettings(itemSettings: Record<keyof typeof MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * Sets the list of item Ids that will target liquid blocks
     * with aim-assist when being held.
     *
     * @worldMutation
     *
     * @param items
     * An array of item Ids.
     */
    setLiquidTargetingItems(items?: (keyof typeof MinecraftItemTypes | string)[]): void;
}