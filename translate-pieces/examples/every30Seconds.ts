import { system, world } from '@minecraft/server';

const intervalRunIdentifier = Math.floor(Math.random() * 10000);

system.runInterval(() => {
    world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
}, 600);
