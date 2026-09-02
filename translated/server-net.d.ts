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
     * Ranges from a crossbow being ready to fire to taming animals..., some of which may be obsolete (frex, ADD_PLAYER_LEVELS)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/actor-event-packet/
     */
    ActorEventPacket = 'ActorEventPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/actor-pick-request-packet/
     */
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    /**
     * Newly created entities on server use AddActorPacket to notify clients that they exist.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-actor-packet/
     */
    AddActorPacket = 'AddActorPacket',
    /**
     * For automation
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-behavior-tree-packet/
     */
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-item-actor-packet/
     */
    AddItemActorPacket = 'AddItemActorPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-painting-packet/
     */
    AddPaintingPacket = 'AddPaintingPacket',
    /**
     * A new player joins the game; the server sends this packet to the other players.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-player-packet/
     */
    AddPlayerPacket = 'AddPlayerPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/add-volume-entity-packet/
     */
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/agent-action-event-packet/
     */
    AgentActionEventPacket = 'AgentActionEventPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/agent-animation-packet/
     */
    AgentAnimationPacket = 'AgentAnimationPacket',
    /**
     * Several properties can be specified in the following order:</br>
     *     - The name of the animation (a string) that the specified entities are to play.</br>
     *     - The next state to transition to (a string) once the specified animation is finished playing.</br>
     *     - The stop expression (a string), the condition that determines when to transition to the next state.</br>
     *     - The name of an animation controller (a string) that you would like to use.</br>
     *     - The blend out time (a float), the amount of time to blend out of this animation.</br>
     *     - A vector of ActorRuntimeIds of the entities that will play the specified animation.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/animate-entity-packet/
     */
    AnimateEntityPacket = 'AnimateEntityPacket',
    /**
     * Combination of server bound and client bound packets to trigger animations.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/animate-packet/
     */
    AnimatePacket = 'AnimatePacket',
    /**
     * 
     *     Only used when Item Stack Net Manager is disabled on the server.
     *     Sends the position of the anvil that is requesting to be damaged from the client.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/anvil-damage-packet/
     */
    AnvilDamagePacket = 'AnvilDamagePacket',
    /**
     * Only used though command to connect to server URLs. This is primarily used by EDU for connecting to their companion apps and other external applications through web sockets. Some mods/3rd party packs use it as well.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/automation-client-connect-packet/
     */
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/available-actor-identifiers-packet/
     */
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/available-commands-packet/
     */
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/award-achievement-packet/
     */
    AwardAchievementPacket = 'AwardAchievementPacket',
    /**
     * - mBiomeData: map of biome string indices to biome definition data.
     * - mStringList: list of biome name strings.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/biome-definition-list-packet/
     */
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/block-actor-data-packet/
     */
    BlockActorDataPacket = 'BlockActorDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/block-event-packet/
     */
    BlockEventPacket = 'BlockEventPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/block-pick-request-packet/
     */
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/book-edit-packet/
     */
    BookEditPacket = 'BookEditPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/boss-event-packet/
     */
    BossEventPacket = 'BossEventPacket',
    /**
     * 
     *     Sent by the server to clients for updating the actor priority for client aim-assist systems.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-aim-assist-actor-priority-packet/
     */
    CameraAimAssistActorPriorityPacket = 'CameraAimAssistActorPriorityPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-aim-assist-packet/
     */
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    /**
     * 
     *     Sent by the server to clients for initializing and updating the client aim-assist registry.
     *     AddToExisting operations are sent by the server when new presets/categories are added to the registry through creator facing APIs.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-aim-assist-presets-packet/
     */
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-instruction-packet/
     */
    CameraInstructionPacket = 'CameraInstructionPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-packet/
     */
    CameraPacket = 'CameraPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-presets-packet/
     */
    CameraPresetsPacket = 'CameraPresetsPacket',
    /**
     * It may be used to queue or stop a camera shake
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-shake-packet/
     */
    CameraShakePacket = 'CameraShakePacket',
    /**
     * 
     *     Sent by the server to clients for initializing custom spline data that can be played later through the camera command.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/camera-spline-packet/
     */
    CameraSplinePacket = 'CameraSplinePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/change-dimension-packet/
     */
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/change-mob-property-packet/
     */
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/chunk-radius-updated-packet/
     */
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-attribute-layer-sync-packet/
     */
    ClientboundAttributeLayerSyncPacket = 'ClientboundAttributeLayerSyncPacket',
    /**
     * This will only have an affect if the client currently has a server form on the UI stack.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-close-form-packet/
     */
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-control-scheme-set-packet/
     */
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-data-driven-uiclose-screen-packet/
     */
    ClientboundDataDrivenUICloseScreenPacket = 'ClientboundDataDrivenUICloseScreenPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-data-driven-uireload-packet/
     */
    ClientboundDataDrivenUIReloadPacket = 'ClientboundDataDrivenUIReloadPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-data-driven-uishow-screen-packet/
     */
    ClientboundDataDrivenUIShowScreenPacket = 'ClientboundDataDrivenUIShowScreenPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-data-store-packet/
     */
    ClientboundDataStorePacket = 'ClientboundDataStorePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-debug-renderer-packet/
     */
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-map-item-data-packet/
     */
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-texture-shift-packet/
     */
    ClientboundTextureShiftPacket = 'ClientboundTextureShiftPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/clientbound-update-sound-data-packet/
     */
    ClientboundUpdateSoundDataPacket = 'ClientboundUpdateSoundDataPacket',
    /**
     * Sent periodically by the client to update the server on which blob it has (ACK) and which blobs it is lacking (MISS).
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-cache-blob-status-packet/
     */
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    /**
     * Any missing blob should just be thrown into one of these packet ASAP and sent. This is actually how chunk data gets to the client the first time.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-cache-miss-response-packet/
     */
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    /**
     * Sent by the Client once, at login, to communicate if it supports the client blob cache protocol or not.
     *     <br> Documented in <a href=https://github.com/Mojang/bedrock-docs/blob/master/GameplaySystems/ClientBlobCacheProtocol.md>https://github.com/Mojang/bedrock-docs/blob/master/GameplaySystems/ClientBlobCacheProtocol.md</a>
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-cache-status-packet/
     */
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    /**
     * 
     *     Sent by clients to the server for activating/deactivating aim-assist.
     *     Activation uses the CameraPreset Id for server-side lookup and uses its aim_assist field
     *     for aim-assist activation settings.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-camera-aim-assist-packet/
     */
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    /**
     * Only used in Server-Authoritative Movement. Sent periodically if the client has received corrections from the server. Contains information about client-predictions that are relevant to movement.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-movement-prediction-sync-packet/
     */
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/client-to-server-handshake-packet/
     */
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    /**
     * This is EDU exclusively.It is sent once from _sendLevelData() in the start of a game from the server,
     *     and once per CodeBuilderCommand
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/code-builder-packet/
     */
    CodeBuilderPacket = 'CodeBuilderPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/code-builder-source-packet/
     */
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    /**
     * Sent when you close the command block screen on the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/command-block-update-packet/
     */
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/command-output-packet/
     */
    CommandOutputPacket = 'CommandOutputPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/command-request-packet/
     */
    CommandRequestPacket = 'CommandRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/completed-using-item-packet/
     */
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/container-close-packet/
     */
    ContainerClosePacket = 'ContainerClosePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/container-open-packet/
     */
    ContainerOpenPacket = 'ContainerOpenPacket',
    /**
     * 
     *     Whenever the serverside ContainerRegistry does a clean, identifiers for the removed containers are gathered in a ContainerRegistryCleanUp
     *     packet and sent to the client so that the clientside container registry can remove those same containers.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/container-registry-cleanup-packet/
     */
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/container-set-data-packet/
     */
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    /**
     * Used only in server authoritative movement mode, see ServerAuthMovementMode documentation.<br>
     *     Since it is sent to the specified client the target player is implied to be the receiver.<br>
     *     It is an optional part of the server authoritative protocol. A server could choose to never send this or do all corrections
     *     through MovePlayerPacket, although doing so would likely provide less smooth results.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/correct-player-move-prediction-packet/
     */
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    /**
     * Sent from the server on level startup to send all recipes to the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/crafting-data-packet/
     */
    CraftingDataPacket = 'CraftingDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/create-photo-packet/
     */
    CreatePhotoPacket = 'CreatePhotoPacket',
    /**
     * Sent once by the server on startup to tell clients all of the items that can show up in the creative menu and recipe book.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/creative-content-packet/
     */
    CreativeContentPacket = 'CreativeContentPacket',
    /**
     * Sends the name of the Structure Feature the player is currently occupying to the client.
     *     If the player is not in a structure, this packet contains an empty string.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/current-structure-feature-packet/
     */
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    /**
     * mDeathCauseMessage: is untranslated cause of death string vector returned from ActorDamageSource
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/death-info-packet/
     */
    DeathInfoPacket = 'DeathInfoPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/debug-info-packet/
     */
    DebugInfoPacket = 'DebugInfoPacket',
    /**
     * Contains dimension definition data including height bounds and generator type for each dimension.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/dimension-data-packet/
     */
    DimensionDataPacket = 'DimensionDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/disconnect-packet/
     */
    DisconnectPacket = 'DisconnectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/editor-network-packet/
     */
    EditorNetworkPacket = 'EditorNetworkPacket',
    /**
     * Currently transmits EducationLevelSettings to all clients when the game is starting.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/education-settings-packet/
     */
    EducationSettingsPacket = 'EducationSettingsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/edu-uri-resource-packet/
     */
    EduUriResourcePacket = 'EduUriResourcePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/emote-list-packet/
     */
    EmoteListPacket = 'EmoteListPacket',
    /**
     * Sent in both directions; by client to request that an emote is played and then from the server to the clients to indicate which player needs to now emote.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/emote-packet/
     */
    EmotePacket = 'EmotePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/feature-registry-packet/
     */
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    /**
     * Informs client about any changes to the game rules.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/game-rules-changed-packet/
     */
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/game-test-request-packet/
     */
    GameTestRequestPacket = 'GameTestRequestPacket',
    /**
     * Internal Text Packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/game-test-results-packet/
     */
    GameTestResultsPacket = 'GameTestResultsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/graphics-override-parameter-packet/
     */
    GraphicsOverrideParameterPacket = 'GraphicsOverrideParameterPacket',
    /**
     * This is only used when players use pick block, a command is used, tests, and some 3rd party content.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/gui-data-pick-item-packet/
     */
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    /**
     * Sends the damage taken after armor is taken into account. This looks like it is trying to be phased out, this is not sent while the ItemStackNetManagerServer is active. From the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/hurt-armor-packet/
     */
    HurtArmorPacket = 'HurtArmorPacket',
    /**
     * Used for inventory button press and in _updateInteraction() for a variety of purposes. From the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/interact-packet/
     */
    InteractPacket = 'InteractPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/inventory-content-packet/
     */
    InventoryContentPacket = 'InventoryContentPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/inventory-slot-packet/
     */
    InventorySlotPacket = 'InventorySlotPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/inventory-transaction-packet/
     */
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    /**
     * This packet needs to be sent immediately after the StartGamePacket for primary clients.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/item-registry-packet/
     */
    ItemRegistryPacket = 'ItemRegistryPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/item-stack-request-packet/
     */
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/item-stack-response-packet/
     */
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    /**
     * Sends the serialized jigsaw rule JSON to the client as it's needed on both the client and server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/jigsaw-structure-data-packet/
     */
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    /**
     * The packet can be fired from the client through the UI or from the server during updates.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/lab-table-packet/
     */
    LabTablePacket = 'LabTablePacket',
    /**
     * It is a request from the client to either turn the page in the lectern or drop the book.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/lectern-update-packet/
     */
    LecternUpdatePacket = 'LecternUpdatePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/legacy-telemetry-event-packet/
     */
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/lesson-progress-packet/
     */
    LessonProgressPacket = 'LessonProgressPacket',
    /**
     * Used to start a chunk transaction.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/level-chunk-packet/
     */
    LevelChunkPacket = 'LevelChunkPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/level-event-generic-packet/
     */
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/level-event-packet/
     */
    LevelEventPacket = 'LevelEventPacket',
    /**
     * 
     *     Most sounds get launched on server and replicated to clients, but a handful of player initiated sounds are launched on their client and replicated through the network.
     *     (In most of the codebase 'Event' means telemetry events; this is not the case here, this is how sounds get replicated across the network in vanilla.)
     *     With support for custom entities. Entity Id is a string and Event Id is an integer.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/level-sound-event-packet/
     */
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/locator-bar-packet/
     */
    LocatorBarPacket = 'LocatorBarPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/login-packet/
     */
    LoginPacket = 'LoginPacket',
    /**
     * 
     *     It sends the original map id and the new map id. 
     *     On the server it follows a similar process to creating a new map, sends the data and the map info to the client.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/map-create-locked-copy-packet/
     */
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    /**
     * 
     *     If the server finds the map, it sends the data back. If it can't find the map, it creates it and sends the map and data back.
     *     (the map creation data packet and the map data packet are separate packets).
     *     The response from the server potentially has to load from disk, just an fyi.
     *     This packet is fired via map item tick, if the map data we have is invalid, or if the map is placed in an item frame.
     * 
     *     For Client Side Generation when we re-sample pixels from the Client's ChunkSource we need to inform the Server's map about
     *     these new pixels so that it can save them to LevelStorage. Use this packet to send to the Server the extra pixels
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/map-info-request-packet/
     */
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    /**
     * This is related to MobEquipmentPackets, but armor specifically and passes ALL equipment changes at once instead of one slot at a time.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/mob-armor-equipment-packet/
     */
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    /**
     * At the start of the game the server sends any mob effects with _sendAdditionalLevelData() if the joining player saved out with them,
     * and then anytime a mob effect is added, removed, or updated this packet is sent.<br>
     * It is important for player movement simulation to ensure that the following effects are sent for the player or any client predicted vehicle they are in control of:<br>
     * - levitation<br>
     * - slow_falling<br>
     * - jump<br>
     * - movement_speed<br>
     * - movement_slowdown<br>
     * - weaving
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/mob-effect-packet/
     */
    MobEffectPacket = 'MobEffectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/mob-equipment-packet/
     */
    MobEquipmentPacket = 'MobEquipmentPacket',
    /**
     * Not sent from vanilla. The feature is meant for third-party servers to be able to drive dynamic ui forms. The request comes with some JSON that describes a custom UI screen thirdparty uses.Server->client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/modal-form-request-packet/
     */
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    /**
     * see ModalFormRequestPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/modal-form-response-packet/
     */
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    /**
     * This is from the server when spatial optimizations are enabled and the server does not send a spatial update.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/motion-prediction-hints-packet/
     */
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/move-actor-absolute-packet/
     */
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    /**
     * Each position, rotation and head-rotation component is sent as an independent optional, accompanied by flags indicating whether the actor is on the ground and whether this is a teleport.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/move-actor-delta-packet/
     */
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    /**
     * 
     *     These MovementEffects can be client-predicted.
     *     Ex: Fireworks Rockets used while gliding send this packet to the client so they know the exact duration of the GLIDE_BOOST MovementEffect.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/movement-effect-packet/
     */
    MovementEffectPacket = 'MovementEffectPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/move-player-packet/
     */
    MovePlayerPacket = 'MovePlayerPacket',
    /**
     * 
     *     This is used by EDU for joining players and removing players from your session,
     *     the settings (there is only one) is an enum for enabling/disabling/refreshing multiplayer join codes.
     *     Starts on the client, and a response to the client is issued from the server.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/multiplayer-settings-packet/
     */
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    /**
     * Used (from the server) when a user's Chunk View moves, I.e. the area that determines what chunks exist. For ClientSideGeneration we also send the client a list of ChunkPos that the Server will fully build.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/network-chunk-publisher-update-packet/
     */
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/network-settings-packet/
     */
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    /**
     * DEPRECATED. Was for testing/debug/telemetry: Used to provide ping time to in game debug graph, also for realms telemetry of actual in game latency.  Sent from both client & server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/network-stack-latency-packet/
     */
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/npc-dialogue-packet/
     */
    NpcDialoguePacket = 'NpcDialoguePacket',
    /**
     * A request is made from the client during an interaction with an NPC then the request is processed by the server. 
     *     Actor MUST have the NPCComponent to be handled. 
     *     We currently only use this for EDU, but the goal was to expose the NPC Component to creators.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/npc-request-packet/
     */
    NpcRequestPacket = 'NpcRequestPacket',
    /**
     * Sent from the player (and in one case from the village) to make those really cool animated effects for the hero of the village and the totem saving you. Just an id (unsigned int). At least thats what the code suggests. May be obsolete / deprecated.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/on-screen-texture-animation-packet/
     */
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/open-sign-packet/
     */
    OpenSignPacket = 'OpenSignPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/packet-violation-warning-packet/
     */
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/party-changed-packet/
     */
    PartyChangedPacket = 'PartyChangedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/party-destination-cookie-response-packet/
     */
    PartyDestinationCookieResponsePacket = 'PartyDestinationCookieResponsePacket',
    /**
     * 
     *     When the player uses the camera item or adds a photo to the scrapbook it sends the photo to the server,
     *     then the server sends a response back on whether that was successful or not.
     *     Either uploads a photo to the server's photoStorage or request one from it to be stored in client's photoStorage.
     *     If no mPhotoData is provided it is a request for the given filename.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/photo-transfer-packet/
     */
    PhotoTransferPacket = 'PhotoTransferPacket',
    /**
     * The expected actions change depending on the ServerAuthMovementMode specified in the StartGamePacket.
     *     See the PlayerActionType enum for details on which have differing behavior.
     *     See also PlayerAuthInputPacket and InventoryTransactionPacket for similar types of player actions.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-action-packet/
     */
    PlayerActionPacket = 'PlayerActionPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-armor-damage-packet/
     */
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    /**
     * These are for Server Authoritative Movement to sync all player input with the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-auth-input-packet/
     */
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-enchant-options-packet/
     */
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    /**
     * This is the packet that tracks the active fog stack from the server so the local players can apply different fog settings.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-fog-packet/
     */
    PlayerFogPacket = 'PlayerFogPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-hotbar-packet/
     */
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    /**
     * Sent from the Server at the start of the game or when a player is added to all clients. Lists the players.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-list-packet/
     */
    PlayerListPacket = 'PlayerListPacket',
    /**
     * Sent by PlayerLocationSender when a player position changes beyond a certain angle.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-location-packet/
     */
    PlayerLocationPacket = 'PlayerLocationPacket',
    /**
     * Sent from the client to server, then processed and broadcasted to all clients. This is used by third-party(3P) servers to send custom geometry.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-skin-packet/
     */
    PlayerSkinPacket = 'PlayerSkinPacket',
    /**
     * Packet sent by the player to start the cooldown on an item.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-start-item-cooldown-packet/
     */
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-toggle-crafter-slot-request-packet/
     */
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    /**
     * Updates client entity property override data. Sets/removes an override for the indicated property for a specific entity on a client or clears all overrides for that entity.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/player-update-entity-overrides-packet/
     */
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/play-sound-packet/
     */
    PlaySoundPacket = 'PlaySoundPacket',
    /**
     * 
     *     Used after the Server handles a Login or (Sub)Client Authentication Packet
     *     If everything is good, then it sends this packet to the client to finish the handshake.
     *     If everything is not good, it terminates the connection.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/play-status-packet/
     */
    PlayStatusPacket = 'PlayStatusPacket',
    /**
     * Client to server packet for server authoratative runtime database (with persistent LevelStorage backup) designed primarily to track lodestone stuff. See Position Tracking DB Notes.md in bedrock-docs. see PositionTrackingDBServerBroadcastPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/position-tracking-dbclient-request-packet/
     */
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/position-tracking-dbserver-broadcast-packet/
     */
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/primitive-shapes-packet/
     */
    PrimitiveShapesPacket = 'PrimitiveShapesPacket',
    /**
     * Sent from the client after we make a purchase in the store OR if we login and our entitlements are verified.
     * It sends a vector of purchase receipts(string).There is a handler and a multiple senders.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/purchase-receipt-packet/
     */
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/record-started-packet/
     */
    RecordStartedPacket = 'RecordStartedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/refresh-entitlements-packet/
     */
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    /**
     * This is sent to the client to confirm which entity is being removed. This is done by sending an ActorUniqueID
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/remove-actor-packet/
     */
    RemoveActorPacket = 'RemoveActorPacket',
    /**
     * This is just the name of the objective.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/remove-objective-packet/
     */
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/remove-volume-entity-packet/
     */
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    /**
     * Once changed, the server will broadcast the updated state of abilities for that player. If the request is rejected, the caller will receive their reverted state of Abilities.  Can only be used to modify the calling player.      - mVariable: Info about this variable
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/request-ability-packet/
     */
    RequestAbilityPacket = 'RequestAbilityPacket',
    /**
     * This packet is to make sure that the server expands/shrinks first. Additionally for ClientSide Chunk Generation we can send a byte, based on client's hardware capabilities what is the max chunk radius client can handle.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/request-chunk-radius-packet/
     */
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    /**
     * This is the initial packet sent from the client to initiate a connection.  NOTE: this packet should not contain anything other than the client version, don't add new data here.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/request-network-settings-packet/
     */
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    /**
     * Can only be used by Operators or Hosts.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/request-permissions-packet/
     */
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    /**
     * (only one marked for uncompressed) realms resource pack download
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-pack-chunk-data-packet/
     */
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-pack-chunk-request-packet/
     */
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    /**
     * Sent to MinecraftGame to complete the resource pack loading process.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-pack-client-response-packet/
     */
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    /**
     * Sent from the serverFileChunkUploader during the initialization of the file uploader. This packet is sent to the primary client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-pack-data-info-packet/
     */
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    /**
     * Sends resource pack information to the client including pack IDs, versions, sizes, and content keys.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-packs-info-packet/
     */
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-packs-ready-for-validation-packet/
     */
    ResourcePacksReadyForValidationPacket = 'ResourcePacksReadyForValidationPacket',
    /**
     * Sent to client in response to ResourcePackClientResponsePacket with info on current resource pack stack.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/resource-pack-stack-packet/
     */
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    /**
     * For some reason each respawn 1 packet is sent from the client and 3 are sent from the server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/respawn-packet/
     */
    RespawnPacket = 'RespawnPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/script-message-packet/
     */
    ScriptMessagePacket = 'ScriptMessagePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/send-party-destination-cookie-packet/
     */
    SendPartyDestinationCookiePacket = 'SendPartyDestinationCookiePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/serverbound-data-driven-screen-closed-packet/
     */
    ServerboundDataDrivenScreenClosedPacket = 'ServerboundDataDrivenScreenClosedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/serverbound-data-store-packet/
     */
    ServerboundDataStorePacket = 'ServerboundDataStorePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/serverbound-diagnostics-packet/
     */
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    /**
     * In order for the client to send a packet with StartLoadingScreen, the server needs to anticipate that this packet is coming.
     * If the server doesn't expect that we are about to start a loading screen, the server will disconnect the client.
     * EndLoadingScreen is sent by the client when the loading screen closes.
     * The Loading Screen Id field will be empty if the loading screen is triggered by the initial loading into of a world.
     * The Loading Screen Id field will have a value if sent by the server. This currently happens as part of ChangeDimensionPacket if the player is alive.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/serverbound-loading-screen-packet/
     */
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/serverbound-pack-setting-change-packet/
     */
    ServerboundPackSettingChangePacket = 'ServerboundPackSettingChangePacket',
    /**
     * Is currently only used for debug draw. Packets will not be sent if debug draw is not available.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-player-post-move-position-packet/
     */
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-presence-info-packet/
     */
    ServerPresenceInfoPacket = 'ServerPresenceInfoPacket',
    /**
     * It is also an empty packet. There is no handler for this packet, should be removed.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-settings-request-packet/
     */
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-settings-response-packet/
     */
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    /**
     * Sent from server.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-stats-packet/
     */
    ServerStatsPacket = 'ServerStatsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-store-info-packet/
     */
    ServerStoreInfoPacket = 'ServerStoreInfoPacket',
    /**
     * Sent from the server at the end of the login packet
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/server-to-client-handshake-packet/
     */
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-actor-data-packet/
     */
    SetActorDataPacket = 'SetActorDataPacket',
    /**
     * Sent when the player starts riding something. Two are sent at a time for some reason.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-actor-link-packet/
     */
    SetActorLinkPacket = 'SetActorLinkPacket',
    /**
     * 
     *     It is primarily relevant for client predicted entities like the player or a boat or horse they are in control of.
     *     For most other actor types it does nothing.<br>
     *     This is one of the packets that can directly affect player motion, for others, see:<br>
     *     - MovePlayerPacket<br>
     *     - CorrectPlayerMovePredictionPacket
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-actor-motion-packet/
     */
    SetActorMotionPacket = 'SetActorMotionPacket',
    /**
     * see SimpleEventPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-commands-enabled-packet/
     */
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-default-game-type-packet/
     */
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    /**
     * Used for when a client changes difficulty through the menu or when the server changes the difficulty.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-difficulty-packet/
     */
    SetDifficultyPacket = 'SetDifficultyPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-display-objective-packet/
     */
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-health-packet/
     */
    SetHealthPacket = 'SetHealthPacket',
    /**
     * This packet will toggle the HUD visibility.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-hud-packet/
     */
    SetHudPacket = 'SetHudPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-last-hurt-by-packet/
     */
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    /**
     * Client tells the server that the client is ready to roll.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-local-player-as-initialized-packet/
     */
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-player-furnace-options-packet/
     */
    SetPlayerFurnaceOptionsPacket = 'SetPlayerFurnaceOptionsPacket',
    /**
     * The client handles the change of the UI element (the gametype dropdown, although this can be avoided by changing via command or on the server), then the client sends a packet to the server, then the server changes the player's gametype and sends a packet back (UpdatePlayerGameTypePacket) to make sure it matches on the client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-player-game-type-packet/
     */
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-player-inventory-options-packet/
     */
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    /**
     * Send an update packet for a player identity definition iff a tracked player has logged in with a different display name.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-scoreboard-identity-packet/
     */
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    /**
     * Sets the scoreboard which is used for 3rd party content.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-score-packet/
     */
    SetScorePacket = 'SetScorePacket',
    /**
     * see RespawnPacket
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-spawn-position-packet/
     */
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    /**
     * Every so often (and at login) the server sends the current time to the client, and additionally the client can set the server time through 2 commands: DayLockCommand and TimeCommand
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-time-packet/
     */
    SetTimePacket = 'SetTimePacket',
    /**
     * Used when the player changes the world settings like doDayNightCycle or WeatherCycle via the world settings menu
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/settings-command-packet/
     */
    SettingsCommandPacket = 'SettingsCommandPacket',
    /**
     * There are 2 commands associated with it: title and titleraw.
     *     Both of which have functionality to change fade in/out time for titles, sub titles, and action bar text.
     *     titleraw is using json to format so it will be bigger (i don't have an example)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/set-title-packet/
     */
    SetTitlePacket = 'SetTitlePacket',
    /**
     * That packet is sent to the client.  When the credits have concluded, a packet is sent back to the server to let it know to reinstate the player watching the credits.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/show-credits-packet/
     */
    ShowCreditsPacket = 'ShowCreditsPacket',
    /**
     * The only use in vanilla is a test command called ProfileCommand. It makes the user's xbox profile popup.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/show-profile-packet/
     */
    ShowProfilePacket = 'ShowProfilePacket',
    /**
     * The server can redirect the user to a 3rd party server page, to a marketplace offer description page, or to a dressing room page containing desired offer.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/show-store-offer-packet/
     */
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    /**
     * This is fired from the client to the server and a SetCommandsEnabledPacket is sent back when enabling commands.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/simple-event-packet/
     */
    SimpleEventPacket = 'SimpleEventPacket',
    /**
     * - mSimType: an enum representing the simulation type to switch to.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/simulation-type-packet/
     */
    SimulationTypePacket = 'SimulationTypePacket',
    /**
     * Note: This can be seen as "ContainerWantSetSlotPacket" when sent from client to server. Currently, the client handles side-effects relating to it's own inventory, regardless of the success of the operation.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/spawn-experience-orb-packet/
     */
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    /**
     * This is not used for much anymore, only the Particle command (spawn particle by name at a location) and for ScriptServerSpawnParticleAttachedToActor and ScriptServerSpawnParticleInWorldEvent.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/spawn-particle-effect-packet/
     */
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    /**
     * The player movement mode is also specified here, see ServerAuthMovementMode enum documentation for details on the modes.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/start-game-packet/
     */
    StartGamePacket = 'StartGamePacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/stop-sound-packet/
     */
    StopSoundPacket = 'StopSoundPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/structure-block-update-packet/
     */
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    /**
     * This is used to kick off the process of loading and returning a structure in a Tag from the server back to the client. Currently this functionality is completely disabled and does nothing.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/structure-template-data-request-packet/
     */
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    /**
     * The client sends a packet to the server, from there the structure is built and then put into a Tag where it is sent back to the client, from there you can view the structure in the Structure Block Screen. Currently this functionality is completely disabled and does nothing. Used to reply to a request for structure information.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/structure-template-data-response-packet/
     */
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    /**
     * Contains subchunk terrain data, heightmaps, and optional blob cache IDs.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/sub-chunk-packet/
     */
    SubChunkPacket = 'SubChunkPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/sub-chunk-request-packet/
     */
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/sub-client-login-packet/
     */
    SubClientLoginPacket = 'SubClientLoginPacket',
    /**
     * Intended to one day replace SynchedActorData.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/sync-actor-property-packet/
     */
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    /**
     * 
     *     Sent from the server when a client joins to initialize all world clocks for the client and periodically to all clients to keep them in sync.
     *     It is also sent to all clients when a world clock's paused state changes or when time markers are added or removed.
     *     
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/sync-world-clocks-packet/
     */
    SyncWorldClocksPacket = 'SyncWorldClocksPacket',
    /**
     * From this the item and count is turned into an item and the transaction is handled afterwards.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/take-item-actor-packet/
     */
    TakeItemActorPacket = 'TakeItemActorPacket',
    /**
     * Used for commands, messages, and other info printed to the screen. Most of which are server->client or server broadcasted to all clients, but some cases have a client to other client via the server
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/text-packet/
     */
    TextPacket = 'TextPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/ticking-areas-load-status-packet/
     */
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/toast-request-packet/
     */
    ToastRequestPacket = 'ToastRequestPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/transfer-packet/
     */
    TransferPacket = 'TransferPacket',
    /**
     * - mTrimPatterns: vector of TrimPattern
     * - mTrimMaterials: vector of TrimMaterial
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/trim-data-packet/
     */
    TrimDataPacket = 'TrimDataPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/unlocked-recipes-packet/
     */
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-abilities-packet/
     */
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    /**
     * Sent by the server to update the state of AdventureSettings. Replaces the AdventureSettingsPacket for updating AdventureSettings from server to client.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-adventure-settings-packet/
     */
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    /**
     * Occasionally updating player attributes (buffs/debuffs, health, etc)
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-attributes-packet/
     */
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    /**
     * This happens often. Luckily, the packets are small.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-block-packet/
     */
    UpdateBlockPacket = 'UpdateBlockPacket',
    /**
     * Variation of UpdateBlockSyncedPacket that includes information to sync entities with renderchunk generation. Occasionally when blocks change a sync message is sent and during the change on the dimension, this packet is sent to the client to alert the update flags and sync info at a specific position.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-block-synced-packet/
     */
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    /**
     * Used to update the players input permissions. Sends the full permission set and the server position of the player at the time the permission was modified.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-client-input-locks-packet/
     */
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    /**
     * The values in this packet are originally synced through the Connection Request and then updated via this packet.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-client-options-packet/
     */
    UpdateClientOptionsPacket = 'UpdateClientOptionsPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-equip-packet/
     */
    UpdateEquipPacket = 'UpdateEquipPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-player-game-type-packet/
     */
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    /**
     * This allows someone to sync between server and client tags and enums on mobs or on the level.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-soft-enum-packet/
     */
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-sub-chunk-blocks-packet/
     */
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    /**
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/update-trade-packet/
     */
    UpdateTradePacket = 'UpdateTradePacket',
    /**
     * Sends the serializable voxel shapes data to the client as it's needed on both the client and server. This packet should always be sent before StartGamePacket.
     * 
     * @see https://mojang.github.io/bedrock-protocol-docs/latest/packets/voxel-shapes-packet/
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
