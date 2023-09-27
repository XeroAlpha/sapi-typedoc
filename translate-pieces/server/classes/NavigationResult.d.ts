/**
 * @beta
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
export class NavigationResult {
    private constructor();
    /**
     * @remarks
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     *
     */
    readonly isFullPath: boolean;
    /**
     * @remarks
     * A set of block locations that comprise the navigation route.
     *
     */
    getPath(): Vector3[];
}