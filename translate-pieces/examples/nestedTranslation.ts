import { world } from '@minecraft/server';

// Displays "Apple or Coal"
const rawMessage = {
    translate: 'accessibility.list.or.two',
    with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
};
world.sendMessage(rawMessage);
