// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-graphics` module contains APIs to
 * change graphics and rendering settings.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-graphics",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import { EngineError, InvalidArgumentError } from '@minecraft/common';
import { BiomeType, RGB } from '@minecraft/server';
/**
 * Used to affect atmospheric scattering per biome for Vibrant
 * Visuals
 */
export class BiomeAtmospherics {
    private constructor();
    /**
     * @remarks
     * Resets the horizon blend max to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMax(): void;
    /**
     * @remarks
     * Resets the horizon blend mie start to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMieStart(): void;
    /**
     * @remarks
     * Resets the horizon blend min to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMin(): void;
    /**
     * @remarks
     * Resets the horizon blend start to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendStart(): void;
    /**
     * @remarks
     * Resets the moon mie strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonMieStrength(): void;
    /**
     * @remarks
     * Resets the rayleigh strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetRayleighStrength(): void;
    /**
     * @remarks
     * Resets the sky horizon color to the color set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyHorizonColor(): void;
    /**
     * @remarks
     * Resets the sky zenith color to the color set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyZenithColor(): void;
    /**
     * @remarks
     * Resets the sun glare shape to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunGlareShape(): void;
    /**
     * @remarks
     * Resets the sun mie strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunMieStrength(): void;
    /**
     * @remarks
     * Sets the horizon blend max for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMax
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend mie start for atmospheric scattering
     * in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMieStart
     * Either a number (range [0,1.2]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1.2])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMieStart(blendMieStart: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend min for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendMin
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend start for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param blendStart
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the moon mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param moonMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonMieStrength(moonMieStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the rayleigh strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param rayleighStrength
     * Either a number (range [0,11]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,11])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setRayleighStrength(rayleighStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sky horizon color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a number (range
     * [0,1]) to signify a time of day (0.0 and 1.0 are noon, 0.25
     * is sunset, 0.5 is midnight, and 0.75 is sunrise). The value
     * is a RGB triplet
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyHorizonColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the sky zenith color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a float in the
     * range 0-1 to signify a time of day and the value is a RGB
     * triplet
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyZenithColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the sun glare shape for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param sunGlareShape
     * Either a number (range [0,50]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,50])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sun mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @worldMutation
     *
     * @param sunMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunMieStrength(sunMieStrength: number | Record<number, number>): void;
}

/**
 * @remarks
 * Retrieves the BiomeAtmospherics component to control
 * atmoshperic scattering for Vibrant Visuals.
 *
 * @worldMutation
 *
 */
export function getBiomeAtmospherics(biome: BiomeType): BiomeAtmospherics;
