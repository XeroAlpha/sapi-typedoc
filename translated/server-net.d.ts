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
 * `@minecraft/server-net` 模块包含了用于发起基于 HTTP 的请求的类型。
 * 此模块仅可用于基岩版专用服务器。
 * 
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
import { ISerializable, Player } from '@minecraft/server';
import { SecretString } from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * 表示 HTTP DELETE 请求。
     * DELETE 通常用于描述删除指定的资源。
     * 
     * Represents the method for an HTTP DELETE request. DELETE
     * requests are used to delete the specified resource from the
     * server.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * 表示 HTTP GET 请求。
     * GET 请求通常用于获取指定资源的信息。
     * 
     * Represents the method for an HTTP GET request. GET requests
     * are commonly used to retrieve data from the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * 表示 HTTP HEAD 请求。
     * HEAD 请求类似于 GET 请求，但通常用于仅需要获取指定资源的 HTTP 响应标头，不需要获取响应主体的情况。
     * 
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
     * 表示 HTTP POST 请求。
     * POST 请求通常用于在指定 URI 下创建新资源。
     * 
     * Represents the method for an HTTP POST request. POST
     * requests are commonly used to submit data to be processed to
     * the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * 表示 HTTP PUT 请求。
     * PUT 请求通常用于更新某个已存在于资源集合中的资源。
     * 
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}

export enum HttpStatusCode {
    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultiStatus = 207,
    AlreadyReported = 208,
    IMUsed = 226,
    MultipleChoices = 300,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    RequestURITooLong = 414,
    UnsupportedMediaType = 415,
    RequestedRangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    MisdirectedRequest = 421,
    UnprocessableEntity = 422,
    Locked = 423,
    FailedDependency = 424,
    TooEarly = 425,
    UpgradeRequired = 426,
    PreconditionRequired = 428,
    TooManyRequests = 429,
    RequestHeaderFieldsTooLarge = 431,
    ConnectionClosedWithoutResponse = 444,
    UnavailableForLegalReasons = 451,
    ClientRequestTimeout = 498,
    ClientClosedRequest = 499,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507,
    LoopDetected = 508,
    NotExtended = 510,
    NetworkAuthenticationRequired = 511,
    NetworkConnectionTimeoutError = 599,
}

/**
 * Represents the unique type of network packet.
 */
