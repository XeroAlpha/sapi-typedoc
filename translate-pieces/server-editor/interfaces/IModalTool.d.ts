/* IMPORT */ import { EventSink, IPropertyPane, KeyBinding, KeyBindingInfo, ModalToolLifecycleEventPayload, SupportedKeyboardActionTypes, SupportedMouseActionTypes } from '../index';

export interface IModalTool {
    /**
     * @remarks
     * Unique ID for the tool
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     *
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    bindPropertyPane(pane: IPropertyPane): void;
    dispose(): void;
    hide(): void;
    registerKeyBinding(action: SupportedKeyboardActionTypes, binding: KeyBinding, info?: KeyBindingInfo): void;
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    show(): void;
    unregisterInputBindings(): void;
}