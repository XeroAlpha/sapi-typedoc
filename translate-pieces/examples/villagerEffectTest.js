test.assertEntityState(
  villagerPos,
  "minecraft:villager_v2",
  (entity) => entity.getEffect(MinecraftEffectTypes.Regeneration).duration > 120
); // At least 6 seconds remaining in the villagers' effect