export enum PacketId {
    /**
     * All kinds of actor state changes (see Actor::handleEntityEvent).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ActorEventPacket.html
     */
    ActorEventPacket = 'ActorEventPacket',
    /**
     * Player clicks on an actor in the world, eg a chicken.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ActorPickRequestPacket.html
     */
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    /**
     * Add Actor
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddActorPacket.html
     */
    AddActorPacket = 'AddActorPacket',
    /**
     * Add Behavior Tree
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddBehaviorTreePacket.html
     */
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    /**
     * When an item actor is added to the world (punch a tree->tree block, for example)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddItemActorPacket.html
     */
    AddItemActorPacket = 'AddItemActorPacket',
    /**
     * Sends the information for a new painting actor from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddPaintingPacket.html
     */
    AddPaintingPacket = 'AddPaintingPacket',
    /**
     * Add Player
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddPlayerPacket.html
     */
    AddPlayerPacket = 'AddPlayerPacket',
    /**
     * Sends a volume entity's definition and components from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AddVolumeEntityPacket.html
     */
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    /**
     * packet containing data of Agent Action Type
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AgentActionEventPacket.html
     */
    AgentActionEventPacket = 'AgentActionEventPacket',
    /**
     * Broadcasted to other players when an Agent performs an animation so it gets properly replicated.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AgentAnimationPacket.html
     */
    AgentAnimationPacket = 'AgentAnimationPacket',
    /**
     * The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AnimateEntityPacket.html
     */
    AnimateEntityPacket = 'AnimateEntityPacket',
    /**
     * Animate Actor
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AnimatePacket.html
     */
    AnimatePacket = 'AnimatePacket',
    /**
     * Requests an anvil to be damaged.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AnvilDamagePacket.html
     */
    AnvilDamagePacket = 'AnvilDamagePacket',
    /**
     * Initiates websocket connection
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AutomationClientConnectPacket.html
     */
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    /**
     * Sends the whole list of actor identifiers at game start from the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AvailableActorIdentifiersPacket.html
     */
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    /**
     * Contains all the available commands.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AvailableCommandsPacket.html
     */
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    /**
     * Contains the ID of the achievement to award
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/AwardAchievementPacket.html
     */
    AwardAchievementPacket = 'AwardAchievementPacket',
    /**
     * On world start, send clients the info for all available biomes.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BiomeDefinitionListPacket.html
     */
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    /**
     * Sends the entire user data compound tag and the block position to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BlockActorDataPacket.html
     */
    BlockActorDataPacket = 'BlockActorDataPacket',
    /**
     * Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BlockEventPacket.html
     */
    BlockEventPacket = 'BlockEventPacket',
    /**
     * Player picks up a block in the world; client to server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BlockPickRequestPacket.html
     */
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    /**
     * Sends the updated state of the Book and Quill item from client to server during use.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BookEditPacket.html
     */
    BookEditPacket = 'BookEditPacket',
    /**
     * Sent when a boss gets updated
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/BossEventPacket.html
     */
    BossEventPacket = 'BossEventPacket',
    /**
     * Camera aim-assist actor priority data sent from the server to clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraAimAssistActorPriorityPacket.html
     */
    CameraAimAssistActorPriorityPacket = 'CameraAimAssistActorPriorityPacket',
    /**
     * CameraAimAssist
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraAimAssistPacket.html
     */
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    /**
     * Camera aim-assist registry presets/categories data sent from the server to clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraAimAssistPresetsPacket.html
     */
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    /**
     * Used to send a CameraInstruction from the server to the specified clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraInstructionPacket.html
     */
    CameraInstructionPacket = 'CameraInstructionPacket',
    /**
     * Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraPacket.html
     */
    CameraPacket = 'CameraPacket',
    /**
     * Used to sync CameraPresets data from server to clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraPresetsPacket.html
     */
    CameraPresetsPacket = 'CameraPresetsPacket',
    /**
     * Used to control trigger camera shake movements on the client's player camera
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraShakePacket.html
     */
    CameraShakePacket = 'CameraShakePacket',
    /**
     * Camera custom spline data sent from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CameraSplinePacket.html
     */
    CameraSplinePacket = 'CameraSplinePacket',
    /**
     * The server sends this packet from the level to kick off dimension changing process.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ChangeDimensionPacket.html
     */
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    /**
     * packet containing data for changing mob property
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ChangeMobPropertyPacket.html
     */
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    /**
     * Sent when the world is loading. We don't know why it is sent four times. Defines the tick distance.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ChunkRadiusUpdatedPacket.html
     */
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    /**
     * Syncs Attribute Layers to the Client (Currently disabled)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundAttributeLayerSyncPacket.html
     */
    ClientboundAttributeLayerSyncPacket = 'ClientboundAttributeLayerSyncPacket',
    /**
     * Sent from the server to client to force close all server forms on the stack and return to the HUD screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundCloseFormPacket.html
     */
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    /**
     * Set the control scheme that the player should use
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundControlSchemeSetPacket.html
     */
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    /**
     * Allows the server to tell the client to close Data Driven UI screens.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundDataDrivenUICloseScreenPacket.html
     */
    ClientboundDataDrivenUICloseScreenPacket = 'ClientboundDataDrivenUICloseScreenPacket',
    /**
     * Allows the server to tell the client to reload the Data Driven UI.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundDataDrivenUIReloadPacket.html
     */
    ClientboundDataDrivenUIReloadPacket = 'ClientboundDataDrivenUIReloadPacket',
    /**
     * Allows the server to tell the client to show a Data Driven UI screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundDataDrivenUIShowScreenPacket.html
     */
    ClientboundDataDrivenUIShowScreenPacket = 'ClientboundDataDrivenUIShowScreenPacket',
    /**
     * Sends a list of data store properties from the server to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundDataStorePacket.html
     */
    ClientboundDataStorePacket = 'ClientboundDataStorePacket',
    /**
     * Used to add/remove debug rendering objects.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundDebugRendererPacket.html
     */
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    /**
     * Map item data including pixels, decorations, and creation info
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundMapItemDataPacket.html
     */
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    /**
     * Sends a set of update properties for the texture shift system from the server to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundTextureShiftPacket.html
     */
    ClientboundTextureShiftPacket = 'ClientboundTextureShiftPacket',
    /**
     * Sent to update sound data.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientboundUpdateSoundDataPacket.html
     */
    ClientboundUpdateSoundDataPacket = 'ClientboundUpdateSoundDataPacket',
    /**
     * Client Cache Blob Status Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientCacheBlobStatusPacket.html
     */
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    /**
     * Only active in a real client-server scenario. This packet is just a list of <blobId, blob> pairs sent from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientCacheMissResponsePacket.html
     */
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    /**
     * It is sent by the Client once, at login, to communicate if it supports the cache or not.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientCacheStatusPacket.html
     */
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    /**
     * Client-side activation of aim-assist
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientCameraAimAssistPacket.html
     */
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    /**
     * Sends client movement prediction information to the server
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientMovementPredictionSyncPacket.html
     */
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    /**
     * Sets up encryption and authenticates in educational version once at level startup from client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ClientToServerHandshakePacket.html
     */
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    /**
     * Code Builder Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CodeBuilderPacket.html
     */
    CodeBuilderPacket = 'CodeBuilderPacket',
    /**
     * This is EDU exclusive, used in getInterface() of WebviewSystem
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CodeBuilderSourcePacket.html
     */
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    /**
     * Command Block Update
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CommandBlockUpdatePacket.html
     */
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    /**
     * "slash" command execution output, server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CommandOutputPacket.html
     */
    CommandOutputPacket = 'CommandOutputPacket',
    /**
     * "slash" command execution, client to server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CommandRequestPacket.html
     */
    CommandRequestPacket = 'CommandRequestPacket',
    /**
     * Send server to client to complete the using item process. An example is when you finish drinking or eating.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CompletedUsingItemPacket.html
     */
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    /**
     * After the game deletes the container manager on the client, the client sends this packet.
     *     Then the server deletes its container manager, and sends a packet back to the client that closes the container screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ContainerClosePacket.html
     */
    ContainerClosePacket = 'ContainerClosePacket',
    /**
     * Sent from the server so that the client knows to open the container screen and do the chest opening animation.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ContainerOpenPacket.html
     */
    ContainerOpenPacket = 'ContainerOpenPacket',
    /**
     * This is used to trigger a clientside cleanup of the dynamic container registry.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ContainerRegistryCleanupPacket.html
     */
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    /**
     * This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ContainerSetDataPacket.html
     */
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    /**
     * Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CorrectPlayerMovePredictionPacket.html
     */
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    /**
     * Crafting Data
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CraftingDataPacket.html
     */
    CraftingDataPacket = 'CraftingDataPacket',
    /**
     * Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CreatePhotoPacket.html
     */
    CreatePhotoPacket = 'CreatePhotoPacket',
    /**
     * Creative Content
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CreativeContentPacket.html
     */
    CreativeContentPacket = 'CreativeContentPacket',
    /**
     * Informs the client of which Structure Feature they are currently occupying.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/CurrentStructureFeaturePacket.html
     */
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    /**
     * Sent from the server to client when player dies (Level::onPlayerDeath).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/DeathInfoPacket.html
     */
    DeathInfoPacket = 'DeathInfoPacket',
    /**
     * The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/DebugInfoPacket.html
     */
    DebugInfoPacket = 'DebugInfoPacket',
    /**
     * Brief packet containing data-driven dimension properties
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/DimensionDataPacket.html
     */
    DimensionDataPacket = 'DimensionDataPacket',
    /**
     * Sent from the server to a client to trigger a disconnection.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/DisconnectPacket.html
     */
    DisconnectPacket = 'DisconnectPacket',
    /**
     * General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/EditorNetworkPacket.html
     */
    EditorNetworkPacket = 'EditorNetworkPacket',
    /**
     * Transmits EducationLevelSettings to all clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/EducationSettingsPacket.html
     */
    EducationSettingsPacket = 'EducationSettingsPacket',
    /**
     * Transmits Edu Shared Uri Resource settings to all clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/EduUriResourcePacket.html
     */
    EduUriResourcePacket = 'EduUriResourcePacket',
    /**
     * Allows clients to download emotes that other clients have equipped.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/EmoteListPacket.html
     */
    EmoteListPacket = 'EmoteListPacket',
    /**
     * A client sends this to the server to notify other clients about the emote.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/EmotePacket.html
     */
    EmotePacket = 'EmotePacket',
    /**
     * This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/FeatureRegistryPacket.html
     */
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    /**
     * Updates game rules.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/GameRulesChangedPacket.html
     */
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    /**
     * Internal Text Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/GameTestRequestPacket.html
     */
    GameTestRequestPacket = 'GameTestRequestPacket',
    /**
     * Game Test Results Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/GameTestResultsPacket.html
     */
    GameTestResultsPacket = 'GameTestResultsPacket',
    /**
     * Sent from the server to the client when a server script changes the rendering settings
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/GraphicsOverrideParameterPacket.html
     */
    GraphicsOverrideParameterPacket = 'GraphicsOverrideParameterPacket',
    /**
     * The server telling the client what item slot to hover over in the hotbar.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/GuiDataPickItemPacket.html
     */
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    /**
     * Hurt Armor
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/HurtArmorPacket.html
     */
    HurtArmorPacket = 'HurtArmorPacket',
    /**
     * Interact
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/InteractPacket.html
     */
    InteractPacket = 'InteractPacket',
    /**
     * This is used for updating an entire container. Example uses include: player respawned, replace items command, 3rd party content calls sendInventory(), block picking.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/InventoryContentPacket.html
     */
    InventoryContentPacket = 'InventoryContentPacket',
    /**
     * Updates one slot in an inventory rather than the whole thing. So like animal inventory (horses, donkeys, etc) and chests. Hotbar, offhand, and some player inventory changes.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/InventorySlotPacket.html
     */
    InventorySlotPacket = 'InventorySlotPacket',
    /**
     * Inventory Transaction. Sent for item interaction UI depending on if ItemStackNetManager is enabled as well as when the player uses items in gameplay. See ComplexInventoryTransaction::Type for more details.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/InventoryTransactionPacket.html
     */
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    /**
     * Item data from the server. Contains component information.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ItemRegistryPacket.html
     */
    ItemRegistryPacket = 'ItemRegistryPacket',
    /**
     * The new server auth inventory item transaction request. This is done in batches of items.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ItemStackRequestPacket.html
     */
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    /**
     * Server auth inventory item transaction response, sent from the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ItemStackResponsePacket.html
     */
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    /**
     * Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/JigsawStructureDataPacket.html
     */
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    /**
     * For the EDU Chemistry Lab Table block actor.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LabTablePacket.html
     */
    LabTablePacket = 'LabTablePacket',
    /**
     * This is used for the Lectern Block Actor.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LecternUpdatePacket.html
     */
    LecternUpdatePacket = 'LecternUpdatePacket',
    /**
     * Sends telemetry events to the client so the client can then send that on to the eventing system
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LegacyTelemetryEventPacket.html
     */
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    /**
     * Lesson Progress
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LessonProgressPacket.html
     */
    LessonProgressPacket = 'LessonProgressPacket',
    /**
     * Level Chunk Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LevelChunkPacket.html
     */
    LevelChunkPacket = 'LevelChunkPacket',
    /**
     * LevelEventGenericPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LevelEventGenericPacket.html
     */
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    /**
     * Splash Potions, weather events, global pause, simlock commands, oh my!
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LevelEventPacket.html
     */
    LevelEventPacket = 'LevelEventPacket',
    /**
     * Level Sound Event
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LevelSoundEventPacket.html
     */
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    /**
     * Syncs LocatorBar changes on the server with the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LocatorBarPacket.html
     */
    LocatorBarPacket = 'LocatorBarPacket',
    /**
     * Sent once from client to server at login. About 100k.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/LoginPacket.html
     */
    LoginPacket = 'LoginPacket',
    /**
     * This is fired when the user locks a map item utilizing the Cartography Table in game.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MapCreateLockedCopyPacket.html
     */
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    /**
     * In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MapInfoRequestPacket.html
     */
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    /**
     * Mob Armor Equipment
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MobArmorEquipmentPacket.html
     */
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    /**
     * Mob Effect
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MobEffectPacket.html
     */
    MobEffectPacket = 'MobEffectPacket',
    /**
     * Mob Equipment. Changes to any mob's held/offhand item are fired from server to client with this packet. Clients also send this to the server when their held slot or its contents change.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MobEquipmentPacket.html
     */
    MobEquipmentPacket = 'MobEquipmentPacket',
    /**
     * Modal Form Request
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ModalFormRequestPacket.html
     */
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    /**
     * Fired in response to third party server request to show the custom UI screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ModalFormResponsePacket.html
     */
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    /**
     * It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MotionPredictionHintsPacket.html
     */
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    /**
     * This is used primarily for motion updates of all actors from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MoveActorAbsolutePacket.html
     */
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    /**
     * This packet is all the deltas of actors position, rotation, and head rotation. This is used for all actors.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MoveActorDeltaPacket.html
     */
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    /**
     * These packets are sent to the client to update specific MovementEffects
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MovementEffectPacket.html
     */
    MovementEffectPacket = 'MovementEffectPacket',
    /**
     * For client authoritative and server authoritative movement modes, it is only intended as a client-bound packet. It forces the player to a specified position with slightly different behavior depending on the position mode.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MovePlayerPacket.html
     */
    MovePlayerPacket = 'MovePlayerPacket',
    /**
     * Syncs multiplayer settings
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/MultiplayerSettingsPacket.html
     */
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    /**
     * Tells clients to update the chunk view for the local player.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/NetworkChunkPublisherUpdatePacket.html
     */
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    /**
     * Sends tunable options from host to client (compression threshold and algorithm)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/NetworkSettingsPacket.html
     */
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    /**
     * Ping Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/NetworkStackLatencyPacket.html
     */
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    /**
     * Sent from the server to client when remote firing an NPC dialogue window for a client
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/NpcDialoguePacket.html
     */
    NpcDialoguePacket = 'NpcDialoguePacket',
    /**
     * Used for a number of interactions with the NPC Component
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/NpcRequestPacket.html
     */
    NpcRequestPacket = 'NpcRequestPacket',
    /**
     * On-Screen Texture Animation
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/OnScreenTextureAnimationPacket.html
     */
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    /**
     * Sent from the server so that the client knows to open the sign screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/OpenSignPacket.html
     */
    OpenSignPacket = 'OpenSignPacket',
    /**
     * This is sent when the client detects a malformed packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PacketViolationWarningPacket.html
     */
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    /**
     * Sent by the client to provide additional client metadata.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PartyChangedPacket.html
     */
    PartyChangedPacket = 'PartyChangedPacket',
    /**
     * Sent by the client to the server with a party destination cookie response.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PartyDestinationCookieResponsePacket.html
     */
    PartyDestinationCookieResponsePacket = 'PartyDestinationCookieResponsePacket',
    /**
     * There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PhotoTransferPacket.html
     */
    PhotoTransferPacket = 'PhotoTransferPacket',
    /**
     * Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerActionPacket.html
     */
    PlayerActionPacket = 'PlayerActionPacket',
    /**
     * Sent from server whenever the player's armor takes damage.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerArmorDamagePacket.html
     */
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    /**
     * Player Auth Input
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerAuthInputPacket.html
     */
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    /**
     * Sends the of new Enchanting options  from the server when a player right clicks the enchantment table.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerEnchantOptionsPacket.html
     */
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    /**
     * Player Fog Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerFogPacket.html
     */
    PlayerFogPacket = 'PlayerFogPacket',
    /**
     * Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, or replace item command or if the serverplayer uses _sendAdditionalLevelData(). 
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerHotbarPacket.html
     */
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    /**
     * Player List
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerListPacket.html
     */
    PlayerListPacket = 'PlayerListPacket',
    /**
     * Updates the client with the position of a player outside simulation distance, or hides a player.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerLocationPacket.html
     */
    PlayerLocationPacket = 'PlayerLocationPacket',
    /**
     * Used when the player changes their skin
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerSkinPacket.html
     */
    PlayerSkinPacket = 'PlayerSkinPacket',
    /**
     * Player Start Item Cooldown
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerStartItemCooldownPacket.html
     */
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    /**
     * PlayerToggleCrafterSlotRequestPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerToggleCrafterSlotRequestPacket.html
     */
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    /**
     * Player Update Entity Overrides
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayerUpdateEntityOverridesPacket.html
     */
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    /**
     * This packet is only used via command or script event. This is for 3rd party content.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlaySoundPacket.html
     */
    PlaySoundPacket = 'PlaySoundPacket',
    /**
     * Describes the login status of the player
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PlayStatusPacket.html
     */
    PlayStatusPacket = 'PlayStatusPacket',
    /**
     * Position Tracking DB Client Request
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PositionTrackingDBClientRequestPacket.html
     */
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    /**
     * Server to client packet for server authoratative runtime database (with persistent LevelStorage backup) designed primarily to track lodestone stuff. See Position Tracking DB Notes.md in bedrock-docs.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PositionTrackingDBServerBroadcastPacket.html
     */
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    /**
     * Send primitive drawing shape info (from scripting) to the client for rendering
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PrimitiveShapesPacket.html
     */
    PrimitiveShapesPacket = 'PrimitiveShapesPacket',
    /**
     * Sent from client to server
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/PurchaseReceiptPacket.html
     */
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    /**
     * Refresh Entitlements
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RefreshEntitlementsPacket.html
     */
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    /**
     * Occasionally, during the server player tick some time is taken to remove nearby actors from the world.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RemoveActorPacket.html
     */
    RemoveActorPacket = 'RemoveActorPacket',
    /**
     * Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RemoveObjectivePacket.html
     */
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    /**
     * Sends a volume entity to be removed from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RemoveVolumeEntityPacket.html
     */
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    /**
     * Sent from client to server. Used to request an ability change.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RequestAbilityPacket.html
     */
    RequestAbilityPacket = 'RequestAbilityPacket',
    /**
     * The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RequestChunkRadiusPacket.html
     */
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    /**
     * Requests tunable options from host to client (compression threshold and algorithm).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RequestNetworkSettingsPacket.html
     */
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    /**
     * Sent from client to server. Used to request a new Permissions Levels.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RequestPermissionsPacket.html
     */
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    /**
     * Resource Pack Chunk Data
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePackChunkDataPacket.html
     */
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    /**
     * Resource Pack Chunk Request
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePackChunkRequestPacket.html
     */
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    /**
     * Resource Pack Client Response
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePackClientResponsePacket.html
     */
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    /**
     * Resource Pack Data Info
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePackDataInfoPacket.html
     */
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    /**
     * Resource Packs Info
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePacksInfoPacket.html
     */
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    /**
     * Used to inform the server that the client has finished loading all resource packs.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePacksReadyForValidationPacket.html
     */
    ResourcePacksReadyForValidationPacket = 'ResourcePacksReadyForValidationPacket',
    /**
     * Resource Pack Stack
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ResourcePackStackPacket.html
     */
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    /**
     * Sent as a handshake between the client and server to respawn the player.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/RespawnPacket.html
     */
    RespawnPacket = 'RespawnPacket',
    /**
     * Used to send custom messages between client and server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ScriptMessagePacket.html
     */
    ScriptMessagePacket = 'ScriptMessagePacket',
    /**
     * Sent by the server to a client with a party destination cookie.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SendPartyDestinationCookiePacket.html
     */
    SendPartyDestinationCookiePacket = 'SendPartyDestinationCookiePacket',
    /**
     * Sent from the client to the server when a data driven screen is closed.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerboundDataDrivenScreenClosedPacket.html
     */
    ServerboundDataDrivenScreenClosedPacket = 'ServerboundDataDrivenScreenClosedPacket',
    /**
     * Applies a single update to the server data store from the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerboundDataStorePacket.html
     */
    ServerboundDataStorePacket = 'ServerboundDataStorePacket',
    /**
     * Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerboundDiagnosticsPacket.html
     */
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    /**
     * Sent from the client to the server to message to the server about the state of the loading screen.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerboundLoadingScreenPacket.html
     */
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    /**
     * Sent from the client to the server when players change Pack Settings (pack UI).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerboundPackSettingChangePacket.html
     */
    ServerboundPackSettingChangePacket = 'ServerboundPackSettingChangePacket',
    /**
     * Used to send a player's server position to the respective client at the end of movement.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerPlayerPostMovePositionPacket.html
     */
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    /**
     * Sent by the server to provide PresenceConfiguration to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerPresenceInfoPacket.html
     */
    ServerPresenceInfoPacket = 'ServerPresenceInfoPacket',
    /**
     * Sent during the initialization of world settings on the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerSettingsRequestPacket.html
     */
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    /**
     * Server Settings Response
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerSettingsResponsePacket.html
     */
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    /**
     * Used to send performance and other valuable stats back to the client
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerStatsPacket.html
     */
    ServerStatsPacket = 'ServerStatsPacket',
    /**
     * Sent by the server to provide ClientStoreEntryPointConfiguration to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerStoreInfoPacket.html
     */
    ServerStoreInfoPacket = 'ServerStoreInfoPacket',
    /**
     * Server->Client Handshake
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ServerToClientHandshakePacket.html
     */
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    /**
     * Regular Actor Data delta packets, sent from the level on tick, mob and actor during normal tick
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetActorDataPacket.html
     */
    SetActorDataPacket = 'SetActorDataPacket',
    /**
     * Sent by both client and server, only received by LegacyClientHandler.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetActorLinkPacket.html
     */
    SetActorLinkPacket = 'SetActorLinkPacket',
    /**
     * This is used for the server to set the velocity of a client actor.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetActorMotionPacket.html
     */
    SetActorMotionPacket = 'SetActorMotionPacket',
    /**
     * This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetCommandsEnabledPacket.html
     */
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    /**
     * Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetDefaultGameTypePacket.html
     */
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    /**
     * Set Difficulty
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetDifficultyPacket.html
     */
    SetDifficultyPacket = 'SetDifficultyPacket',
    /**
     * Sent from the server for 3rd party content to display current objectives and status
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetDisplayObjectivePacket.html
     */
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    /**
     * This packet is sent to the client when the player is spawned in and when they respawn.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetHealthPacket.html
     */
    SetHealthPacket = 'SetHealthPacket',
    /**
     * This packet is only used via the set hud command. This is for 3rd party content.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetHudPacket.html
     */
    SetHudPacket = 'SetHudPacket',
    /**
     * Any time a player is hit, the id of the last mob that attacked them is sent to the client
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetLastHurtByPacket.html
     */
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    /**
     * Set Local Player As Initialized
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetLocalPlayerAsInitializedPacket.html
     */
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    /**
     * Set Player Game Type
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetPlayerGameTypePacket.html
     */
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    /**
     * SetPlayerInventoryOptionsPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetPlayerInventoryOptionsPacket.html
     */
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    /**
     * Set Scoreboard Identity
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetScoreboardIdentityPacket.html
     */
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    /**
     * Set Score
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetScorePacket.html
     */
    SetScorePacket = 'SetScorePacket',
    /**
     * When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetSpawnPositionPacket.html
     */
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    /**
     * Set Time
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetTimePacket.html
     */
    SetTimePacket = 'SetTimePacket',
    /**
     * Requests a setting to be changed through commands.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SettingsCommandPacket.html
     */
    SettingsCommandPacket = 'SettingsCommandPacket',
    /**
     * Used by 3rd party content for the purpose of showing ui banners
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SetTitlePacket.html
     */
    SetTitlePacket = 'SetTitlePacket',
    /**
     * Starts on server when the credits screen should pop up.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ShowCreditsPacket.html
     */
    ShowCreditsPacket = 'ShowCreditsPacket',
    /**
     * Show Profile
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ShowProfilePacket.html
     */
    ShowProfilePacket = 'ShowProfilePacket',
    /**
     * Used for redirecting a user to the right offer.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ShowStoreOfferPacket.html
     */
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    /**
     * This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SimpleEventPacket.html
     */
    SimpleEventPacket = 'SimpleEventPacket',
    /**
     * Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SimulationTypePacket.html
     */
    SimulationTypePacket = 'SimulationTypePacket',
    /**
     * Spawn Experience Orb
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SpawnExperienceOrbPacket.html
     */
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    /**
     * Tell client to spawn a particle effect.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SpawnParticleEffectPacket.html
     */
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    /**
     * Sent from the server to client when the game is starting (or client joins), gives ids and current tick.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/StartGamePacket.html
     */
    StartGamePacket = 'StartGamePacket',
    /**
     * Allows you to stop a sound or all sounds on all clients, only used in a /command
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/StopSoundPacket.html
     */
    StopSoundPacket = 'StopSoundPacket',
    /**
     * After the client makes changes in the Structure Block Screen we tell the server to update based off of that. This only sent when you close the UI.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/StructureBlockUpdatePacket.html
     */
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    /**
     * Used to request structure information from a server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/StructureTemplateDataRequestPacket.html
     */
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    /**
     * This is used in exporting from load, exporting from save, and querying saved structures from structure blocks.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/StructureTemplateDataResponsePacket.html
     */
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    /**
     * Sent from server to client representing a batch of subchunk data.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SubChunkPacket.html
     */
    SubChunkPacket = 'SubChunkPacket',
    /**
     * Sent from the client to the server representing a batch of subchunks that the client requests from the server
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SubChunkRequestPacket.html
     */
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    /**
     * This packet starts the login process of subclients (splitscreen)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SubClientLoginPacket.html
     */
    SubClientLoginPacket = 'SubClientLoginPacket',
    /**
     * Allows us to synchronize Actor properties across the network.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SyncActorPropertyPacket.html
     */
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    /**
     * Initializes and syncs world clocks from the server to clients. (Currently disabled)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/SyncWorldClocksPacket.html
     */
    SyncWorldClocksPacket = 'SyncWorldClocksPacket',
    /**
     * A packet sent to the server when deal with picking up an item off the ground in the world.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/TakeItemActorPacket.html
     */
    TakeItemActorPacket = 'TakeItemActorPacket',
    /**
     * Represents a text message that needs to be displayed in-game
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/TextPacket.html
     */
    TextPacket = 'TextPacket',
    /**
     * Used to inform the client that the server is waiting for ticking areas to finish preloading.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/TickingAreasLoadStatusPacket.html
     */
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    /**
     * Pushes a UI toast message to be displayed by the client
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/ToastRequestPacket.html
     */
    ToastRequestPacket = 'ToastRequestPacket',
    /**
     * Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/TransferPacket.html
     */
    TransferPacket = 'TransferPacket',
    /**
     * Sent from the server on level startup to send all trim patterns to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/TrimDataPacket.html
     */
    TrimDataPacket = 'TrimDataPacket',
    /**
     * Sent from server to client, for all previously unlocked recipes on load and for any newly unlocked recipes during gameplay.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UnlockedRecipesPacket.html
     */
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    /**
     * Sent by the server to update the state of a player's Abilities.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateAbilitiesPacket.html
     */
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    /**
     * UpdateAdventureSettingsPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateAdventureSettingsPacket.html
     */
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    /**
     * Update Attributes
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateAttributesPacket.html
     */
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    /**
     * Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateBlockPacket.html
     */
    UpdateBlockPacket = 'UpdateBlockPacket',
    /**
     * Used to sync moving blocks with clients so they render correctly
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateBlockSyncedPacket.html
     */
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    /**
     * UpdateClientInputLocksPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateClientInputLocksPacket.html
     */
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    /**
     * Sync the player's options (mostly settings) to the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateClientOptionsPacket.html
     */
    UpdateClientOptionsPacket = 'UpdateClientOptionsPacket',
    /**
     * Seemingly only used for the Horse Inventory... More specifically when the player opens the horse inventory.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateEquipPacket.html
     */
    UpdateEquipPacket = 'UpdateEquipPacket',
    /**
     * The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdatePlayerGameTypePacket.html
     */
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    /**
     * This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateSoftEnumPacket.html
     */
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    /**
     * Packet sent for every set of blocks changed in a sub chunk every tick.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateSubChunkBlocksPacket.html
     */
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    /**
     * This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/UpdateTradePacket.html
     */
    UpdateTradePacket = 'UpdateTradePacket',
    /**
     * Syncs client with server voxel shape data on world join. This packet contains a copy of all behavior pack voxel shapes data and is used by StartGamePacket.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/docs/VoxelShapesPacket.html
     */
    VoxelShapesPacket = 'VoxelShapesPacket',
}

