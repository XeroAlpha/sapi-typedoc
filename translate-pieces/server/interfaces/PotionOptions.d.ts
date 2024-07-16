/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 * Options for use in creating potions. See
 * ItemStack.createPotion.
 */
export interface PotionOptions {
    /**
     * @remarks
     * The type of potion effect to create. See
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes.
     *
     */
    effect: PotionEffectType | string;
    /**
     * @remarks
     * Optional potion liquid, defaults to 'Regular'. See
     * @minecraft/vanilla-data.MinecraftPotionLiquidTypes.
     *
     */
    liquid?: PotionLiquidType | string;
    /**
     * @remarks
     * Optional potion modifier, defaults to 'Normal'. See
     * @minecraft/vanilla-data.MinecraftPotionModifierTypes.
     *
     */
    modifier?: PotionModifierType | string;
}