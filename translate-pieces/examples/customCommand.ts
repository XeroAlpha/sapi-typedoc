import { world, DimensionLocation } from "@minecraft/server";

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.includes("cancel")) {
      // Cancel event if the message contains "cancel"
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(" ");

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case "echo":
            // Send a modified version of chat message
            world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
            break;
          case "help":
            world.sendMessage(`Available commands: echo <message>`);
            break;
        }
      }
    }
  });
}
