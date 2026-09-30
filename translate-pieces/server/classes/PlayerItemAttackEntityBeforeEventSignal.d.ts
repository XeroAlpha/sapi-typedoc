/* IMPORT */ import { PlayerItemAttackEntityBeforeEvent } from '..';

/**
 * Manages callbacks that run before a player attacks an entity
 * through an item interaction.
 */
export class PlayerItemAttackEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that runs before a player attacks an entity
     * through an item interaction.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerItemAttackEntityBeforeEvent) => void,
    ): (arg0: PlayerItemAttackEntityBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from this event signal.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerItemAttackEntityBeforeEvent) => void): void;
}
