/* IMPORT */ import { PortalActivateAfterEvent } from '..';

export class PortalActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PortalActivateAfterEvent) => void): (arg0: PortalActivateAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PortalActivateAfterEvent) => void): void;
}
