import { Player } from '@minecraft/server';
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';

function askFavoriteMonth(player: Player) {
    const form = new ActionFormData()
        .title('Months')
        .body('Choose your favorite month!')
        .button('January')
        .button('February')
        .button('March')
        .button('April')
        .button('May');

    form.show(player).then((response: ActionFormResponse) => {
        if (response.selection === 3) {
            player.sendMessage('I like April too!');
        } else {
            player.sendMessage('Nah, April is the best.');
        }
    });
}
