const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {
  if (eventData.message.includes("cancel")) {
    // Cancel event if the message contains "cancel"
    eventData.canceled = true;
  } else {
    // Modify chat message being sent
    eventData.message = `Modified '${eventData.message}'`;
  }
});
