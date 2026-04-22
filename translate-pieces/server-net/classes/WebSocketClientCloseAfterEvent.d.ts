/* IMPORT */ import { WebSocketClientCloseReasons } from '..';

export class WebSocketClientCloseAfterEvent {
    private constructor();
    readonly reason: WebSocketClientCloseReasons;
}
