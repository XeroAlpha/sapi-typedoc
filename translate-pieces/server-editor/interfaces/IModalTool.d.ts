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
    /**
     * @remarks
     * Binds a property pane to the tool. When the tool is
     * selected, the pane's visibility updates. Only one pane can
     * be bound at a time.
     *
     * @param pane
     * Root pane associated with the modal tool
     */
    bindPropertyPane(pane: IRootPropertyPane): void;
    /**
     * @remarks
     * Register a key press binding for an action which will be
     * handled by the tool input context.
     *
     * @param action
     * Action to register the binding for.
     * @param binding
     * Keyboard binding to invoke action.
     * @param info
     * Additional information about key binding.
     */
    registerKeyBinding(
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): IRegisteredKeyBinding;
    /**
     * @remarks
     * Register an action to be called when mouse left/middle/right
     * buttons are pressed or released.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Register an action to be called when mouse is dragged while
     * left mouse button is down.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Register an action to be called when mouse wheel is
     * scrolled.
     *
     * @param action
     * Action to register the binding for.
     */
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    /**
     * @remarks
     * Unregister all input binding for this tool.
     *
     */
    unregisterInputBindings(): void;
}