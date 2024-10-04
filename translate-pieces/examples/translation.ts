import { world } from '@minecraft/server';

// Displays "First or Second"
const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
world.sendMessage(rawMessage);
