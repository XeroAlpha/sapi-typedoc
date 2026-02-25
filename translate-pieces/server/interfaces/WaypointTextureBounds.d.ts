/* IMPORT */ import { WaypointTexture, WaypointTextureSelector } from '..';

/**
 * @beta
 * Defines a texture and the distance range in which it should
 * be displayed. Used within a {@link WaypointTextureSelector}
 * to create distance-based texture switching.
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * The lower distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is greater than
     * this value. Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    lowerBound: number;
    /**
     * @remarks
     * The {@link WaypointTexture} to display within this distance
     * range.
     *
     */
    texture: WaypointTexture;
    /**
     * @remarks
     * The upper distance bound for this texture. The texture is
     * displayed when the distance to the waypoint is less than or
     * equal to this value. If undefined, there is no upper limit.
     * Value must be greater than or equal to 0.
     *
     * Minimum Value: 0
     */
    upperBound?: number;
}
