// Spawns a feather at a location
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeather(location: DimensionLocation) {
    const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
    location.dimension.spawnItem(featherItem, location);
}
