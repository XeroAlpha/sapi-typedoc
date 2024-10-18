import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
