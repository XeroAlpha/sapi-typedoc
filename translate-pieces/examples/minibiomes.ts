import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
