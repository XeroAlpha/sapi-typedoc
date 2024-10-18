import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length >= 1) {
    const form = new ActionFormData()
      .title("Months")
      .body("Choose your favorite month!")
      .button("January")
      .button("February")
      .button("March")
      .button("April")
      .button("May");

    form.show(players[0]).then((response: ActionFormResponse) => {
      if (response.selection === 3) {
        log("I like April too!");
        return -1;
      }
    });
  }
}
