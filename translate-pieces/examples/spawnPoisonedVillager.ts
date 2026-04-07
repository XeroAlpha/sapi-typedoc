import { DimensionLocation } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

function spawnPoisonedVillager(
    targetLocation: DimensionLocation
) {
  const villagerType = "minecraft:villager_v2<minecraft:ageable_grow_up>";
  const villager = targetLocation.dimension.spawnEntity(villagerType, targetLocation);
  const duration = 20;

  villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
}
