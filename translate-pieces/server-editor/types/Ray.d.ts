/* IMPORT */ import { Vector3 } from '../../server';

/**
 * Ray representing a direction from a set location. This
 * location typically corresponds to the location of a mouse
 * click performed on the client.
 */
export type Ray = {
    location: Vector3;
    direction: Vector3;
    cursorBlockLocation: Vector3;
    rayHit: boolean;
};
