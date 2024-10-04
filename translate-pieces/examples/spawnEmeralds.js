const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1, 0);
const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5, 0);

test.spawnItem(oneEmerald, { x: 3.5, y: 3, z: 1.5 });
test.spawnItem(fiveEmeralds, { x: 1.5, y: 3, z: 1.5 });
