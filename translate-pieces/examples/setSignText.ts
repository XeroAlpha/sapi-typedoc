import {
    BlockComponentTypes,
    DimensionLocation,
    RawMessage,
    RawText,
} from '@minecraft/server';

// Function which updates a sign blocks text to raw text
function updateSignText(signLocation: DimensionLocation) {
    const block = signLocation.dimension.getBlock(signLocation);
    if (!block) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const sign = block.getComponent(BlockComponentTypes.Sign);
    if (sign) {
        // RawMessage
        const helloWorldMessage: RawMessage = { text: 'Hello World' };
        sign.setText(helloWorldMessage);

        // RawText
        const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
        sign.setText(helloWorldText);

        // Regular string
        sign.setText('Hello World');
    } else {
        console.warn('Could not find a sign component on the block.');
    }
}
