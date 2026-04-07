import { BlockPermutation, BlockSignComponent, SignSide, DyeColor, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const signBlock = targetLocation.dimension.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  if (signComponent) {
    signComponent.setText(`Party Sign!\nThis is green on the front.`);
    signComponent.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
    signComponent.setTextDyeColor(DyeColor.Green);
    signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);

    // players cannot edit sign!
    signComponent.setWaxed(true);
  } else {
    log("Could not find sign component.");
  }
}
