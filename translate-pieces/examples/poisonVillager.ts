// Spawns a villager and gives it the poison effect
import {
    DimensionLocation,
} from '@minecraft/server';
import { MinecraftEffectTypes } from '@minecraft/vanilla-data';

function spawnPoisonedVillager(location: DimensionLocation) {
    const villagerType = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
    const villager = location.dimension.spawnEntity(villagerType, location);
    const duration = 20;

    villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
}

