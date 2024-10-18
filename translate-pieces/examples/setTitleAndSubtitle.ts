import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