export enum WebSocketClientCloseReasons {
    /**
     * @remarks
     * The server has closed the socket.
     *
     */
    ClosedByServer = 0,
    /**
     * @remarks
     * The client has closed the socket.
     *
     */
    ClosedByClient = 1,
    /**
     * @remarks
     * The client has received payloads whose body exceeds the
     * configured maximum size allowed per tick so the client has
     * closed the socket.
     *
     */
    IncomingPayloadsTooLarge = 2,
}

export class CloseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): (arg0: WebSocketClientCloseAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): void;
}

/**
 * @seeExample simpleHttpRequest.ts
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * 取消所有尚未完成的请求。
     * 
     * Cancels all pending requests.
     * @param reason 提供给请求对应的 Promise 的 reject 原因。
     *
     * @earlyExecution
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * 发起一个 HTTP GET 请求。
     * 
     * Performs a simple HTTP get request.
     *
     * @earlyExecution
     *
     * @param uri
     * 请求的 URL。
     * 
     * URL to make an HTTP Request to.
     * @returns
     * 解析到对应响应的 Promise。
     * 
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * 发起一个 HTTP 请求。
     * Performs an HTTP request.
     *
     * @earlyExecution
     *
     * @param config
     * 用于发起请求的配置对象。
     * 
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * 解析到对应响应的 Promise。
     * 
     * An awaitable promise that contains the HTTP response.
     * @seeExample simpleHttpRequest.ts
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/**
 * 表示一个请求标头，即包含了请求元数据的键值对。
 * 
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpHeader {
    /**
     * @remarks
     * 请求标头的键。
     * 
     * Key of the HTTP header.
     *
     * @earlyExecution
     *
     */
    key: string;
    /**
     * @remarks
     * 请求标头的值。
     * 
     * Value of the HTTP header.
     *
     * @earlyExecution
     *
     */
    value: SecretString | string;
    constructor(key: string, value: SecretString | string);
}

