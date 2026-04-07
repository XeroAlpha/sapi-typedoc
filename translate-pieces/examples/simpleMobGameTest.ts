import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function simpleMobGameTest(test: Test) {
  const attackerId = MinecraftEntityTypes.Fox;
  const victimId = MinecraftEntityTypes.Chicken;

  test.spawn(attackerId, { x: 5, y: 2, z: 5 });
  test.spawn(victimId, { x: 2, y: 2, z: 2 });

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}
register("StarterTests", "simpleMobTest", simpleMobGameTest).maxTicks(400).structureName("gametests:mediumglass");
