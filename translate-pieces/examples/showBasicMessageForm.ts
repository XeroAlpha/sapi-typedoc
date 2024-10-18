import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showBasicMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title("Message Form Example")
    .body("This shows a simple example using §o§7MessageFormData§r.")
    .button1("Button 1")
    .button2("Button 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Button 1" : "Button 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