/**
 * 包含构成 HTTP 请求所需的参数。主要用于发起请求。
 * 
 * Main object for structuring a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpRequest {
    /**
     * @remarks
     * 请求的携带的主体负载内容。
     * 
     * Content of the body of the HTTP request.
     *
     * @earlyExecution
     *
     */
    body: ISerializable | string;
    /**
     * @remarks
     * 该请求的请求标头集合。
     * 
     * A collection of HTTP headers to add to the outbound request.
     *
     * @earlyExecution
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * 该请求的请求方法（例如 GET、PUT 或 PATCH）。
     * 
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * @earlyExecution
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * 在请求被视为超时而取消前的最大时长，单位为秒。
     * 
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * @earlyExecution
     *
     */
    timeout: number;
    /**
     * @remarks
     * 请求访问的资源 URI。
     * 
     * The HTTP resource to access.
     *
     * @earlyExecution
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * 向当前请求中增加一个请求标头。
     * 
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * @earlyExecution
     *
     */
    addHeader(key: string, value: SecretString | string): HttpRequest;
    /**
     * @remarks
     * 将请求的主体负载内容设定为指定内容。
     * 
     * Updates the content of the body of the HTTP request.
     *
     * @earlyExecution
     *
     */
    setBody(body: ISerializable | string): HttpRequest;
    /**
     * @remarks
     * 使用指定的请求标头集合增加或替换请求中指定的请求标头。
     * 
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * @earlyExecution
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * 设置该请求的请求方法（例如 GET、PUT 或 PATCH）。
     * 
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * @earlyExecution
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * Sets the maximum amount of time, in seconds, before the
     * request times out and is cancelled.
     *
     * 设置请求超时并被取消前的最大时间（以秒为单位）。
     * 
     * @earlyExecution
     *
     * @param timeout
     * The timeout value, in seconds.
     */
    setTimeout(timeout: number): HttpRequest;
}

