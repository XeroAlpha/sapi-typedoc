/**
 * All possible MinecraftEffectTypes
 */
export declare enum MinecraftEffectTypes {
    /** 伤害吸收。 */
    Absorption = "absorption",
    /** 不祥之兆。 */
    BadOmen = "bad_omen",
    /** 失明。 */
    Blindness = "blindness",
    /** 潮涌能量。 */
    ConduitPower = "conduit_power",
    /** 黑暗。 */
    Darkness = "darkness",
    Empty = "empty",
    /** 中毒（致命）。 */
    FatalPoison = "fatal_poison",
    /** 抗火。 */
    FireResistance = "fire_resistance",
    /** 急迫。 */
    Haste = "haste",
    /** 生命提升。 */
    HealthBoost = "health_boost",
    /** 饥饿。 */
    Hunger = "hunger",
    /** 寄生。 */
    Infested = "infested",
    /** 瞬间伤害。 */
    InstantDamage = "instant_damage",
    /** 瞬间治疗。 */
    InstantHealth = "instant_health",
    /** 隐身。 */
    Invisibility = "invisibility",
    /** 跳跃提升。 */
    JumpBoost = "jump_boost",
    /** 飘浮。 */
    Levitation = "levitation",
    /** 挖掘疲劳。 */
    MiningFatigue = "mining_fatigue",
    /** 反胃。 */
    Nausea = "nausea",
    /** 夜视。 */
    NightVision = "night_vision",
    /** 渗浆。 */
    Oozing = "oozing",
    /** 中毒。 */
    Poison = "poison",
    /** 袭击之兆。 */
    RaidOmen = "raid_omen",
    /** 生命恢复。 */
    Regeneration = "regeneration",
    /** 抗性提升。 */
    Resistance = "resistance",
    /** 饱和。 */
    Saturation = "saturation",
    /** 缓降。 */
    SlowFalling = "slow_falling",
    /** 缓慢。 */
    Slowness = "slowness",
    /** 迅捷。 */
    Speed = "speed",
    /** 力量。 */
    Strength = "strength",
    /** 试炼之兆。 */
    TrialOmen = "trial_omen",
    /** 村庄英雄。 */
    VillageHero = "village_hero",
    /** 水下呼吸。 */
    WaterBreathing = "water_breathing",
    /** 虚弱。 */
    Weakness = "weakness",
    /** 盘丝。 */
    Weaving = "weaving",
    /** 蓄风。 */
    WindCharged = "wind_charged",
    /** 凋零。 */
    Wither = "wither"
}
/**
 * Union type equivalent of the MinecraftEffectTypes enum.
 */
export type MinecraftEffectTypesUnion = keyof typeof MinecraftEffectTypes;
