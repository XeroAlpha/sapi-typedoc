/* IMPORT */ import { WidgetStateChangeEventData } from '../index';

export interface WidgetCreateOptions {
    initialVisibility?: boolean;
    isSelectable?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
}