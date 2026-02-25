/* IMPORT */ import { WaypointTextureBounds } from '..';

/**
 * @beta
 * Defines how waypoint textures change based on distance.
 * Contains a list of texture bounds that determine which
 * texture is displayed at different distance ranges.
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * An array of {@link WaypointTextureBounds} that define which
     * textures are displayed at different distance ranges. The
     * system evaluates these bounds to determine the appropriate
     * texture based on the current distance to the waypoint. The
     * list has a maximum size limit of 16.
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}
