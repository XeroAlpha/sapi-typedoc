/* IMPORT */ import { EngineError } from '../index';

/**
 * @beta
 * Represents a type of potion effect - like healing or
 * leaping.
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * Duration of the effect when applied to an entity in ticks.
     * Undefined means the effect does not expire.
     *
     * @throws This property can throw when used.
     *
     * {@link EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}