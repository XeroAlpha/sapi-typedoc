import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
