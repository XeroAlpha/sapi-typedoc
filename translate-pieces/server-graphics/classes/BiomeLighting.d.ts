/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { RGB } from '../../server';

/**
 * Used to affect lighting for Vibrant Visuals
 */
export class BiomeLighting {
    private constructor();
    /**
     * @remarks
     * Resets the ambient color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetAmbientColor(): void;
    /**
     * @remarks
     * Resets the ambient illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetAmbientIlluminance(): void;
    /**
     * @remarks
     * Resets the emissive desaturation to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetEmissiveDesaturation(): void;
    /**
     * @remarks
     * Resets the flash color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetFlashColor(): void;
    /**
     * @remarks
     * Resets the flash illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetFlashIlluminance(): void;
    /**
     * @remarks
     * Resets the moon color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonColor(): void;
    /**
     * @remarks
     * Resets the moon illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetMoonIlluminance(): void;
    /**
     * @remarks
     * Resets the orbital offset to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetOrbitalOffsetDegrees(): void;
    /**
     * @remarks
     * Resets the sky intensity to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSkyIntensity(): void;
    /**
     * @remarks
     * Resets the sun color to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunColor(): void;
    /**
     * @remarks
     * Resets the sun illuminance to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSunIlluminance(): void;
    /**
     * @remarks
     * Sets the ambient color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setAmbientColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the ambient illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setAmbientIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the emissive desaturation for lighting in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setEmissiveDesaturation(value: number): void;
    /**
     * @remarks
     * Sets the flash color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setFlashColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the flash illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setFlashIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the moon color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the moon illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setMoonIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the orbital offset for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setOrbitalOffsetDegrees(degrees: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sky intensity for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSkyIntensity(intensity: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sun color for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunColor(color: Record<number, RGB> | RGB): void;
    /**
     * @remarks
     * Sets the sun illuminance for lighting in Vibrant Visuals
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSunIlluminance(illuminance: number | Record<number, number>): void;
}
