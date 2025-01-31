/* IMPORT */ import { EventSink, IRegisteredKeyBinding, IRootPropertyPane, KeyBinding, KeyBindingInfo, ModalToolLifecycleEventPayload, SupportedKeyboardActionTypes, SupportedMouseActionTypes } from '../index';

export interface IModalTool {
    /**
     * @remarks
     * Unique identifier for the tool
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     *
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    bindPropertyPane(pane: IRootPropertyPane): void;
    registerKeyBinding(
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): IRegisteredKeyBinding;
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    unregisterInputBindings(): void;
}