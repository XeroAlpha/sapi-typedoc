# Minecraft Script API

Minecraft 脚本 API 文档。

|模块|版本|
| - | - |
|[@minecraft/server](https://www.npmjs.com/package/@minecraft/server)|`1.1.0-beta`|
|[@minecraft/server-admin](https://www.npmjs.com/package/@minecraft/server-admin)|`1.0.0-beta`|
|[@minecraft/server-gametest](https://www.npmjs.com/package/@minecraft/server-gametest)|`1.0.0-beta`|
|[@minecraft/server-net](https://www.npmjs.com/package/@minecraft/server-net)|`1.0.0-beta`|
|[@minecraft/server-ui](https://www.npmjs.com/package/@minecraft/server-ui)|`1.0.0-beta`|

游戏版本号：`1.19.60.26`

通过 [typedoc](https://typedoc.org/) 基于 d.ts 生成。

目前正在翻译中。欢迎[参与翻译](#参与翻译)！

## 参与翻译

项目地址：[XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)

欢迎通过 [Fork & Pull Request](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) 参与此项目！

TSDoc 例子：
```ts
/**
 * 在给定的范围内随机一个整数并返回。
 * 
 * Return a ranged random integer.
 * @param min 范围的下限（含）。
 * @param max
 * 范围的上限（含）。
 * 
 * Maxinum of range.
 * @returns 范围内的随机数。
 * @throws
 * 若 `min > max`，则报错 `"Illegal range"`。
 */
random(min: number, max: number): number;
```
上述例子中 `@param`、`@returns` 称为“标签”。标签后面可以空一格后接文本，也可以换行。

单个标签与之后的文本组成的整体称为“块”。

## 翻译规则

- **保留所有英文原文，即使原文有误**。但不保留 `@throws` 中出现的 “This function can throw errors.”、“This property can throw when used.”。
- 翻译不必遵守与英文原文句意相同的规则。能描述清楚即可。原文中的错误可在翻译中进行修正。
- 对于原文中出现的专有术语，优先使用 [Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki) 上的表述。存疑或不确定的表述可在 Pull Request 时提出。
- 对于每个块，**先中文翻译后英文原文，中间需要空一行**。只有一行的块，标签后可不换行。多行的块，标签后必须直接换行。
- 翻译文本是 Markdown 格式，换行需要空一行。包含代码的部分需要使用反引号括起。英文与中文间需要添加空格（英文与中文标点间不需要）。
- 块中的文本都是完整的句子。都需要以句号或者其他标点符号作为结尾。
- 保留所有标签，但如果在提供参数类型正确的情况下不会出错，则可以移除 `@throws` 标签。
- 所有函数的每个参数均需要 `@param` 标签来描述参数的作用。需要对 `@param` 标签中参数的描述进行翻译或补充。
- 所有有返回值的函数（返回值类型不为 `void`）都需要 `@returns` 标签来描述返回值的作用，即使已在描述中给出。需要对 `@returns` 标签中参数的描述进行翻译或补充。
- 函数可能的报错与发生条件应在 `@throws` 中详细列出。若参数类型正确的情况下不会出错，则可以省略。`@throws` 后面需换行。
- 标签顺序需按照 `@param`（按参数顺序）、`@returns`、`@throws` 的顺序。
- `@example` 不进行翻译。

|常见用语|翻译|备注|
| - | - | - |
|Represents/Describes/Specifies ...|表示……|出现在描述开头，用一个短语来描述功能时，统一翻译为“表示”|
|Contains information ...|描述了……|尽可能在之前加入“表示……”。|
|if true/if set to true|若为 `true`（，则表示……）|仅用于布尔型属性描述|
|identifier|标识符/ID|如果是字符串，使用“标识符”，其他情况使用“ID”。|

## 翻译状态

|状态|描述|
| - | - |
|`未翻译`|尚未翻译，欢迎为这部分条目贡献翻译|
|`不翻译`|尚未翻译且不开放贡献|
|`翻译中`|正在翻译中|
|`未更新`|原文本已经更新，但尚未翻译|
|`暂停中`|未完成翻译，因为译名讨论等原因暂停|
|`已完成`|已完成此部分的翻译|

|模块|进度|
| - | - |
|[@minecraft/server](#minecraftserver)|21/252|
|[@minecraft/server-admin](#minecraftserver-admin)|0/5|
|[@minecraft/server-gametest](#minecraftserver-gametest)|0/9|
|[@minecraft/server-net](#minecraftserver-net)|0/6|
|[@minecraft/server-ui](#minecraftserver-ui)|0/8|

### @minecraft/server

|名称|类型|状态|
| - | - | - |
|[`Direction`](https://projectxero.top/sapi/enums/server.Direction.html)|枚举|已完成|
|[`DisplaySlotId`](https://projectxero.top/sapi/enums/server.DisplaySlotId.html)|枚举|已完成|
|[`EntityDamageCause`](https://projectxero.top/sapi/enums/server.EntityDamageCause.html)|枚举|未翻译|
|[`FluidType`](https://projectxero.top/sapi/enums/server.FluidType.html)|枚举|未翻译|
|[`GameMode`](https://projectxero.top/sapi/enums/server.GameMode.html)|枚举|未翻译|
|[`MessageSourceType`](https://projectxero.top/sapi/enums/server.MessageSourceType.html)|枚举|未翻译|
|[`ObjectiveSortOrder`](https://projectxero.top/sapi/enums/server.ObjectiveSortOrder.html)|枚举|已完成|
|[`ScoreboardIdentityType`](https://projectxero.top/sapi/enums/server.ScoreboardIdentityType.html)|枚举|已完成|
|[`TimeOfDay`](https://projectxero.top/sapi/enums/server.TimeOfDay.html)|枚举|未翻译|
|[`WatchdogTerminateReason`](https://projectxero.top/sapi/enums/server.WatchdogTerminateReason.html)|枚举|未翻译|
|[`BeforeChatEvent`](https://projectxero.top/sapi/classes/server.BeforeChatEvent.html)|类|未翻译|
|[`BeforeChatEventSignal`](https://projectxero.top/sapi/classes/server.BeforeChatEventSignal.html)|类|未翻译|
|[`BeforeDataDrivenEntityTriggerEvent`](https://projectxero.top/sapi/classes/server.BeforeDataDrivenEntityTriggerEvent.html)|类|未翻译|
|[`BeforeDataDrivenEntityTriggerEventSignal`](https://projectxero.top/sapi/classes/server.BeforeDataDrivenEntityTriggerEventSignal.html)|类|未翻译|
|[`BeforeExplosionEvent`](https://projectxero.top/sapi/classes/server.BeforeExplosionEvent.html)|类|未翻译|
|[`BeforeExplosionEventSignal`](https://projectxero.top/sapi/classes/server.BeforeExplosionEventSignal.html)|类|未翻译|
|[`BeforeItemDefinitionEventSignal`](https://projectxero.top/sapi/classes/server.BeforeItemDefinitionEventSignal.html)|类|未翻译|
|[`BeforeItemDefinitionTriggeredEvent`](https://projectxero.top/sapi/classes/server.BeforeItemDefinitionTriggeredEvent.html)|类|未翻译|
|[`BeforeItemUseEvent`](https://projectxero.top/sapi/classes/server.BeforeItemUseEvent.html)|类|未翻译|
|[`BeforeItemUseEventSignal`](https://projectxero.top/sapi/classes/server.BeforeItemUseEventSignal.html)|类|未翻译|
|[`BeforeItemUseOnEvent`](https://projectxero.top/sapi/classes/server.BeforeItemUseOnEvent.html)|类|未翻译|
|[`BeforeItemUseOnEventSignal`](https://projectxero.top/sapi/classes/server.BeforeItemUseOnEventSignal.html)|类|未翻译|
|[`BeforePistonActivateEvent`](https://projectxero.top/sapi/classes/server.BeforePistonActivateEvent.html)|类|未翻译|
|[`BeforePistonActivateEventSignal`](https://projectxero.top/sapi/classes/server.BeforePistonActivateEventSignal.html)|类|未翻译|
|[`BeforeWatchdogTerminateEvent`](https://projectxero.top/sapi/classes/server.BeforeWatchdogTerminateEvent.html)|类|未翻译|
|[`BeforeWatchdogTerminateEventSignal`](https://projectxero.top/sapi/classes/server.BeforeWatchdogTerminateEventSignal.html)|类|未翻译|
|[`Block`](https://projectxero.top/sapi/classes/server.Block.html)|类|未翻译|
|[`BlockAreaSize`](https://projectxero.top/sapi/classes/server.BlockAreaSize.html)|类|未翻译|
|[`BlockBreakEvent`](https://projectxero.top/sapi/classes/server.BlockBreakEvent.html)|类|未翻译|
|[`BlockBreakEventSignal`](https://projectxero.top/sapi/classes/server.BlockBreakEventSignal.html)|类|未翻译|
|[`BlockComponent`](https://projectxero.top/sapi/classes/server.BlockComponent.html)|类|未翻译|
|[`BlockEvent`](https://projectxero.top/sapi/classes/server.BlockEvent.html)|类|未翻译|
|[`BlockExplodeEvent`](https://projectxero.top/sapi/classes/server.BlockExplodeEvent.html)|类|未翻译|
|[`BlockExplodeEventSignal`](https://projectxero.top/sapi/classes/server.BlockExplodeEventSignal.html)|类|未翻译|
|[`BlockHitInformation`](https://projectxero.top/sapi/classes/server.BlockHitInformation.html)|类|未翻译|
|[`BlockInventoryComponent`](https://projectxero.top/sapi/classes/server.BlockInventoryComponent.html)|类|未翻译|
|[`BlockInventoryComponentContainer`](https://projectxero.top/sapi/classes/server.BlockInventoryComponentContainer.html)|类|未翻译|
|[`BlockLavaContainerComponent`](https://projectxero.top/sapi/classes/server.BlockLavaContainerComponent.html)|类|未翻译|
|[`BlockLocation`](https://projectxero.top/sapi/classes/server.BlockLocation.html)|类|未翻译|
|[`BlockPermutation`](https://projectxero.top/sapi/classes/server.BlockPermutation.html)|类|未翻译|
|[`BlockPistonComponent`](https://projectxero.top/sapi/classes/server.BlockPistonComponent.html)|类|未翻译|
|[`BlockPlaceEvent`](https://projectxero.top/sapi/classes/server.BlockPlaceEvent.html)|类|未翻译|
|[`BlockPlaceEventSignal`](https://projectxero.top/sapi/classes/server.BlockPlaceEventSignal.html)|类|未翻译|
|[`BlockPotionContainerComponent`](https://projectxero.top/sapi/classes/server.BlockPotionContainerComponent.html)|类|未翻译|
|[`BlockProperties`](https://projectxero.top/sapi/classes/server.BlockProperties.html)|类|未翻译|
|[`BlockRecordPlayerComponent`](https://projectxero.top/sapi/classes/server.BlockRecordPlayerComponent.html)|类|未翻译|
|[`BlockSignComponent`](https://projectxero.top/sapi/classes/server.BlockSignComponent.html)|类|未翻译|
|[`BlockSnowContainerComponent`](https://projectxero.top/sapi/classes/server.BlockSnowContainerComponent.html)|类|未翻译|
|[`BlockType`](https://projectxero.top/sapi/classes/server.BlockType.html)|类|未翻译|
|[`BlockWaterContainerComponent`](https://projectxero.top/sapi/classes/server.BlockWaterContainerComponent.html)|类|未翻译|
|[`BoolBlockProperty`](https://projectxero.top/sapi/classes/server.BoolBlockProperty.html)|类|未翻译|
|[`ButtonPushEvent`](https://projectxero.top/sapi/classes/server.ButtonPushEvent.html)|类|未翻译|
|[`ButtonPushEventSignal`](https://projectxero.top/sapi/classes/server.ButtonPushEventSignal.html)|类|未翻译|
|[`ChatEvent`](https://projectxero.top/sapi/classes/server.ChatEvent.html)|类|未翻译|
|[`ChatEventSignal`](https://projectxero.top/sapi/classes/server.ChatEventSignal.html)|类|未翻译|
|[`Color`](https://projectxero.top/sapi/classes/server.Color.html)|类|未翻译|
|[`CommandResult`](https://projectxero.top/sapi/classes/server.CommandResult.html)|类|未翻译|
|[`Container`](https://projectxero.top/sapi/classes/server.Container.html)|类|未翻译|
|[`ContainerSlot`](https://projectxero.top/sapi/classes/server.ContainerSlot.html)|类|未翻译|
|[`DataDrivenEntityTriggerEvent`](https://projectxero.top/sapi/classes/server.DataDrivenEntityTriggerEvent.html)|类|未翻译|
|[`DataDrivenEntityTriggerEventSignal`](https://projectxero.top/sapi/classes/server.DataDrivenEntityTriggerEventSignal.html)|类|未翻译|
|[`DefinitionModifier`](https://projectxero.top/sapi/classes/server.DefinitionModifier.html)|类|未翻译|
|[`Dimension`](https://projectxero.top/sapi/classes/server.Dimension.html)|类|未翻译|
|[`DirectionBlockProperty`](https://projectxero.top/sapi/classes/server.DirectionBlockProperty.html)|类|未翻译|
|[`DynamicPropertiesDefinition`](https://projectxero.top/sapi/classes/server.DynamicPropertiesDefinition.html)|类|已完成|
|[`Effect`](https://projectxero.top/sapi/classes/server.Effect.html)|类|未翻译|
|[`EffectAddEvent`](https://projectxero.top/sapi/classes/server.EffectAddEvent.html)|类|未翻译|
|[`EffectAddEventSignal`](https://projectxero.top/sapi/classes/server.EffectAddEventSignal.html)|类|未翻译|
|[`EffectType`](https://projectxero.top/sapi/classes/server.EffectType.html)|类|未翻译|
|[`Enchantment`](https://projectxero.top/sapi/classes/server.Enchantment.html)|类|未翻译|
|[`EnchantmentList`](https://projectxero.top/sapi/classes/server.EnchantmentList.html)|类|未翻译|
|[`EnchantmentSlot`](https://projectxero.top/sapi/classes/server.EnchantmentSlot.html)|类|未翻译|
|[`EnchantmentType`](https://projectxero.top/sapi/classes/server.EnchantmentType.html)|类|未翻译|
|[`Entity`](https://projectxero.top/sapi/classes/server.Entity.html)|类|未翻译|
|[`EntityAddRiderComponent`](https://projectxero.top/sapi/classes/server.EntityAddRiderComponent.html)|类|未翻译|
|[`EntityAgeableComponent`](https://projectxero.top/sapi/classes/server.EntityAgeableComponent.html)|类|未翻译|
|[`EntityBreathableComponent`](https://projectxero.top/sapi/classes/server.EntityBreathableComponent.html)|类|未翻译|
|[`EntityCanClimbComponent`](https://projectxero.top/sapi/classes/server.EntityCanClimbComponent.html)|类|未翻译|
|[`EntityCanFlyComponent`](https://projectxero.top/sapi/classes/server.EntityCanFlyComponent.html)|类|未翻译|
|[`EntityCanPowerJumpComponent`](https://projectxero.top/sapi/classes/server.EntityCanPowerJumpComponent.html)|类|未翻译|
|[`EntityColorComponent`](https://projectxero.top/sapi/classes/server.EntityColorComponent.html)|类|未翻译|
|[`EntityDefinitionFeedItem`](https://projectxero.top/sapi/classes/server.EntityDefinitionFeedItem.html)|类|未翻译|
|[`EntityFireImmuneComponent`](https://projectxero.top/sapi/classes/server.EntityFireImmuneComponent.html)|类|未翻译|
|[`EntityFloatsInLiquidComponent`](https://projectxero.top/sapi/classes/server.EntityFloatsInLiquidComponent.html)|类|未翻译|
|[`EntityFlyingSpeedComponent`](https://projectxero.top/sapi/classes/server.EntityFlyingSpeedComponent.html)|类|未翻译|
|[`EntityFrictionModifierComponent`](https://projectxero.top/sapi/classes/server.EntityFrictionModifierComponent.html)|类|未翻译|
|[`EntityGroundOffsetComponent`](https://projectxero.top/sapi/classes/server.EntityGroundOffsetComponent.html)|类|未翻译|
|[`EntityHealableComponent`](https://projectxero.top/sapi/classes/server.EntityHealableComponent.html)|类|未翻译|
|[`EntityHealthComponent`](https://projectxero.top/sapi/classes/server.EntityHealthComponent.html)|类|未翻译|
|[`EntityHitEvent`](https://projectxero.top/sapi/classes/server.EntityHitEvent.html)|类|未翻译|
|[`EntityHitEventSignal`](https://projectxero.top/sapi/classes/server.EntityHitEventSignal.html)|类|未翻译|
|[`EntityHitInformation`](https://projectxero.top/sapi/classes/server.EntityHitInformation.html)|类|未翻译|
|[`EntityHurtEvent`](https://projectxero.top/sapi/classes/server.EntityHurtEvent.html)|类|未翻译|
|[`EntityHurtEventSignal`](https://projectxero.top/sapi/classes/server.EntityHurtEventSignal.html)|类|未翻译|
|[`EntityInventoryComponent`](https://projectxero.top/sapi/classes/server.EntityInventoryComponent.html)|类|已完成|
|[`EntityIsBabyComponent`](https://projectxero.top/sapi/classes/server.EntityIsBabyComponent.html)|类|未翻译|
|[`EntityIsChargedComponent`](https://projectxero.top/sapi/classes/server.EntityIsChargedComponent.html)|类|未翻译|
|[`EntityIsChestedComponent`](https://projectxero.top/sapi/classes/server.EntityIsChestedComponent.html)|类|未翻译|
|[`EntityIsDyableComponent`](https://projectxero.top/sapi/classes/server.EntityIsDyableComponent.html)|类|未翻译|
|[`EntityIsHiddenWhenInvisibleComponent`](https://projectxero.top/sapi/classes/server.EntityIsHiddenWhenInvisibleComponent.html)|类|未翻译|
|[`EntityIsIgnitedComponent`](https://projectxero.top/sapi/classes/server.EntityIsIgnitedComponent.html)|类|未翻译|
|[`EntityIsIllagerCaptainComponent`](https://projectxero.top/sapi/classes/server.EntityIsIllagerCaptainComponent.html)|类|未翻译|
|[`EntityIsSaddledComponent`](https://projectxero.top/sapi/classes/server.EntityIsSaddledComponent.html)|类|未翻译|
|[`EntityIsShakingComponent`](https://projectxero.top/sapi/classes/server.EntityIsShakingComponent.html)|类|未翻译|
|[`EntityIsShearedComponent`](https://projectxero.top/sapi/classes/server.EntityIsShearedComponent.html)|类|未翻译|
|[`EntityIsStackableComponent`](https://projectxero.top/sapi/classes/server.EntityIsStackableComponent.html)|类|未翻译|
|[`EntityIsStunnedComponent`](https://projectxero.top/sapi/classes/server.EntityIsStunnedComponent.html)|类|未翻译|
|[`EntityIsTamedComponent`](https://projectxero.top/sapi/classes/server.EntityIsTamedComponent.html)|类|未翻译|
|[`EntityItemComponent`](https://projectxero.top/sapi/classes/server.EntityItemComponent.html)|类|未翻译|
|[`EntityIterator`](https://projectxero.top/sapi/classes/server.EntityIterator.html)|类|未翻译|
|[`EntityLavaMovementComponent`](https://projectxero.top/sapi/classes/server.EntityLavaMovementComponent.html)|类|未翻译|
|[`EntityLeashableComponent`](https://projectxero.top/sapi/classes/server.EntityLeashableComponent.html)|类|未翻译|
|[`EntityMarkVariantComponent`](https://projectxero.top/sapi/classes/server.EntityMarkVariantComponent.html)|类|未翻译|
|[`EntityMountTamingComponent`](https://projectxero.top/sapi/classes/server.EntityMountTamingComponent.html)|类|未翻译|
|[`EntityMovementAmphibiousComponent`](https://projectxero.top/sapi/classes/server.EntityMovementAmphibiousComponent.html)|类|未翻译|
|[`EntityMovementBasicComponent`](https://projectxero.top/sapi/classes/server.EntityMovementBasicComponent.html)|类|未翻译|
|[`EntityMovementComponent`](https://projectxero.top/sapi/classes/server.EntityMovementComponent.html)|类|未翻译|
|[`EntityMovementFlyComponent`](https://projectxero.top/sapi/classes/server.EntityMovementFlyComponent.html)|类|未翻译|
|[`EntityMovementGenericComponent`](https://projectxero.top/sapi/classes/server.EntityMovementGenericComponent.html)|类|未翻译|
|[`EntityMovementGlideComponent`](https://projectxero.top/sapi/classes/server.EntityMovementGlideComponent.html)|类|未翻译|
|[`EntityMovementHoverComponent`](https://projectxero.top/sapi/classes/server.EntityMovementHoverComponent.html)|类|未翻译|
|[`EntityMovementJumpComponent`](https://projectxero.top/sapi/classes/server.EntityMovementJumpComponent.html)|类|未翻译|
|[`EntityMovementSkipComponent`](https://projectxero.top/sapi/classes/server.EntityMovementSkipComponent.html)|类|未翻译|
|[`EntityMovementSwayComponent`](https://projectxero.top/sapi/classes/server.EntityMovementSwayComponent.html)|类|未翻译|
|[`EntityNavigationClimbComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationClimbComponent.html)|类|未翻译|
|[`EntityNavigationFloatComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationFloatComponent.html)|类|未翻译|
|[`EntityNavigationFlyComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationFlyComponent.html)|类|未翻译|
|[`EntityNavigationGenericComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationGenericComponent.html)|类|未翻译|
|[`EntityNavigationHoverComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationHoverComponent.html)|类|未翻译|
|[`EntityNavigationWalkComponent`](https://projectxero.top/sapi/classes/server.EntityNavigationWalkComponent.html)|类|未翻译|
|[`EntityOnFireComponent`](https://projectxero.top/sapi/classes/server.EntityOnFireComponent.html)|类|未翻译|
|[`EntityPushThroughComponent`](https://projectxero.top/sapi/classes/server.EntityPushThroughComponent.html)|类|未翻译|
|[`EntityRideableComponent`](https://projectxero.top/sapi/classes/server.EntityRideableComponent.html)|类|未翻译|
|[`EntityScaleComponent`](https://projectxero.top/sapi/classes/server.EntityScaleComponent.html)|类|未翻译|
|[`EntitySkinIdComponent`](https://projectxero.top/sapi/classes/server.EntitySkinIdComponent.html)|类|未翻译|
|[`EntitySpawnEvent`](https://projectxero.top/sapi/classes/server.EntitySpawnEvent.html)|类|未翻译|
|[`EntitySpawnEventSignal`](https://projectxero.top/sapi/classes/server.EntitySpawnEventSignal.html)|类|未翻译|
|[`EntityStrengthComponent`](https://projectxero.top/sapi/classes/server.EntityStrengthComponent.html)|类|未翻译|
|[`EntityTameableComponent`](https://projectxero.top/sapi/classes/server.EntityTameableComponent.html)|类|未翻译|
|[`EntityType`](https://projectxero.top/sapi/classes/server.EntityType.html)|类|未翻译|
|[`EntityTypeIterator`](https://projectxero.top/sapi/classes/server.EntityTypeIterator.html)|类|未翻译|
|[`EntityTypes`](https://projectxero.top/sapi/classes/server.EntityTypes.html)|类|未翻译|
|[`EntityUnderwaterMovementComponent`](https://projectxero.top/sapi/classes/server.EntityUnderwaterMovementComponent.html)|类|未翻译|
|[`EntityVariantComponent`](https://projectxero.top/sapi/classes/server.EntityVariantComponent.html)|类|未翻译|
|[`EntityWantsJockeyComponent`](https://projectxero.top/sapi/classes/server.EntityWantsJockeyComponent.html)|类|未翻译|
|[`Events`](https://projectxero.top/sapi/classes/server.Events.html)|类|未翻译|
|[`ExplosionEvent`](https://projectxero.top/sapi/classes/server.ExplosionEvent.html)|类|未翻译|
|[`ExplosionEventSignal`](https://projectxero.top/sapi/classes/server.ExplosionEventSignal.html)|类|未翻译|
|[`FeedItem`](https://projectxero.top/sapi/classes/server.FeedItem.html)|类|未翻译|
|[`FeedItemEffect`](https://projectxero.top/sapi/classes/server.FeedItemEffect.html)|类|未翻译|
|[`FilterGroup`](https://projectxero.top/sapi/classes/server.FilterGroup.html)|类|未翻译|
|[`FluidContainer`](https://projectxero.top/sapi/classes/server.FluidContainer.html)|类|未翻译|
|[`IBlockProperty`](https://projectxero.top/sapi/classes/server.IBlockProperty.html)|类|未翻译|
|[`IEntityComponent`](https://projectxero.top/sapi/classes/server.IEntityComponent.html)|类|未翻译|
|[`IntBlockProperty`](https://projectxero.top/sapi/classes/server.IntBlockProperty.html)|类|未翻译|
|[`InventoryComponentContainer`](https://projectxero.top/sapi/classes/server.InventoryComponentContainer.html)|类|未翻译|
|[`ItemCompleteChargeEvent`](https://projectxero.top/sapi/classes/server.ItemCompleteChargeEvent.html)|类|未翻译|
|[`ItemCompleteChargeEventSignal`](https://projectxero.top/sapi/classes/server.ItemCompleteChargeEventSignal.html)|类|未翻译|
|[`ItemCooldownComponent`](https://projectxero.top/sapi/classes/server.ItemCooldownComponent.html)|类|已完成|
|[`ItemDefinitionEventSignal`](https://projectxero.top/sapi/classes/server.ItemDefinitionEventSignal.html)|类|未翻译|
|[`ItemDefinitionTriggeredEvent`](https://projectxero.top/sapi/classes/server.ItemDefinitionTriggeredEvent.html)|类|未翻译|
|[`ItemDurabilityComponent`](https://projectxero.top/sapi/classes/server.ItemDurabilityComponent.html)|类|已完成|
|[`ItemEnchantsComponent`](https://projectxero.top/sapi/classes/server.ItemEnchantsComponent.html)|类|已完成|
|[`ItemFoodComponent`](https://projectxero.top/sapi/classes/server.ItemFoodComponent.html)|类|已完成|
|[`ItemReleaseChargeEvent`](https://projectxero.top/sapi/classes/server.ItemReleaseChargeEvent.html)|类|未翻译|
|[`ItemReleaseChargeEventSignal`](https://projectxero.top/sapi/classes/server.ItemReleaseChargeEventSignal.html)|类|未翻译|
|[`ItemStack`](https://projectxero.top/sapi/classes/server.ItemStack.html)|类|未翻译|
|[`ItemStartChargeEvent`](https://projectxero.top/sapi/classes/server.ItemStartChargeEvent.html)|类|未翻译|
|[`ItemStartChargeEventSignal`](https://projectxero.top/sapi/classes/server.ItemStartChargeEventSignal.html)|类|未翻译|
|[`ItemStartUseOnEvent`](https://projectxero.top/sapi/classes/server.ItemStartUseOnEvent.html)|类|未翻译|
|[`ItemStartUseOnEventSignal`](https://projectxero.top/sapi/classes/server.ItemStartUseOnEventSignal.html)|类|未翻译|
|[`ItemStopChargeEvent`](https://projectxero.top/sapi/classes/server.ItemStopChargeEvent.html)|类|未翻译|
|[`ItemStopChargeEventSignal`](https://projectxero.top/sapi/classes/server.ItemStopChargeEventSignal.html)|类|未翻译|
|[`ItemStopUseOnEvent`](https://projectxero.top/sapi/classes/server.ItemStopUseOnEvent.html)|类|未翻译|
|[`ItemStopUseOnEventSignal`](https://projectxero.top/sapi/classes/server.ItemStopUseOnEventSignal.html)|类|未翻译|
|[`ItemType`](https://projectxero.top/sapi/classes/server.ItemType.html)|类|未翻译|
|[`ItemTypeIterator`](https://projectxero.top/sapi/classes/server.ItemTypeIterator.html)|类|未翻译|
|[`ItemTypes`](https://projectxero.top/sapi/classes/server.ItemTypes.html)|类|未翻译|
|[`ItemUseEvent`](https://projectxero.top/sapi/classes/server.ItemUseEvent.html)|类|未翻译|
|[`ItemUseEventSignal`](https://projectxero.top/sapi/classes/server.ItemUseEventSignal.html)|类|未翻译|
|[`ItemUseOnEvent`](https://projectxero.top/sapi/classes/server.ItemUseOnEvent.html)|类|未翻译|
|[`ItemUseOnEventSignal`](https://projectxero.top/sapi/classes/server.ItemUseOnEventSignal.html)|类|未翻译|
|[`Items`](https://projectxero.top/sapi/classes/server.Items.html)|类|未翻译|
|[`LeverActionEvent`](https://projectxero.top/sapi/classes/server.LeverActionEvent.html)|类|未翻译|
|[`LeverActionEventSignal`](https://projectxero.top/sapi/classes/server.LeverActionEventSignal.html)|类|未翻译|
|[`Location`](https://projectxero.top/sapi/classes/server.Location.html)|类|未翻译|
|[`MessageReceiveEvent`](https://projectxero.top/sapi/classes/server.MessageReceiveEvent.html)|类|未翻译|
|[`MinecraftBlockTypes`](https://projectxero.top/sapi/classes/server.MinecraftBlockTypes.html)|类|已完成|
|[`MinecraftDimensionTypes`](https://projectxero.top/sapi/classes/server.MinecraftDimensionTypes.html)|类|未翻译|
|[`MinecraftEffectTypes`](https://projectxero.top/sapi/classes/server.MinecraftEffectTypes.html)|类|已完成|
|[`MinecraftEnchantmentTypes`](https://projectxero.top/sapi/classes/server.MinecraftEnchantmentTypes.html)|类|已完成|
|[`MinecraftEntityTypes`](https://projectxero.top/sapi/classes/server.MinecraftEntityTypes.html)|类|已完成|
|[`MinecraftItemTypes`](https://projectxero.top/sapi/classes/server.MinecraftItemTypes.html)|类|已完成|
|[`MolangVariableMap`](https://projectxero.top/sapi/classes/server.MolangVariableMap.html)|类|未翻译|
|[`NavigationResult`](https://projectxero.top/sapi/classes/server.NavigationResult.html)|类|未翻译|
|[`NumberRange`](https://projectxero.top/sapi/classes/server.NumberRange.html)|类|未翻译|
|[`PistonActivateEvent`](https://projectxero.top/sapi/classes/server.PistonActivateEvent.html)|类|未翻译|
|[`PistonActivateEventSignal`](https://projectxero.top/sapi/classes/server.PistonActivateEventSignal.html)|类|未翻译|
|[`Player`](https://projectxero.top/sapi/classes/server.Player.html)|类|未翻译|
|[`PlayerInventoryComponentContainer`](https://projectxero.top/sapi/classes/server.PlayerInventoryComponentContainer.html)|类|未翻译|
|[`PlayerIterator`](https://projectxero.top/sapi/classes/server.PlayerIterator.html)|类|未翻译|
|[`PlayerJoinEvent`](https://projectxero.top/sapi/classes/server.PlayerJoinEvent.html)|类|未翻译|
|[`PlayerJoinEventSignal`](https://projectxero.top/sapi/classes/server.PlayerJoinEventSignal.html)|类|未翻译|
|[`PlayerLeaveEvent`](https://projectxero.top/sapi/classes/server.PlayerLeaveEvent.html)|类|未翻译|
|[`PlayerLeaveEventSignal`](https://projectxero.top/sapi/classes/server.PlayerLeaveEventSignal.html)|类|未翻译|
|[`PlayerSpawnEvent`](https://projectxero.top/sapi/classes/server.PlayerSpawnEvent.html)|类|未翻译|
|[`PlayerSpawnEventSignal`](https://projectxero.top/sapi/classes/server.PlayerSpawnEventSignal.html)|类|未翻译|
|[`ProjectileHitEvent`](https://projectxero.top/sapi/classes/server.ProjectileHitEvent.html)|类|未翻译|
|[`ProjectileHitEventSignal`](https://projectxero.top/sapi/classes/server.ProjectileHitEventSignal.html)|类|未翻译|
|[`PropertyRegistry`](https://projectxero.top/sapi/classes/server.PropertyRegistry.html)|类|已完成|
|[`Scoreboard`](https://projectxero.top/sapi/classes/server.Scoreboard.html)|类|已完成|
|[`ScoreboardIdentity`](https://projectxero.top/sapi/classes/server.ScoreboardIdentity.html)|类|已完成|
|[`ScoreboardObjective`](https://projectxero.top/sapi/classes/server.ScoreboardObjective.html)|类|已完成|
|[`ScoreboardScoreInfo`](https://projectxero.top/sapi/classes/server.ScoreboardScoreInfo.html)|类|未已完成|
|[`ScreenDisplay`](https://projectxero.top/sapi/classes/server.ScreenDisplay.html)|类|未翻译|
|[`ScriptEventCommandMessageEvent`](https://projectxero.top/sapi/classes/server.ScriptEventCommandMessageEvent.html)|类|未翻译|
|[`ScriptEventCommandMessageSignal`](https://projectxero.top/sapi/classes/server.ScriptEventCommandMessageSignal.html)|类|未翻译|
|[`Seat`](https://projectxero.top/sapi/classes/server.Seat.html)|类|未翻译|
|[`ServerMessageSignal`](https://projectxero.top/sapi/classes/server.ServerMessageSignal.html)|类|未翻译|
|[`StringBlockProperty`](https://projectxero.top/sapi/classes/server.StringBlockProperty.html)|类|未翻译|
|[`System`](https://projectxero.top/sapi/classes/server.System.html)|类|未翻译|
|[`SystemEvents`](https://projectxero.top/sapi/classes/server.SystemEvents.html)|类|未翻译|
|[`TickEvent`](https://projectxero.top/sapi/classes/server.TickEvent.html)|类|未翻译|
|[`TickEventSignal`](https://projectxero.top/sapi/classes/server.TickEventSignal.html)|类|未翻译|
|[`Trigger`](https://projectxero.top/sapi/classes/server.Trigger.html)|类|未翻译|
|[`Vector`](https://projectxero.top/sapi/classes/server.Vector.html)|类|未翻译|
|[`WeatherChangeEvent`](https://projectxero.top/sapi/classes/server.WeatherChangeEvent.html)|类|未翻译|
|[`WeatherChangeEventSignal`](https://projectxero.top/sapi/classes/server.WeatherChangeEventSignal.html)|类|未翻译|
|[`World`](https://projectxero.top/sapi/classes/server.World.html)|类|已完成|
|[`WorldInitializeEvent`](https://projectxero.top/sapi/classes/server.WorldInitializeEvent.html)|类|未翻译|
|[`WorldInitializeEventSignal`](https://projectxero.top/sapi/classes/server.WorldInitializeEventSignal.html)|类|未翻译|
|[`XYRotation`](https://projectxero.top/sapi/classes/server.XYRotation.html)|类|未翻译|
|[`BlockFillOptions`](https://projectxero.top/sapi/interfaces/server.BlockFillOptions.html)|接口|未翻译|
|[`BlockRaycastOptions`](https://projectxero.top/sapi/interfaces/server.BlockRaycastOptions.html)|接口|未翻译|
|[`EntityDamageSource`](https://projectxero.top/sapi/interfaces/server.EntityDamageSource.html)|接口|未翻译|
|[`EntityDataDrivenTriggerEventOptions`](https://projectxero.top/sapi/interfaces/server.EntityDataDrivenTriggerEventOptions.html)|接口|未翻译|
|[`EntityEventOptions`](https://projectxero.top/sapi/interfaces/server.EntityEventOptions.html)|接口|未翻译|
|[`EntityQueryOptions`](https://projectxero.top/sapi/interfaces/server.EntityQueryOptions.html)|接口|未翻译|
|[`EntityQueryScoreOptions`](https://projectxero.top/sapi/interfaces/server.EntityQueryScoreOptions.html)|接口|未翻译|
|[`EntityRaycastOptions`](https://projectxero.top/sapi/interfaces/server.EntityRaycastOptions.html)|接口|未翻译|
|[`ExplosionOptions`](https://projectxero.top/sapi/interfaces/server.ExplosionOptions.html)|接口|未翻译|
|[`MusicOptions`](https://projectxero.top/sapi/interfaces/server.MusicOptions.html)|接口|未翻译|
|[`RawMessage`](https://projectxero.top/sapi/interfaces/server.RawMessage.html)|接口|未翻译|
|[`ScoreboardObjectiveDisplayOptions`](https://projectxero.top/sapi/interfaces/server.ScoreboardObjectiveDisplayOptions.html)|接口|已完成|
|[`ScriptEventMessageFilterOptions`](https://projectxero.top/sapi/interfaces/server.ScriptEventMessageFilterOptions.html)|接口|未翻译|
|[`SoundOptions`](https://projectxero.top/sapi/interfaces/server.SoundOptions.html)|接口|未翻译|
|[`TitleDisplayOptions`](https://projectxero.top/sapi/interfaces/server.TitleDisplayOptions.html)|接口|未翻译|
|[`Vector3`](https://projectxero.top/sapi/interfaces/server.Vector3.html)|接口|未翻译|
|[`TicksPerDay`](https://projectxero.top/sapi/variables/server.TicksPerDay.html)|值|未翻译|
|[`TicksPerSecond`](https://projectxero.top/sapi/variables/server.TicksPerSecond.html)|值|未翻译|
|[`system`](https://projectxero.top/sapi/variables/server.system-1.html)|值|未翻译|
|[`world`](https://projectxero.top/sapi/variables/server.world-1.html)|值|未翻译|

### @minecraft/server-admin

|名称|类型|状态|
| - | - | - |
|[`SecretString`](https://projectxero.top/sapi/classes/server_admin.SecretString.html)|类|未翻译|
|[`ServerSecrets`](https://projectxero.top/sapi/classes/server_admin.ServerSecrets.html)|类|未翻译|
|[`ServerVariables`](https://projectxero.top/sapi/classes/server_admin.ServerVariables.html)|类|未翻译|
|[`secrets`](https://projectxero.top/sapi/variables/server_admin.secrets.html)|值|未翻译|
|[`variables`](https://projectxero.top/sapi/variables/server_admin.variables.html)|值|未翻译|

### @minecraft/server-gametest

|名称|类型|状态|
| - | - | - |
|[`FenceConnectivity`](https://projectxero.top/sapi/classes/server_gametest.FenceConnectivity.html)|类|未翻译|
|[`GameTestSequence`](https://projectxero.top/sapi/classes/server_gametest.GameTestSequence.html)|类|未翻译|
|[`RegistrationBuilder`](https://projectxero.top/sapi/classes/server_gametest.RegistrationBuilder.html)|类|未翻译|
|[`SculkSpreader`](https://projectxero.top/sapi/classes/server_gametest.SculkSpreader.html)|类|未翻译|
|[`SimulatedPlayer`](https://projectxero.top/sapi/classes/server_gametest.SimulatedPlayer.html)|类|未翻译|
|[`Tags`](https://projectxero.top/sapi/classes/server_gametest.Tags.html)|类|未翻译|
|[`Test`](https://projectxero.top/sapi/classes/server_gametest.Test.html)|类|未翻译|
|[`register`](https://projectxero.top/sapi/functions/server_gametest.register.html)|undefined|未翻译|
|[`registerAsync`](https://projectxero.top/sapi/functions/server_gametest.registerAsync.html)|undefined|未翻译|

### @minecraft/server-net

|名称|类型|状态|
| - | - | - |
|[`HttpRequestMethod`](https://projectxero.top/sapi/enums/server_net.HttpRequestMethod.html)|枚举|未翻译|
|[`HttpClient`](https://projectxero.top/sapi/classes/server_net.HttpClient.html)|类|未翻译|
|[`HttpHeader`](https://projectxero.top/sapi/classes/server_net.HttpHeader.html)|类|未翻译|
|[`HttpRequest`](https://projectxero.top/sapi/classes/server_net.HttpRequest.html)|类|未翻译|
|[`HttpResponse`](https://projectxero.top/sapi/classes/server_net.HttpResponse.html)|类|未翻译|
|[`http`](https://projectxero.top/sapi/variables/server_net.http.html)|值|未翻译|

### @minecraft/server-ui

|名称|类型|状态|
| - | - | - |
|[`FormCancelationReason`](https://projectxero.top/sapi/enums/server_ui.FormCancelationReason.html)|枚举|未翻译|
|[`ActionFormData`](https://projectxero.top/sapi/classes/server_ui.ActionFormData.html)|类|未翻译|
|[`ActionFormResponse`](https://projectxero.top/sapi/classes/server_ui.ActionFormResponse.html)|类|未翻译|
|[`FormResponse`](https://projectxero.top/sapi/classes/server_ui.FormResponse.html)|类|未翻译|
|[`MessageFormData`](https://projectxero.top/sapi/classes/server_ui.MessageFormData.html)|类|未翻译|
|[`MessageFormResponse`](https://projectxero.top/sapi/classes/server_ui.MessageFormResponse.html)|类|未翻译|
|[`ModalFormData`](https://projectxero.top/sapi/classes/server_ui.ModalFormData.html)|类|未翻译|
|[`ModalFormResponse`](https://projectxero.top/sapi/classes/server_ui.ModalFormResponse.html)|类|未翻译|
