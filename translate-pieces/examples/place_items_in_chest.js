import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";

// Fetch block
const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });

// Make it a chest
block.setType(MinecraftBlockTypes.chest);

// Get the inventory
const inventoryComponent = block.getComponent("inventory");
const inventoryContainer = inventoryComponent.container;

// Set slot 0 to a stack of 10 apples
inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));

