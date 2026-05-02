/* IMPORT */ import { LocalizedString, NoArgsAction, RegisteredAction } from '..';

/**
 * Tooltip action description
 */
export type TooltipButton = {
    text: LocalizedString;
    action: RegisteredAction<NoArgsAction>;
};
