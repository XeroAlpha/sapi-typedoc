/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';

/**
 * Used to affect water for Vibrant Visuals
 */
export class BiomeWater {
    private constructor();
    /**
     * @remarks
     * Resets the CDOM  to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetCDOM(): void;
    /**
     * @remarks
     * Resets the chlorophyll concentration to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetChlorophyll(): void;
    /**
     * @remarks
     * Resets the suspended sediment  to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetSuspendedSediment(): void;
    /**
     * @remarks
     * Resets the wave depth to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesDepth(): void;
    /**
     * @remarks
     * Resets the wave direction increment to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesDirectionIncrement(): void;
    /**
     * @remarks
     * Resets the wave frequency to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesFrequency(): void;
    /**
     * @remarks
     * Resets the wave frequency scaling to the value set by
     * resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesFrequencyScaling(): void;
    /**
     * @remarks
     * Resets the wave mix to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesMix(): void;
    /**
     * @remarks
     * Resets the wave octaves to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesOctaves(): void;
    /**
     * @remarks
     * Resets the wave pull to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesPull(): void;
    /**
     * @remarks
     * Resets the wave shape to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesShape(): void;
    /**
     * @remarks
     * Resets the wave speed to the value set by resource packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesSpeed(): void;
    /**
     * @remarks
     * Resets the wave speed scaling to the value set by resource
     * packs
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    resetWavesSpeedScaling(): void;
    /**
     * @remarks
     * Sets the CDOM for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param cdom
     * A number (range [0,15]). Used to set the CDOM. High
     * concentrations produce yellow to yellow-brown colors, due to
     * CDOM strongly absorbing blue wavelengths. Open oceans
     * typically have little to no CDOM, and thus retain a blue
     * appearance; fresh water sources, like rivers, tend to have
     * higher concentrations.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setCDOM(cdom: number): void;
    /**
     * @remarks
     * Sets the chlorophyll concentration for water in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param chlorophyll
     * A number (range [0,10]). Used to set the chlorophyll
     * concentration. High concentrations produce green colors, due
     * to chlorophyll strongly absorbing blue and red wavelengths.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setChlorophyll(chlorophyll: number): void;
    /**
     * @remarks
     * Sets the suspended sediment for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param suspendedSediment
     * A number (range [0,300]). Used to set the suspended
     * sediment.  High concentrations produce red to red-brown
     * colors, due to suspended sediment strongly absorbing blue
     * and green wavelengths. Suspended sediment, like clay and
     * silt, tend to be concentrated in rivers and can indicate
     * recent floods or sources of pollution.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setSuspendedSediment(suspendedSediment: number): void;
    /**
     * @remarks
     * Sets the wave depth for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesDepth
     * A number (range [0,10]). Used to set the wave depth.
     * Determines how much waves displace the water surface. Larger
     * values will result in deeper waves, whereas smaller values
     * will produce shallower waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesDepth(wavesDepth: number): void;
    /**
     * @remarks
     * Sets the wave direction increment for water in Vibrant
     * Visuals
     *
     * @worldMutation
     *
     * @param wavesDirectionIncrement
     * A number (range [0.0f, 360.0f]). Used to set the wave
     * direction increment. An angle, in degrees, that controls how
     * much the heading changes between each octave.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesDirectionIncrement(wavesDirectionIncrement: number): void;
    /**
     * @remarks
     * Sets the wave frequency for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesFrequency
     * A number (range [0,10]). Used to set the wave frequency.
     * Determines how many waves there are per water block. Can
     * also be thought of as the size of the waves. Larger values
     * will create more tightly packed waves, whereas smaller
     * values will spread waves out over a wider area.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesFrequency(wavesFrequency: number): void;
    /**
     * @remarks
     * Sets the wave frequency scaling for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesFrequencyScaling
     * A number (range [0,2]). Used to set the wave frequency
     * scaling. Specifies how much wave frequency changes between
     * octaves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause frequencies to
     * increase while values less than 1 will cause frequencies to
     * decrease.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesFrequencyScaling(wavesFrequencyScaling: number): void;
    /**
     * @remarks
     * Sets the wave mix for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesMix
     * A number (range [0.0, 1.0]). Used to set the wave mix.
     * Controls how much each octave is blended into the
     * neighboring octave.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesMix(wavesMix: number): void;
    /**
     * @remarks
     * Sets the wave octaves for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesOctaves
     * A number (range [1.0, 10]). Used to set the wave octaves.
     * Determines how many layers of waves to simulate; high values
     * result in more complex waves
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesOctaves(wavesOctaves: number): void;
    /**
     * @remarks
     * Sets the wave pull for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesPull
     * A number (range [-1.0f, 1.0f]). Used to set the wave pull.
     * Controls how much smaller waves are pulled into larger
     * waves. A value of 0 results in no pull. Values larger than 0
     * will pull waves in a standard concave fashion, whereas
     * values less than 0 will pull waves in a convex fashion,
     * resulting in more pillowing waves as opposed to cresting
     * waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesPull(wavesPull: number): void;
    /**
     * @remarks
     * Sets the wave shape for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesShape
     * A number (range [1.0, 10]). Used to set the wave shape.
     * Adjusts the core shape of waves. A value of 1 results in a
     * pure sine wave, whereas values larger than 1 will produce
     * sharper waves.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesShape(wavesShape: number): void;
    /**
     * @remarks
     * Sets the wave speed for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesSpeed
     * A number (range [0.01,10]). Used to set the wave speed.
     * etermines the movement speed of the first wave and the
     * starting value of the Speed Scaling parameter.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesSpeed(wavesSpeed: number): void;
    /**
     * @remarks
     * Sets the wave speed scaling for water in Vibrant Visuals
     *
     * @worldMutation
     *
     * @param wavesSpeedScaling
     * A number (range [0.0,2]). Used to set the wave speed
     * scaling. Controls how much faster each subsequent octave
     * moves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause speeds to increase
     * while values less than 1 will cause speeds to decrease.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     */
    setWavesSpeedScaling(wavesSpeedScaling: number): void;
}
