const form = new ActionFormData()
  .title("Months")
  .body("Choose your favorite month!")
  .button("January")
  .button("February")
  .button("March")
  .button("April")
  .button("May");

form.show(players[0]).then((response) => {
  if (response.selection === 3) {
    dimension.runCommand("say I like April too!");
  }
});
