import { world, DimensionLocation } from "@minecraft/server";

function nestedTranslation(targetLocation: DimensionLocation) {
  // Displays "Apple or Coal"
  const rawMessage = {
    translate: "accessibility.list.or.two",
    with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
  };
  world.sendMessage(rawMessage);
}
