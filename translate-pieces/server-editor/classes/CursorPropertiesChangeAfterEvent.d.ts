/* IMPORT */ import { CursorPosition, CursorProperties } from '../index';

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}