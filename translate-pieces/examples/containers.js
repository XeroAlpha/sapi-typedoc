let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location
let rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location

const chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });

let leftChestBlock = defaultDimension.getBlock(leftLocation);
let rightChestBlock = defaultDimension.getBlock(rightLocation);

leftChestBlock.setType(MinecraftBlockTypes.chest);
rightChestBlock.setType(MinecraftBlockTypes.chest);

const rightChestInventoryComp = rightChestBlock.getComponent("inventory");
const leftChestInventoryComp = leftChestBlock.getComponent("inventory");
const chestCartInventoryComp = chestCart.getComponent("inventory");

const rightChestContainer = rightChestInventoryComp.container;
const leftChestContainer = leftChestInventoryComp.container;
const chestCartContainer = chestCartInventoryComp.container;

rightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
test.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");

rightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));
test.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");

test.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);
test.assert(
  rightChestContainer.emptySlotsCount === 25,
  "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount
);

const itemStack = rightChestContainer.getItem(0);
test.assert(itemStack.id === "apple", "Expected apple");
test.assert(itemStack.amount === 10, "Expected 10 apples");
test.assert(itemStack.data === 0, "Expected 0 data");

leftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));

rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald

test.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");
test.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");
test.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");

