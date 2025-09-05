/* IMPORT */ import { PackSettingChangeAfterEvent } from '..';

/**
 * @beta
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}
