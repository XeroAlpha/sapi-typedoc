/**
 * @beta
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @beta
     * @remarks
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}