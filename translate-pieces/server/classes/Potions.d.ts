/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidPotionDeliveryTypeError, InvalidPotionEffectTypeError, ItemStack, PotionDeliveryType, PotionEffectType } from '..';
/* IMPORT */ import { MinecraftPotionDeliveryTypes, MinecraftPotionEffectTypes } from '../../vanilla-data';

/**
 * @rc
 * Used for accessing all potion effect types, delivery types,
 * and creating potions.
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * Retrieves handles for all registered potion delivery types.
     *
     * @returns
     * Array of all registered delivery type handles.
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * Retrieves all type handle for all registered potion effects.
     *
     * @returns
     * Array of all registered effect type handles.
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * Retrieves a type handle for a specified potion delivery id.
     *
     * @returns
     * A type handle wrapping the valid delivery id, or undefined
     * for an invalid delivery id.
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion effect id.
     *
     * @param potionEffectId
     * A valid potion effect id. See
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * A type handle wrapping the valid effect id, or undefined for
     * an invalid effect id.
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * Creates a potion given an effect and delivery type.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidPotionDeliveryTypeError}
     *
     * {@link InvalidPotionEffectTypeError}
     */
    static resolve<
        T extends string = MinecraftPotionEffectTypes,
        U extends string = MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}
