import { world, DimensionLocation } from "@minecraft/server";

function scoreWildcard(targetLocation: DimensionLocation) {
  // Displays the player's score for objective "obj". Each player will see their own score.
  const rawMessage = { score: { name: "*", objective: "obj" } };
  world.sendMessage(rawMessage);
}
