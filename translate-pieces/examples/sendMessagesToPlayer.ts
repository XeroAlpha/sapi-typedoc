import { Player } from "@minecraft/server";

function sendPlayerMessages(player: Player) {
    // Displays "First or Second"
    const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
    player.sendMessage(rawMessage);

    // Displays "Hello, world!"
    player.sendMessage('Hello, world!');

    // Displays "Welcome, Amazing Player 1!"
    player.sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });

    // Displays the player's score for objective "obj". Each player will see their own score.
    const rawMessageWithScore = { score: { name: '*', objective: 'obj' } };
    player.sendMessage(rawMessageWithScore);

    // Displays "Apple or Coal"
    const rawMessageWithNestedTranslations = {
        translate: 'accessibility.list.or.two',
        with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
    };
    player.sendMessage(rawMessageWithNestedTranslations);
}
