/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 */
export interface PotionOptions {
    effect: PotionEffectType | string;
    liquid?: PotionLiquidType | string;
    modifier?: PotionModifierType | string;
}