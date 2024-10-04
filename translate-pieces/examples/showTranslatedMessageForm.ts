import { world, Player } from '@minecraft/server';
import { MessageFormData, MessageFormResponse } from '@minecraft/server-ui';

function showMessage(player: Player) {
    const messageForm = new MessageFormData()
        .title({ translate: 'permissions.removeplayer' })
        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })
        .button1('Player 1')
        .button2('Player 2');

    messageForm
        .show(player)
        .then((formData: MessageFormResponse) => {
            // player canceled the form, or another dialog was up and open.
            if (formData.canceled || formData.selection === undefined) {
                return;
            }

            console.warn(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
        })
        .catch((error: Error) => {
            console.warn('Failed to show form: ' + error);
        });
};

showMessage(world.getAllPlayers()[0]);
