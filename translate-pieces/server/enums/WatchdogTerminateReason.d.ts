/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 * 
 * 表示看门狗决定终止行为包脚本执行的原因的枚举。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     * 
     * 表示由于脚本无响应（卡死或无限循环），行为包的脚本运行时被终止。
     */
    Hang = 'Hang',
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     * 
     * 表示由于堆栈溢出（长且可能无限的函数调用链），行为包的脚本运行时被终止。
     */
    StackOverflow = 'StackOverflow',
}