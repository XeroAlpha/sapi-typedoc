/**
 * All possible MinecraftEffectTypes
 */
export declare enum MinecraftEffectTypes {
    Absorption = "absorption",
    BadOmen = "bad_omen",
    Blindness = "blindness",
    ConduitPower = "conduit_power",
    Darkness = "darkness",
    Empty = "empty",
    FatalPoison = "fatal_poison",
    FireResistance = "fire_resistance",
    Haste = "haste",
    HealthBoost = "health_boost",
    Hunger = "hunger",
    Infested = "infested",
    InstantDamage = "instant_damage",
    InstantHealth = "instant_health",
    Invisibility = "invisibility",
    JumpBoost = "jump_boost",
    Levitation = "levitation",
    MiningFatigue = "mining_fatigue",
    Nausea = "nausea",
    NightVision = "night_vision",
    Oozing = "oozing",
    Poison = "poison",
    RaidOmen = "raid_omen",
    Regeneration = "regeneration",
    Resistance = "resistance",
    Saturation = "saturation",
    SlowFalling = "slow_falling",
    Slowness = "slowness",
    Speed = "speed",
    Strength = "strength",
    TrialOmen = "trial_omen",
    VillageHero = "village_hero",
    WaterBreathing = "water_breathing",
    Weakness = "weakness",
    Weaving = "weaving",
    WindCharged = "wind_charged",
    Wither = "wither"
}
/**
 * Union type equivalent of the MinecraftEffectTypes enum.
 */
export type MinecraftEffectTypesUnion = keyof typeof MinecraftEffectTypes;
