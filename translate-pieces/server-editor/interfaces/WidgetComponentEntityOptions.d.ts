/* IMPORT */ import { WidgetComponentBaseOptions } from '../index';

export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}