// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-net` module contains types for
 * executing HTTP-based requests. This module can only be used
 * on Bedrock Dedicated Server. These APIs do not function
 * within the Minecraft game client or within Minecraft Realms.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-net",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import { Player } from '@minecraft/server';
import { SecretString } from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * Represents the method for an HTTP DELETE request. DELETE
     * requests are used to delete the specified resource from the
     * server.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * Represents the method for an HTTP GET request. GET requests
     * are commonly used to retrieve data from the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * Represents the method for an HTTP PATCH request. PATCH
     * requests are commonly used to apply partial modifications to
     * a resource.
     *
     */
    Patch = 'Patch',
    /**
     * @remarks
     * Represents the method for an HTTP POST request. POST
     * requests are commonly used to submit data to be processed to
     * the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}

/**
 * Represents the unique type of network packet.
 */
export enum PacketId {
    /**
     * All kinds of actor state changes (see Actor::handleEntityEvent).
     */
    ActorEventPacket = 'ActorEventPacket',
    /**
     * Player clicks on an actor in the world, eg a chicken.
     */
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddActorPacket.html
     */
    AddActorPacket = 'AddActorPacket',
    /**
     * Add Behavior Tree
     */
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddItemActorPacket.html
     */
    AddItemActorPacket = 'AddItemActorPacket',
    /**
     * Sends the information for a new painting actor from server to client.
     */
    AddPaintingPacket = 'AddPaintingPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/AddPlayerPacket.html
     */
    AddPlayerPacket = 'AddPlayerPacket',
    /**
     * Sends a volume entity's definition and components from server to client.
     */
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    /**
     * packet containing data of Agent Action Type
     */
    AgentActionEventPacket = 'AgentActionEventPacket',
    /**
     * Broadcasted to other players when an Agent performs an animation so it gets properly replicated.
     */
    AgentAnimationPacket = 'AgentAnimationPacket',
    /**
     * The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.
     */
    AnimateEntityPacket = 'AnimateEntityPacket',
    /**
     * Animate Actor
     */
    AnimatePacket = 'AnimatePacket',
    /**
     * Requests an anvil to be damaged.
     */
    AnvilDamagePacket = 'AnvilDamagePacket',
    /**
     * Initiates websocket connection
     */
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    /**
     * Sends the whole list of actor identifiers at game start from the server.
     */
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    /**
     * Contains all the available commands.
     */
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    /**
     * Contains the ID of the achievement to award
     */
    AwardAchievementPacket = 'AwardAchievementPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/BiomeDefinitionListPacket.html
     */
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    /**
     * Sends the entire user data compound tag and the block position to the client.
     */
    BlockActorDataPacket = 'BlockActorDataPacket',
    /**
     * Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.
     */
    BlockEventPacket = 'BlockEventPacket',
    /**
     * Player picks up a block in the world; client to server.
     */
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    /**
     * Sends the updated state of the Book and Quill item from client to server during use.
     */
    BookEditPacket = 'BookEditPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/BossEventPacket.html
     */
    BossEventPacket = 'BossEventPacket',
    /**
     * Camera aim-assist actor priority data sent from the server to clients.
     */
    CameraAimAssistActorPriorityPacket = 'CameraAimAssistActorPriorityPacket',
    /**
     * CameraAimAssist
     */
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    /**
     * Camera aim-assist registry presets/categories data sent from the server to clients.
     */
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    /**
     * Used to send a CameraInstruction from the server to the specified clients.
     */
    CameraInstructionPacket = 'CameraInstructionPacket',
    /**
     * Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.
     */
    CameraPacket = 'CameraPacket',
    /**
     * Used to sync CameraPresets data from server to clients.
     */
    CameraPresetsPacket = 'CameraPresetsPacket',
    /**
     * Used to control trigger camera shake movements on the client's player camera
     */
    CameraShakePacket = 'CameraShakePacket',
    /**
     * Camera custom spline data sent from server to client.
     */
    CameraSplinePacket = 'CameraSplinePacket',
    /**
     * The server sends this packet from the level to kick off dimension changing process.
     */
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    /**
     * packet containing data for changing mob property
     */
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    /**
     * Sent when the world is loading. We don't know why it is sent four times. Defines the tick distance.
     */
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    /**
     * Sent from the server to client to force close all server forms on the stack and return to the HUD screen.
     */
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    /**
     * Set the control scheme that the player should use
     */
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    ClientboundDataDrivenUICloseScreenPacket = 'ClientboundDataDrivenUICloseScreenPacket',
    /**
     * Allows the server to tell the client to reload the Data Driven UI.
     */
    ClientboundDataDrivenUIReloadPacket = 'ClientboundDataDrivenUIReloadPacket',
    /**
     * Allows the server to tell the client to show a Data Driven UI screen.
     */
    ClientboundDataDrivenUIShowScreenPacket = 'ClientboundDataDrivenUIShowScreenPacket',
    /**
     * Sends a list of data store properties from the server to the client.
     */
    ClientboundDataStorePacket = 'ClientboundDataStorePacket',
    /**
     * Used to add/remove debug rendering objects.
     */
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ClientboundMapItemDataPacket.html
     */
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    /**
     * Sends a set of update properties for the texture shift system from the server to the client.
     */
    ClientboundTextureShiftPacket = 'ClientboundTextureShiftPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ClientCacheBlobStatusPacket.html
     */
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ClientCacheMissResponsePacket.html
     */
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    /**
     * It is sent by the Client once, at login, to communicate if it supports the cache or not.
     */
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    /**
     * Client-side activation of aim-assist
     */
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ClientMovementPredictionSyncPacket.html
     */
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    /**
     * Sets up encryption and authenticates in educational version once at level startup from client.
     */
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    /**
     * Code Builder Packet
     */
    CodeBuilderPacket = 'CodeBuilderPacket',
    /**
     * This is EDU exclusive, used in getInterface() of WebviewSystem
     */
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/CommandBlockUpdatePacket.html
     */
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    /**
     * "slash" command execution output, server to client.
     */
    CommandOutputPacket = 'CommandOutputPacket',
    /**
     * "slash" command execution, client to server.
     */
    CommandRequestPacket = 'CommandRequestPacket',
    /**
     * Send server to client to complete the using item process. An example is when you finish drinking or eating.
     */
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    /**
     * After the game deletes the container manager on the client, the client sends this packet.
     *     Then the server deletes its container manager, and sends a packet back to the client that closes the container screen.
     */
    ContainerClosePacket = 'ContainerClosePacket',
    /**
     * Sent from the server so that the client knows to open the container screen and do the chest opening animation.
     */
    ContainerOpenPacket = 'ContainerOpenPacket',
    /**
     * This is used to trigger a clientside cleanup of the dynamic container registry.
     */
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    /**
     * This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)
     */
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    /**
     * Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.
     */
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/CraftingDataPacket.html
     */
    CraftingDataPacket = 'CraftingDataPacket',
    /**
     * Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.
     */
    CreatePhotoPacket = 'CreatePhotoPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/CreativeContentPacket.html
     */
    CreativeContentPacket = 'CreativeContentPacket',
    /**
     * Informs the client of which Structure Feature they are currently occupying.
     */
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    /**
     * Sent from the server to client when player dies (Level::onPlayerDeath).
     */
    DeathInfoPacket = 'DeathInfoPacket',
    /**
     * Send debug drawing shape info (from scripting) to the client for rendering
     */
    DebugDrawerPacket = 'DebugDrawerPacket',
    /**
     * The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.
     */
    DebugInfoPacket = 'DebugInfoPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/DimensionDataPacket.html
     */
    DimensionDataPacket = 'DimensionDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/DisconnectPacket.html
     */
    DisconnectPacket = 'DisconnectPacket',
    /**
     * General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/html/EditorNetworkPacket.html
     */
    EditorNetworkPacket = 'EditorNetworkPacket',
    /**
     * Transmits EducationLevelSettings to all clients.
     */
    EducationSettingsPacket = 'EducationSettingsPacket',
    /**
     * Transmits Edu Shared Uri Resource settings to all clients.
     */
    EduUriResourcePacket = 'EduUriResourcePacket',
    /**
     * Allows clients to download emotes that other clients have equipped.
     */
    EmoteListPacket = 'EmoteListPacket',
    /**
     * A client sends this to the server to notify other clients about the emote.
     */
    EmotePacket = 'EmotePacket',
    /**
     * This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.
     */
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    /**
     * Updates game rules.
     */
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    /**
     * Internal Text Packet
     */
    GameTestRequestPacket = 'GameTestRequestPacket',
    /**
     * Game Test Results Packet
     */
    GameTestResultsPacket = 'GameTestResultsPacket',
    /**
     * Sent from the server to the client when a server script changes the rendering settings
     */
    GraphicsOverrideParameterPacket = 'GraphicsOverrideParameterPacket',
    /**
     * The server telling the client what item slot to hover over in the hotbar.
     */
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    /**
     * Hurt Armor
     */
    HurtArmorPacket = 'HurtArmorPacket',
    /**
     * Interact
     */
    InteractPacket = 'InteractPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/InventoryContentPacket.html
     */
    InventoryContentPacket = 'InventoryContentPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/InventorySlotPacket.html
     */
    InventorySlotPacket = 'InventorySlotPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/InventoryTransactionPacket.html
     */
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    /**
     * Item data from the server. Contains component information.
     */
    ItemRegistryPacket = 'ItemRegistryPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ItemStackRequestPacket.html
     */
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ItemStackResponsePacket.html
     */
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    /**
     * Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.
     */
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    /**
     * For the EDU Chemistry Lab Table block actor.
     */
    LabTablePacket = 'LabTablePacket',
    /**
     * This is used for the Lectern Block Actor.
     */
    LecternUpdatePacket = 'LecternUpdatePacket',
    /**
     * Sends telemetry events to the client so the client can then send that on to the eventing system
     */
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    /**
     * Lesson Progress
     */
    LessonProgressPacket = 'LessonProgressPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/LevelChunkPacket.html
     */
    LevelChunkPacket = 'LevelChunkPacket',
    /**
     * LevelEventGenericPacket
     */
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    /**
     * Splash Potions, weather events, global pause, simlock commands, oh my!
     */
    LevelEventPacket = 'LevelEventPacket',
    /**
     * Level Sound Event
     */
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    LocatorBarPacket = 'LocatorBarPacket',
    /**
     * Sent once from client to server at login. About 100k.
     */
    LoginPacket = 'LoginPacket',
    /**
     * This is fired when the user locks a map item utilizing the Cartography Table in game.
     */
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    /**
     * In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.
     */
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MobArmorEquipmentPacket.html
     */
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    /**
     * Mob Effect
     */
    MobEffectPacket = 'MobEffectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MobEquipmentPacket.html
     */
    MobEquipmentPacket = 'MobEquipmentPacket',
    /**
     * Modal Form Request
     */
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    /**
     * Fired in response to third party server request to show the custom UI screen.
     */
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    /**
     * It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.
     */
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    /**
     * This is used primarily for motion updates of all actors from server to client.
     */
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MoveActorDeltaPacket.html
     */
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    /**
     * These packets are sent to the client to update specific MovementEffects
     */
    MovementEffectPacket = 'MovementEffectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/MovePlayerPacket.html
     */
    MovePlayerPacket = 'MovePlayerPacket',
    /**
     * Syncs multiplayer settings
     */
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    /**
     * Tells clients to update the chunk view for the local player.
     */
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    /**
     * Sends tunable options from host to client (compression threshold and algorithm)
     */
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    /**
     * Ping Packet
     */
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    /**
     * Sent from the server to client when remote firing an NPC dialogue window for a client
     */
    NpcDialoguePacket = 'NpcDialoguePacket',
    /**
     * Used for a number of interactions with the NPC Component
     */
    NpcRequestPacket = 'NpcRequestPacket',
    /**
     * On-Screen Texture Animation
     */
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    /**
     * Sent from the server so that the client knows to open the sign screen.
     */
    OpenSignPacket = 'OpenSignPacket',
    /**
     * This is sent when the client detects a malformed packet
     */
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    PartyChangedPacket = 'PartyChangedPacket',
    /**
     * There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.
     */
    PhotoTransferPacket = 'PhotoTransferPacket',
    /**
     * Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).
     */
    PlayerActionPacket = 'PlayerActionPacket',
    /**
     * Sent from server whenever the player's armor takes damage.
     */
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerAuthInputPacket.html
     */
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerEnchantOptionsPacket.html
     */
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    /**
     * Player Fog Packet
     */
    PlayerFogPacket = 'PlayerFogPacket',
    /**
     * Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, or replace item command or if the serverplayer uses _sendAdditionalLevelData(). 
     */
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerListPacket.html
     */
    PlayerListPacket = 'PlayerListPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerLocationPacket.html
     */
    PlayerLocationPacket = 'PlayerLocationPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerSkinPacket.html
     */
    PlayerSkinPacket = 'PlayerSkinPacket',
    /**
     * Player Start Item Cooldown
     */
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    /**
     * PlayerToggleCrafterSlotRequestPacket
     */
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/PlayerUpdateEntityOverridesPacket.html
     */
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    /**
     * This packet is only used via command or script event. This is for 3rd party content.
     */
    PlaySoundPacket = 'PlaySoundPacket',
    /**
     * Describes the login status of the player
     */
    PlayStatusPacket = 'PlayStatusPacket',
    /**
     * Position Tracking DB Client Request
     */
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    /**
     * Server to client packet for server authoratative runtime database (with persistent LevelStorage backup) designed primarily to track lodestone stuff. See Position Tracking DB Notes.md in bedrock-docs.
     */
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    /**
     * Sent from client to server
     */
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    /**
     * Refresh Entitlements
     */
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    /**
     * Occasionally, during the server player tick some time is taken to remove nearby actors from the world.
     */
    RemoveActorPacket = 'RemoveActorPacket',
    /**
     * Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.
     */
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    /**
     * Sends a volume entity to be removed from server to client.
     */
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    /**
     * Sent from client to server. Used to request an ability change.
     */
    RequestAbilityPacket = 'RequestAbilityPacket',
    /**
     * The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.
     */
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    /**
     * Requests tunable options from host to client (compression threshold and algorithm).
     */
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    /**
     * Sent from client to server. Used to request a new Permissions Levels.
     */
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    /**
     * Resource Pack Chunk Data
     */
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    /**
     * Resource Pack Chunk Request
     */
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html
     */
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    /**
     * Resource Pack Data Info
     */
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ResourcePacksInfoPacket.html
     */
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    ResourcePacksReadyForValidationPacket = 'ResourcePacksReadyForValidationPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackStackPacket.html
     */
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    /**
     * Sent as a handshake between the client and server to respawn the player.
     */
    RespawnPacket = 'RespawnPacket',
    /**
     * Used to send custom messages between client and server.
     */
    ScriptMessagePacket = 'ScriptMessagePacket',
    ServerboundDataDrivenScreenClosedPacket = 'ServerboundDataDrivenScreenClosedPacket',
    /**
     * Applies a single update to the server data store from the client.
     */
    ServerboundDataStorePacket = 'ServerboundDataStorePacket',
    /**
     * Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).
     */
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    /**
     * Sent from the client to the server to message to the server about the state of the loading screen.
     */
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    /**
     * Sent from the client to the server when players change Pack Settings (pack UI).
     */
    ServerboundPackSettingChangePacket = 'ServerboundPackSettingChangePacket',
    /**
     * Used to send a player's server position to the respective client at the end of movement.
     */
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    /**
     * Sent during the initialization of world settings on the client.
     */
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    /**
     * Server Settings Response
     */
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    /**
     * Used to send performance and other valuable stats back to the client
     */
    ServerStatsPacket = 'ServerStatsPacket',
    /**
     * Server->Client Handshake
     */
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetActorDataPacket.html
     */
    SetActorDataPacket = 'SetActorDataPacket',
    /**
     * Sent by both client and server, only received by LegacyClientHandler.
     */
    SetActorLinkPacket = 'SetActorLinkPacket',
    /**
     * This is used for the server to set the velocity of a client actor.
     */
    SetActorMotionPacket = 'SetActorMotionPacket',
    /**
     * This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands
     */
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    /**
     * Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.
     */
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    /**
     * Set Difficulty
     */
    SetDifficultyPacket = 'SetDifficultyPacket',
    /**
     * Sent from the server for 3rd party content to display current objectives and status
     */
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    /**
     * This packet is sent to the client when the player is spawned in and when they respawn.
     */
    SetHealthPacket = 'SetHealthPacket',
    /**
     * This packet is only used via the set hud command. This is for 3rd party content.
     */
    SetHudPacket = 'SetHudPacket',
    /**
     * Any time a player is hit, the id of the last mob that attacked them is sent to the client
     */
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    /**
     * Set Local Player As Initialized
     */
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    /**
     * Set Player Game Type
     */
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    /**
     * SetPlayerInventoryOptionsPacket
     */
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetScoreboardIdentityPacket.html
     */
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SetScorePacket.html
     */
    SetScorePacket = 'SetScorePacket',
    /**
     * When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)
     */
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    /**
     * Set Time
     */
    SetTimePacket = 'SetTimePacket',
    /**
     * Requests a setting to be changed through commands.
     */
    SettingsCommandPacket = 'SettingsCommandPacket',
    /**
     * Used by 3rd party content for the purpose of showing ui banners
     */
    SetTitlePacket = 'SetTitlePacket',
    /**
     * Starts on server when the credits screen should pop up.
     */
    ShowCreditsPacket = 'ShowCreditsPacket',
    /**
     * Show Profile
     */
    ShowProfilePacket = 'ShowProfilePacket',
    /**
     * Used for redirecting a user to the right offer.
     */
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    /**
     * This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).
     */
    SimpleEventPacket = 'SimpleEventPacket',
    /**
     * Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)
     */
    SimulationTypePacket = 'SimulationTypePacket',
    /**
     * Spawn Experience Orb
     */
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    /**
     * Tell client to spawn a particle effect.
     */
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/StartGamePacket.html
     */
    StartGamePacket = 'StartGamePacket',
    /**
     * Allows you to stop a sound or all sounds on all clients, only used in a /command
     */
    StopSoundPacket = 'StopSoundPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/StructureBlockUpdatePacket.html
     */
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    /**
     * Used to request structure information from a server.
     */
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    /**
     * This is used in exporting from load, exporting from save, and querying saved structures from structure blocks.
     */
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SubChunkPacket.html
     */
    SubChunkPacket = 'SubChunkPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SubChunkRequestPacket.html
     */
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/SubClientLoginPacket.html
     */
    SubClientLoginPacket = 'SubClientLoginPacket',
    /**
     * Allows us to synchronize Actor properties across the network.
     */
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    /**
     * A packet sent to the server when deal with picking up an item off the ground in the world.
     */
    TakeItemActorPacket = 'TakeItemActorPacket',
    /**
     * Represents a text message that needs to be displayed in-game
     */
    TextPacket = 'TextPacket',
    /**
     * Used to inform the client that the server is waiting for ticking areas to finish preloading.
     */
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    /**
     * Pushes a UI toast message to be displayed by the client
     */
    ToastRequestPacket = 'ToastRequestPacket',
    /**
     * Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.
     */
    TransferPacket = 'TransferPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/TrimDataPacket.html
     */
    TrimDataPacket = 'TrimDataPacket',
    /**
     * Sent from server to client, for all previously unlocked recipes on load and for any newly unlocked recipes during gameplay.
     */
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/UpdateAbilitiesPacket.html
     */
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    /**
     * UpdateAdventureSettingsPacket
     */
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/html/UpdateAttributesPacket.html
     */
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    /**
     * Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)
     */
    UpdateBlockPacket = 'UpdateBlockPacket',
    /**
     * Used to sync moving blocks with clients so they render correctly
     */
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    /**
     * UpdateClientInputLocksPacket
     */
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    /**
     * Sync the player's options (mostly settings) to the server.
     */
    UpdateClientOptionsPacket = 'UpdateClientOptionsPacket',
    /**
     * Seemingly only used for the Horse Inventory... More specifically when the player opens the horse inventory.
     */
    UpdateEquipPacket = 'UpdateEquipPacket',
    /**
     * The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.
     */
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    /**
     * This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)
     */
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    /**
     * Packet sent for every set of blocks changed in a sub chunk every tick.
     */
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    /**
     * This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.
     */
    UpdateTradePacket = 'UpdateTradePacket',
    /**
     * Syncs client with server voxel shape data on world join. This packet contains a copy of all behavior pack voxel shapes data.
     */
    VoxelShapesPacket = 'VoxelShapesPacket',
}

