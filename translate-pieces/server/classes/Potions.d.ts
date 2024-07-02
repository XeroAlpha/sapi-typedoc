/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @rc
 * Used for accessing all potion effects, liquids, and
 * modifiers currently available for use within the world.
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * Retrieves a type handle for a specified potion effect id.
     *
     * @returns
     * A type handle wrapping the valid effect id, or undefined for
     * an invalid effect id.
     */
    static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion liquid id.
     *
     * @returns
     * A type handle wrapping the valid liquid id, or undefined for
     * an invalid liquid id.
     */
    static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion modifier id.
     *
     * @returns
     * A type handle wrapping the valid modifier id, or undefined
     * for an invalid modifier id.
     */
    static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}