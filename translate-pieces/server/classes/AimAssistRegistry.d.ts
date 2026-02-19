/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { AimAssistCategory, AimAssistCategorySettings, AimAssistPreset, AimAssistPresetSettings, NamespaceNameError } from '..';

/**
 * @rc
 * A container for APIs related to the world's aim-assist
 * settings.
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * The default aim-assist category Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * The default aim-assist preset Id that is used when not
     * otherwise specified.
     *
     */
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    /**
     * @remarks
     * Adds an aim-assist category to the registry.
     *
     * @worldMutation
     *
     * @param category
     * The category settings used to create the new category.
     * @returns
     * The created category handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks
     * Adds an aim-assist preset to the registry.
     *
     * @worldMutation
     *
     * @param preset
     * The preset settings used to create the new preset.
     * @returns
     * The created preset handle.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    /**
     * @remarks
     * Gets all available categories in the registry.
     *
     * @returns
     * An array of all available category objects.
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * Gets the category associated with the provided Id.
     *
     * @worldMutation
     *
     * @returns
     * The category object if it exists, otherwise returns
     * undefined.
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * Gets the preset associated with the provided Id.
     *
     * @worldMutation
     *
     * @param presetId
     * The Id of the preset to retrieve. Must have a namespace.
     * @returns
     * The preset object if it exists, otherwise returns undefined.
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * Gets all available presets in the registry.
     *
     * @returns
     * An array of all available preset objects.
     */
    getPresets(): AimAssistPreset[];
}
