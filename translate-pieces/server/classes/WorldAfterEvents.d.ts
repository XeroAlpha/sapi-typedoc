/* IMPORT */ import { BlockExplodeAfterEventSignal, ButtonPushAfterEventSignal, ChatSendAfterEventSignal, DataDrivenEntityTriggerAfterEventSignal, EffectAddAfterEventSignal, EntityDieAfterEventSignal, EntityHealthChangedAfterEventSignal, EntityHitBlockAfterEventSignal, EntityHitEntityAfterEventSignal, EntityHurtAfterEventSignal, EntityLoadAfterEventSignal, EntityRemoveAfterEventSignal, EntitySpawnAfterEventSignal, ExplosionAfterEventSignal, GameRuleChangeAfterEventSignal, InputButton, InputMode, ItemCompleteUseAfterEventSignal, ItemReleaseUseAfterEventSignal, ItemStartUseAfterEventSignal, ItemStartUseOnAfterEventSignal, ItemStopUseAfterEventSignal, ItemStopUseOnAfterEventSignal, ItemUseAfterEventSignal, LeverActionAfterEventSignal, PistonActivateAfterEventSignal, PlayerBreakBlockAfterEventSignal, PlayerButtonInputAfterEventSignal, PlayerDimensionChangeAfterEventSignal, PlayerEmoteAfterEventSignal, PlayerGameModeChangeAfterEventSignal, PlayerHotbarSelectedSlotChangeAfterEventSignal, PlayerInputModeChangeAfterEventSignal, PlayerInputPermissionCategoryChangeAfterEventSignal, PlayerInteractWithBlockAfterEventSignal, PlayerInteractWithEntityAfterEventSignal, PlayerInventoryItemChangeAfterEventSignal, PlayerJoinAfterEventSignal, PlayerLeaveAfterEventSignal, PlayerPlaceBlockAfterEventSignal, PlayerSpawnAfterEventSignal, PressurePlatePopAfterEventSignal, PressurePlatePushAfterEventSignal, ProjectileHitBlockAfterEventSignal, ProjectileHitEntityAfterEventSignal, ServerMessageAfterEventSignal, TargetBlockHitAfterEventSignal, TripWireTripAfterEventSignal, WeatherChangeAfterEventSignal, WorldLoadAfterEventSignal } from '../index';

/**
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     * @earlyExecution
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     * @earlyExecution
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * @earlyExecution
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     * @earlyExecution
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     * @earlyExecution
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     * @earlyExecution
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     * @earlyExecution
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     * @earlyExecution
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     * @earlyExecution
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     *
     * @earlyExecution
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     * @earlyExecution
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     *
     * @earlyExecution
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     * @earlyExecution
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     * @earlyExecution
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     * @earlyExecution
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     * @earlyExecution
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     * @earlyExecution
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     * @earlyExecution
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     * @earlyExecution
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     * @earlyExecution
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     * @earlyExecution
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an {@link InputButton} state is
     * changed.
     *
     * @earlyExecution
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     * @earlyExecution
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @beta
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's {@link InputMode} changes.
     *
     * @earlyExecution
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a players input permissions change.
     *
     * @earlyExecution
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * An event for when a player interacts with a block.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player interacts with an entity.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     * @earlyExecution
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     * @earlyExecution
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits a block.
     *
     * @earlyExecution
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     * @earlyExecution
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks
     * A target block was hit.
     *
     * @earlyExecution
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * A trip wire was tripped.
     *
     * @earlyExecution
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @rc
     * @remarks
     * @earlyExecution
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}