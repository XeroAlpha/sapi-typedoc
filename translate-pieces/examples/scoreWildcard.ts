import { world } from '@minecraft/server';

// Displays the player's score for objective "obj". Each player will see their own score.
const rawMessage = { score: { name: '*', objective: 'obj' } };
world.sendMessage(rawMessage);
