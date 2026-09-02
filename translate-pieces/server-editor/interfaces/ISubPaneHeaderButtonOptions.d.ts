/* IMPORT */ import { BasicTooltipContent, ButtonVariant, IObservableProp, LocalizedString } from '..';

/**
 * Header-local options for an icon button in a sub pane
 * header.
 */
export interface ISubPaneHeaderButtonOptions {
    /**
     * @remarks
     * Optional observable driving the enabled state of the button.
     *
     */
    enabled?: IObservableProp<boolean>;
    /**
     * @remarks
     * Required icon. Header buttons are icon-only.
     *
     */
    icon: string;
    /**
     * @remarks
     * Optional narration label.
     *
     */
    narrationLabel?: LocalizedString;
    /**
     * @remarks
     * Optional tooltip.
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * Optional button variant.
     *
     */
    variant?: ButtonVariant;
}