/**
 * 表示一个 HTTP 响应。包含了请求及对应响应的相关信息。
 * 
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    private constructor();
    /**
     * @remarks
     * 响应的主体内容。
     * 
     * Body content of the HTTP response.
     *
     */
    readonly body: string;
    /**
     * @remarks
     * 通过请求返回的响应标头集合。
     * 
     * A collection of HTTP response headers returned from the
     * request.
     *
     */
    readonly headers: HttpHeader[];
    /**
     * @remarks
     * 该响应对应的请求参数信息。
     * 
     * Information that was used to formulate the HTTP response
     * that this object represents.
     *
     */
    readonly request: HttpRequest;
    /**
     * @remarks
     * 请求响应的状态代码。例如，404 表示未找到资源，500 则表示服务器内部错误。
     * 
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     *
     */
    readonly status: number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link SerializableParseError}
     */
    deserialize(identifier: string): ISerializable;
}

export class MessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WebSocketClientReceiveAfterEvent) => void,
    ): (arg0: WebSocketClientReceiveAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientReceiveAfterEvent) => void): void;
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
 * Used to manage WebSocket connections.
 */
export class WebSocket {
    private constructor();
    /**
     * @remarks
     * Attempts to connect a WebSocket client.
     *
     * @worldMutation
     *
     * @param uri
     * URL to make connection to.
     * @returns
     * An awaitable promise that contains the WebSocket client that
     * was connected.
     */
    connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>;
}

