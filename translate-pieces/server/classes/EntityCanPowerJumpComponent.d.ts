/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当添加此组件时，表示该实体可以像Minecraft中的马一样进行蓄力跳跃。
 * 
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}