/* IMPORT */ import { ClipboardChangeAfterEventSignal, CurrentThemeChangeAfterEventSignal, CurrentThemeColorChangeAfterEventSignal, CursorPropertyChangeAfterEventSignal, ModeChangeAfterEventSignal, PrimarySelectionChangeAfterEventSignal } from '../index';

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     * @earlyExecution
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}