/**
 * An active WebSocket client.
 */
export class WebSocketClient {
    private constructor();
    /**
     * @remarks
     * Contains a set of events related to this WebSocket client.
     *
     */
    readonly afterEvents: WebSocketClientAfterEvents;
    /**
     * @remarks
     * Set to true if the socket is current connected to the
     * server.
     *
     */
    readonly isOpen: boolean;
    /**
     * @remarks
     * Closes the connection with the server.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link WebSocketNotConnectedError}
     */
    close(): void;
    /**
     * @remarks
     * Sends the provided payload to the server.
     *
     * @worldMutation
     *
     * @param payload
     * The payload that will be included in the network packet.
     * @throws This function can throw errors.
     *
     * {@link RequestBodyTooLargeError}
     *
     * {@link WebSocketNotConnectedError}
     */
    send(payload: string): void;
}

export class WebSocketClientAfterEvents {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly close: CloseAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly message: MessageAfterEventSignal;
}

export class WebSocketClientCloseAfterEvent {
    private constructor();
    readonly reason: WebSocketClientCloseReasons;
}

export class WebSocketClientReceiveAfterEvent {
    private constructor();
    readonly message: string;
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
     * @earlyExecution
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorMessage: string;
}

/**
 * An error thrown when a platform-level WebSocket error
 * occurs.  Information provided in this class may be useful
 * for diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalWebSocketError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly errorMessage: string;
}

/**
 * An error thrown when a malformed URI is used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MalformedUriError extends Error {
    private constructor();
}

/**
 * An error thrown when an network request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RequestBodyTooLargeError extends Error {
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

// @ts-ignore Class inheritance allowed for native defined classes
export class SerializableParseError extends Error {
    private constructor();
}

/**
 * An error thrown when secure URI scheme is required but a
 * non-secure URI was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TLSOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected for not using secure scheme.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}

/**
 * An error thrown when a network request targets a URI that is
 * not in the configured allow list.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UriNotAllowedError extends Error {
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
 * An error thrown when the connection with the WebSocket
 * server has failed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketConnectionFailedError extends Error {
    private constructor();
    /**
     * @remarks
     * The error code received when attempting to connect with the
     * server.
     *
     * @earlyExecution
     *
     */
    readonly errorCode: HttpStatusCode;
    /**
     * @remarks
     * The URI provided to make this connection attempt that
     * failed.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}

/**
 * An error that is thrown when the maximum number of connected
 * WebSockets is reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of WebSocket connections already active when
     * rejected.
     *
     * @earlyExecution
     *
     */
    readonly connectedSockets: number;
    /**
     * @remarks
     * Configured maximum active WebSocket connections.
     *
     * @earlyExecution
     *
     */
    readonly maxConcurrentConnections: number;
}

/**
 * An error thrown when attempting to use a WebSocket while the
 * socket is not connected to a server.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketNotConnectedError extends Error {
    private constructor();
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;
/**
 * @remarks
 * Used to manage WebSocket connections.
 *
 */
export const websocket: WebSocket;
