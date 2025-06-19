/**
 * Base class for downstream Component implementations.
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Identifier of the component.
     *
     */
    readonly typeId: string;
}