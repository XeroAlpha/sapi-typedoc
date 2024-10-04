import { Player } from '@minecraft/server';
import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';

function showMessage(player: Player) {
    const messageForm = new MessageFormData()
        .title({ translate: 'permissions.removeplayer' }) // "Remove player"
        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // "Player 1 or Player 2"
        .button1('Player 1')
        .button2('Player 2');

    messageForm
        .show(player)
        .then((formData: MessageFormResponse) => {
            // player canceled the form, or another dialog was up and open.
            if (formData.canceled || formData.selection === undefined) {
                return;
            }

            player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
        })
        .catch((error: Error) => {
            player.sendMessage('Failed to show form: ' + error);
        });
}