/**
 * @seeExample simpleHttpRequest.ts
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * Cancels all pending requests.
     *
     * @earlyExecution
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     *
     * @earlyExecution
     *
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     *
     * @earlyExecution
     *
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     * @seeExample simpleHttpRequest.ts
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpHeader {
    /**
     * @remarks
     * Key of the HTTP header.
     *
     * @earlyExecution
     *
     */
    key: string;
    /**
     * @remarks
     * Value of the HTTP header.
     *
     * @earlyExecution
     *
     */
    value: SecretString | string;
    constructor(key: string, value: SecretString | string);
}

/**
 * Main object for structuring a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpRequest {
    /**
     * @remarks
     * Content of the body of the HTTP request.
     *
     * @earlyExecution
     *
     */
    body: string;
    /**
     * @remarks
     * A collection of HTTP headers to add to the outbound request.
     *
     * @earlyExecution
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * @earlyExecution
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * @earlyExecution
     *
     */
    timeout: number;
    /**
     * @remarks
     * The HTTP resource to access.
     *
     * @earlyExecution
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * @earlyExecution
     *
     */
    addHeader(key: string, value: SecretString | string): HttpRequest;
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     *
     * @earlyExecution
     *
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * @earlyExecution
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * @earlyExecution
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    setTimeout(timeout: number): HttpRequest;
}

