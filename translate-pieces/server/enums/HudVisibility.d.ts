/**
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 */
export enum HudVisibility {
    /**
     * @remarks
     * Specifies that this HUD element should be hidden.
     *
     */
    Hide = 0,
    /**
     * @remarks
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     *
     */
    Reset = 1,
}
