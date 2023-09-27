/**
 * Describes how the cursor targets a point on the screen.
 */
export enum CursorTargetMode {
    /**
     * @remarks
     * Target a nearest block.
     *
     */
    Block = 0,
    /**
     * @remarks
     * Targets the face of a nearest block.
     *
     */
    Face = 1,
}