/**
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    private constructor();
    /**
     * @remarks
     * Body content of the HTTP response.
     *
     */
    readonly body: string;
    /**
     * @remarks
     * A collection of HTTP response headers returned from the
     * request.
     *
     */
    readonly headers: HttpHeader[];
    /**
     * @remarks
     * Information that was used to formulate the HTTP response
     * that this object represents.
     *
     */
    readonly request: HttpRequest;
    /**
     * @remarks
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     *
     */
    readonly status: number;
}

export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}

/**
 * Sent as the server receives a network packet from a client.
 * If cancelled, the server will not parse the network packet
 * and will silently ignore it.
 */
export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * The size of the network packet in bytes.
     *
     */
    readonly packetSize: number;
    /**
     * @remarks
     * Which client sent the network packet to the game server.
     *
     */
    readonly sender?: Player;
}

/**
 * Sent as the server sends a network packet to clients.  If
 * cancelled, the server will not send the network packet to
 * the receiving clients.
 */
export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * Which clients the network packet is being sent to.
     *
     */
    readonly recipients: (Player | undefined)[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketSendBeforeEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PacketSendBeforeEvent) => void): void;
}

/**
 * Options for events triggered by network packets.
 */
export interface PacketEventOptions {
    /**
     * @remarks
     * If provided, packet IDs in this list will not trigger the
     * event subscriptions.
     *
     */
    ignoredPacketIds?: PacketId[];
    /**
     * @remarks
     * If provided only packet IDs in this list will trigger the
     * event subscriptions.
     *
     */
    monitoredPacketIds?: PacketId[];
}

