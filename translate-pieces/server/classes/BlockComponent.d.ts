/* IMPORT */ import { Block, Component } from '../index';

/**
 * 与方块关联的组件的基本类型。
 * 
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     * 
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}