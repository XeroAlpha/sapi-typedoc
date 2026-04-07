import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const playerList = world.getPlayers();

  if (playerList.length >= 1) {
    const form = new ActionFormData()
      .title("Test Title")
      .body("Body text here!")
      .button("btn 1")
      .button("btn 2")
      .button("btn 3")
      .button("btn 4")
      .button("btn 5");

    form.show(playerList[0]).then((result: ActionFormResponse) => {
      if (result.canceled) {
        log("Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.");
        return -1;
      } else {
        log("Your result was: " + result.selection);
      }
    });
  }
}
