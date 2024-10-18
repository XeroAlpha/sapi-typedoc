import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showTranslatedMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
