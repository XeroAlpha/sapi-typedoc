test.assertBlockState(buttonPos, (block) => {
  return block.permutation.getProperty("button_pressed_bit") == 0;
});
