/**
 * @beta
 * Describes a single banner pattern, which includes a colour
 * and a pattern type.
 */
export class BannerPattern {
    private constructor();
    /**
     * @remarks
     * The color to apply to this banner pattern.
     *
     */
    readonly color: string;
    /**
     * @remarks
     * The pattern type (e.g. gradient, chevron, cross, etc.) to
     * apply to the banner.
     *
     */
    readonly pattern: string;
}
