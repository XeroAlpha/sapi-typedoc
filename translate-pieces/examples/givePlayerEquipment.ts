import { world, ItemStack, EntityEquippableComponent, EquipmentSlot, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function givePlayerEquipment(
    targetLocation: DimensionLocation
) {
  const players = world.getAllPlayers();

  const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
  const armorStand = players[0].dimension.spawnEntity(MinecraftItemTypes.ArmorStand, armorStandLoc);

  const equipmentCompPlayer = players[0].getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
  if (equipmentCompPlayer) {
    equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
    equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
  }

  const equipmentCompArmorStand = armorStand.getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
  if (equipmentCompArmorStand) {
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
    equipmentCompArmorStand.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
  }
}
