import { BlockSignComponent, BlockComponentTypes, DimensionLocation, RawMessage, RawText } from "@minecraft/server";

function updateSignText(targetLocation: DimensionLocation) {
  const block = targetLocation.dimension.getBlock(targetLocation);
  if (!block) {
    console.warn("Could not find a block at specified location.");
    return;
  }

  const sign = block.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
  if (sign) {
    // RawMessage
    const helloWorldMessage: RawMessage = { text: "Hello World" };
    sign.setText(helloWorldMessage);

    // RawText
    const helloWorldText: RawText = { rawtext: [{ text: "Hello World" }] };
    sign.setText(helloWorldText);

    // Regular string
    sign.setText("Hello World");
  } else {
    console.warn("Could not find a sign component on the block.");
  }
}
