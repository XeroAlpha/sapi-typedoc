/* IMPORT */ import { AsyncPlayerJoinBeforeEventSignal } from '..';

export class AdminBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This event is fired before a player joins the world. Unlike
     * other before events, this event is a before event that you
     * can delay several ticks by not resolving the promise
     * returned in the subscribe function. If the promise is
     * rejected, the client is rejected.
     *
     */
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}