/**
 * An error thrown when an HTTP request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestBodyTooLargeError extends Error {
    private constructor();
    /**
     * @remarks
     * Configured maximum body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly maxBytes: number;
    /**
     * @remarks
     * Request body size in bytes.
     *
     * @earlyExecution
     *
     */
    readonly providedBytes: number;
}

/**
 * An error thrown when the maximum number of concurrent HTTP
 * requests has been reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of requests already in flight when rejected.
     *
     * @earlyExecution
     *
     */
    readonly inFlightRequests: number;
    /**
     * @remarks
     * Configured maximum concurrent HTTP requests.
     *
     * @earlyExecution
     *
     */
    readonly maxConcurrentRequests: number;
}

/**
 * An error thrown when an HTTP request targets a URI that is
 * not in the configured allow list.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestNotAllowedError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected because it is not allowed.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}

/**
 * An error thrown when HTTPS is required but a non-HTTPS URI
 * was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpsOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected for not using HTTPS.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}

/**
 * An error thrown when a platform-level HTTP error occurs.
 * Information provided in this class may be useful for
 * diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalHttpRequestError extends Error {
    private constructor();
    /**
     * @remarks
     * The platform-provided numeric error code for the error.
     *
     * @earlyExecution
     *
     */
    readonly code: number;
    /**
     * @remarks
     * The platform-provided message for the error.
     *
     * @earlyExecution
     *
     */
    readonly message: string;
}

/**
 * An error thrown when a malformed HTTP request is attempted
 * to be sent.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MalformedHttpRequestError extends Error {
    private constructor();
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;
