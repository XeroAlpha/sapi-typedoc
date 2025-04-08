/* IMPORT */ import { AsyncPlayerJoinBeforeEvent } from '../index';

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Add a callback that's ran before a player joins the world.
     * This callback returns a promise and the player won't join
     * until that promise is resolved. If the promise is not
     * resolved within a reasonable time, the player joining will
     * be rejected. If the player joining leaves/disconnects, then
     * the event data's isValid will return false.
     *
     */
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}