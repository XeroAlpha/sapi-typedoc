import { world, DimensionLocation } from "@minecraft/server";

function sendTranslatedMessage(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
}
