/*
import { world, LocationWaypoint, WaypointTextureSelector, WaypointTexture } from "@minecraft/server"

function sharedWaypoint() {
  const players = world.getAllPlayers();

  if (players.length < 2) {
    console.warn("Need at least 2 players for this example.");
    return;
  }

  const playerA = players[0];
  const playerB = players[1];

  // Create a single waypoint at a specific location
  const textureSelector: WaypointTextureSelector = {
    textureBoundsList: [
      { lowerBound: 0, texture: WaypointTexture.Circle }
    ]
  };

  const waypoint = new LocationWaypoint(
    { dimension: playerA.dimension, x: 100, y: 64, z: 100 },
    textureSelector,
    { red: 1, green: 0, blue: 0 } // Initially red
  );

  // Add the same waypoint to both players' locator bars
  playerA.locatorBar.addWaypoint(waypoint);
  playerB.locatorBar.addWaypoint(waypoint);

  // Change the color - this affects both players
  waypoint.color = { red: 0, green: 1, blue: 0 }; // Now green for both players
}
*/
