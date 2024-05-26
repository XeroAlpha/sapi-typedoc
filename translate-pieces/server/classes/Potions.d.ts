/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 */
export class Potions {
    private constructor();
    static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;
    static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;
    static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}