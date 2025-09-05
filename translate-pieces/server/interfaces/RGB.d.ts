/**
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}
