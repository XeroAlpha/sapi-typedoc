/* IMPORT */ import { ButtonPushAfterEvent } from '../index';

/**
 * 管理与按钮被按下时相关的回调函数。
 * 
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * 添加一个回调函数，当按钮被按下时将会调用该回调函数。
     * 
     * Adds a callback that will be called when a button is pushed.
     *
     * This function can't be called in read-only mode.
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * 移除一个回调函数，使其不会在按钮被按下时调用。
     * 
     * Removes a callback from being called when a button is pushed.
     *
     * 此函数无法在只读模式下调用。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}