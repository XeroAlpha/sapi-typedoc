/* IMPORT */ import { BlockComponent, CustomComponentParameters } from '../index';

/**
 * @rc
 * An instance of a custom component on a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}