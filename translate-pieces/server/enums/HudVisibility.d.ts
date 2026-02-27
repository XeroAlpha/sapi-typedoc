/**
 * 指定如何处理 HUD 元素的可见性。
 * 
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定 HUD 元素应隐藏。
     * 
     * Specifies that this HUD element should be hidden.
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定 HUD 元素应该被重置到它的初始状态（虽然大多数 HUD 元素应为可见的，
     * 但玩家可以通过设置隐藏某些 HUD 元素。）
     * 
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     *
     */
    Reset = 1,
}
