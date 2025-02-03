/* IMPORT */ import { KeyProcessingState } from '../index';

/**
 * Key binding that is registered to an input context
 */
export interface IRegisteredKeyBinding {
    /**
     * @remarks
     * Unique identifier for the binding.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Returns current processing state of the binding.
     *
     */
    getProcessingState(): KeyProcessingState;
    /**
     * @remarks
     * Updates how the key input will be processed for this
     * binding. If undefined, it will be consumed.
     *
     * @param newState
     * New binding processing state.
     */
    setProcessingState(newState: KeyProcessingState | undefined): void;
}