/**
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 * 
 * 枚举，用于指定如何处理HUD元素的可见性。
 */
export enum HudVisibility {
    /**
     * @remarks
     * Specifies that this HUD element should be hidden.
     * 
     * 表示此HUD元素应被隐藏。
     */
    Hide = 0,
    /**
     * @remarks
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     * 
     * 表示此HUD元素应重置为其默认状态（虽然大多数HUD元素是可见的，但某些HUD元素可以通过设置被玩家隐藏）。
     */
    Reset = 1,
}