/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { BiomeType, RGB } from '../../server';

/**
 * Used to affect atmospheric scattering for Vibrant Visuals
 */
export class Atmospherics {
    private constructor();
    /**
     * @remarks
     * Resets the horizon blend max to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend max overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMax(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend mie start to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend mie start overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMieStart(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend min to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend min overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendMin(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend start to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend start overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetHorizonBlendStart(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the moon mie strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * moon mie strength overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonMieStrength(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the rayleigh strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * rayleigh strength overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetRayleighStrength(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the sky horizon color to the color set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sky
     * horizon color overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyHorizonColor(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the sky zenith color to the color set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sky
     * zenith color overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyZenithColor(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the sun glare shape to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sun
     * glare shape overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunGlareShape(biomeIdentifier: BiomeType): void;
    /**
     * @remarks
     * Resets the sun mie strength to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sun
     * mie strength overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunMieStrength(biomeIdentifier: BiomeType): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend max will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>, biomeIdentifier: BiomeType): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend mie start will be set
     * for the specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMieStart(
        blendMieStart: number | Record<number, number>,
        biomeIdentifier: BiomeType,
    ): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend min will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>, biomeIdentifier: BiomeType): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend start will be set for
     * the specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>, biomeIdentifier: BiomeType): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The moon mie strength will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonMieStrength(
        moonMieStrength: number | Record<number, number>,
        biomeIdentifier: BiomeType,
    ): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The rayleigh strength will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setRayleighStrength(
        rayleighStrength: number | Record<number, number>,
        biomeIdentifier: BiomeType,
    ): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The sky horizon color will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyHorizonColor(
        color: Record<number, RGB> | RGB,
        biomeIdentifier: BiomeType,
    ): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The sky zenith color will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyZenithColor(
        color: Record<number, RGB> | RGB,
        biomeIdentifier: BiomeType,
    ): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The sun glare shape will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>, biomeIdentifier: BiomeType): void;
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
     * @param biomeIdentifier
     * Biome Identifier. The sun mie will be set for the specified
     * biome.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunMieStrength(
        sunMieStrength: number | Record<number, number>,
        biomeIdentifier: BiomeType,
    ): void;
}
