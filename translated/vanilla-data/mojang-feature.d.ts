/**
 * All possible MinecraftFeatureTypes
 */
export declare enum MinecraftFeatureTypes {
    AbandonedCampBambooJungle = "minecraft:abandoned_camp_bamboo_jungle",
    AbandonedCampBirchForest = "minecraft:abandoned_camp_birch_forest",
    AbandonedCampCherryGrove = "minecraft:abandoned_camp_cherry_grove",
    AbandonedCampDappledForest = "minecraft:abandoned_camp_dappled_forest",
    AbandonedCampExtremeHillsPlusTrees = "minecraft:abandoned_camp_extreme_hills_plus_trees",
    AbandonedCampFlowerForest = "minecraft:abandoned_camp_flower_forest",
    AbandonedCampPaleGarden = "minecraft:abandoned_camp_pale_garden",
    AbandonedCampSwampland = "minecraft:abandoned_camp_swampland",
    AncientCity = "minecraft:ancient_city",
    BastionRemnant = "minecraft:bastion_remnant",
    BuriedTreasure = "minecraft:buried_treasure",
    EndCity = "minecraft:end_city",
    Fortress = "minecraft:fortress",
    Mansion = "minecraft:mansion",
    Mineshaft = "minecraft:mineshaft",
    Monument = "minecraft:monument",
    PillagerOutpost = "minecraft:pillager_outpost",
    RuinedPortal = "minecraft:ruined_portal",
    Ruins = "minecraft:ruins",
    Shipwreck = "minecraft:shipwreck",
    Stronghold = "minecraft:stronghold",
    Temple = "minecraft:temple",
    TrailRuins = "minecraft:trail_ruins",
    TrialChambers = "minecraft:trial_chambers",
    Village = "minecraft:village"
}
/**
 * Union type equivalent of the MinecraftFeatureTypes enum.
 */
export type MinecraftFeatureTypesUnion = keyof typeof MinecraftFeatureTypes;
