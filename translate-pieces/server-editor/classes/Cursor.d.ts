/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { CursorProperties, CursorRay } from '..';

/**
 * The 3D block cursor is controlled through this read only
 * object and provides the Editor some control over the input
 * methods, display properties and positioning of the 3D block
 * cursor within the world.
 * The 3D block cursor is a native object which is constantly
 * calculating a screen/mouse -> world raycast, and recording
 * the resultant block collision position and facing direction.
 * Depending on the properties of the cursor state, this is not
 * always true – the cursor can also be manually manipulated by
 * keyboard input and moved around independently of mouse
 * movement; when the mouse is moved, the block cursor will
 * return to the mouse/world ray intersection point.
 * The cursor can also be set to either block or face mode;
 * block mode represents the block the mouse is pointing at,
 * and face mode represents the adjacent block that the mouse
 * is pointing at (i.e. the block attached to the face of the
 * intersection point).
 * In practical use, each tool when activated grabs the current
 * cursor state object and stores it.  The active tool then
 * sets the current state to represent the functionality of the
 * tool (color, input mode, etc).  When the tool loses focus,
 * it restores the cursor state using the stored state object
 * that was grabbed during activation.
 * The 3D block cursor can also be used to query the current
 * block at which the mouse is pointing (or the current block
 * to which the cursor has been manually moved by the user)
 */
export class Cursor {
    private constructor();
    /**
     * @remarks
     * The face at of the block beneath the 3D block cursor which
     * is intersected by the mouse raycast
     *
     * @throws This property can throw when used.
     */
    readonly faceDirection: number;
    /**
     * @remarks
     * Query whether or not the 3D block cursor is visible or
     * hidden
     *
     * @throws This property can throw when used.
     */
    readonly isVisible: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly maxViewBlockDistance: number;
    /**
     * @remarks
     * Get the world position of the 3D block cursor
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPosition(): Vector3;
    /**
     * @remarks
     * Get a property object which represents the current
     * properties of the 3D block cursor.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getRay(): CursorRay;
    /**
     * @remarks
     * Hide the 3D block cursor from view until the corresponding
     * {@link Cursor.show} function is called
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks
     * Manually offset the 3D block cursor by given amount.
     * Depending on the {@link CursorProperties.controlMode} - this
     * function may have no effect
     *
     * @worldMutation
     *
     * @param offset
     * Amount by which the 3D block cursor should be moved
     * @returns
     * Return the newly modified position (or previous position if
     * movement was restricted)
     * @throws This function can throw errors.
     */
    moveBy(offset: Vector3): Vector3;
    /**
     * @remarks
     * Reset the 3D block cursor to the system default state
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks
     * Set the 3D block cursor properties to a given state
     *
     * @worldMutation
     *
     * @param properties
     * A set of optional parameters within a property state which
     * represent the intended 3D block cursor state
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks
     * Make the 3D block cursor visible on screen
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    show(): void;
}
