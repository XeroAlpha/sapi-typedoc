/* IMPORT */ import { CursorPosition, CursorProperties } from '..';

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}
