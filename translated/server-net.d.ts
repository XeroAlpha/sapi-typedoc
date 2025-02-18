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
import * as minecraftserver from '@minecraft/server';
import * as minecraftserveradmin from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * 表示 HTTP DELETE 请求。
     * DELETE 通常用于描述删除指定的资源。
     * 
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * 表示 HTTP GET 请求。
     * GET 请求通常用于获取指定资源的信息。
     * 
     * Represents the method for an HTTP PUT request. POST requests
     * are commonly used to create a new resource that is a
     * subordinate of the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * 表示 HTTP HEAD 请求。
     * HEAD 请求类似于 GET 请求，但通常用于仅需要获取指定资源的 HTTP 响应标头，不需要获取响应主体的情况。
     * 
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 表示 HTTP POST 请求。
     * POST 请求通常用于在指定 URI 下创建新资源。
     * 
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
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

/**
 * Represents the unique type of network packet.
 */
export enum PacketId {
    ActorEventPacket = 'ActorEventPacket',
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    AddActorPacket = 'AddActorPacket',
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    AddItemActorPacket = 'AddItemActorPacket',
    AddPaintingPacket = 'AddPaintingPacket',
    AddPlayerPacket = 'AddPlayerPacket',
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    AgentActionEventPacket = 'AgentActionEventPacket',
    AgentAnimationPacket = 'AgentAnimationPacket',
    AnimateEntityPacket = 'AnimateEntityPacket',
    AnimatePacket = 'AnimatePacket',
    AnvilDamagePacket = 'AnvilDamagePacket',
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    AwardAchievementPacket = 'AwardAchievementPacket',
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    BlockActorDataPacket = 'BlockActorDataPacket',
    BlockEventPacket = 'BlockEventPacket',
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    BookEditPacket = 'BookEditPacket',
    BossEventPacket = 'BossEventPacket',
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    CameraInstructionPacket = 'CameraInstructionPacket',
    CameraPacket = 'CameraPacket',
    CameraPresetsPacket = 'CameraPresetsPacket',
    CameraShakePacket = 'CameraShakePacket',
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    CodeBuilderPacket = 'CodeBuilderPacket',
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    CommandOutputPacket = 'CommandOutputPacket',
    CommandRequestPacket = 'CommandRequestPacket',
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    CompressedBiomeDefinitionList = 'CompressedBiomeDefinitionList',
    ContainerClosePacket = 'ContainerClosePacket',
    ContainerOpenPacket = 'ContainerOpenPacket',
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    CraftingDataPacket = 'CraftingDataPacket',
    CreatePhotoPacket = 'CreatePhotoPacket',
    CreativeContentPacket = 'CreativeContentPacket',
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    DeathInfoPacket = 'DeathInfoPacket',
    DebugInfoPacket = 'DebugInfoPacket',
    DimensionDataPacket = 'DimensionDataPacket',
    DisconnectPacket = 'DisconnectPacket',
    EditorNetworkPacket = 'EditorNetworkPacket',
    EducationSettingsPacket = 'EducationSettingsPacket',
    EduUriResourcePacket = 'EduUriResourcePacket',
    EmoteListPacket = 'EmoteListPacket',
    EmotePacket = 'EmotePacket',
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    GameTestRequestPacket = 'GameTestRequestPacket',
    GameTestResultsPacket = 'GameTestResultsPacket',
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    HurtArmorPacket = 'HurtArmorPacket',
    InteractPacket = 'InteractPacket',
    InventoryContentPacket = 'InventoryContentPacket',
    InventorySlotPacket = 'InventorySlotPacket',
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    ItemRegistryPacket = 'ItemRegistryPacket',
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    LabTablePacket = 'LabTablePacket',
    LecternUpdatePacket = 'LecternUpdatePacket',
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    LessonProgressPacket = 'LessonProgressPacket',
    LevelChunkPacket = 'LevelChunkPacket',
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    LevelEventPacket = 'LevelEventPacket',
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    LoginPacket = 'LoginPacket',
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    MobEffectPacket = 'MobEffectPacket',
    MobEquipmentPacket = 'MobEquipmentPacket',
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    MovementEffectPacket = 'MovementEffectPacket',
    MovePlayerPacket = 'MovePlayerPacket',
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    NpcDialoguePacket = 'NpcDialoguePacket',
    NpcRequestPacket = 'NpcRequestPacket',
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    OpenSignPacket = 'OpenSignPacket',
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    PassengerJumpPacket = 'PassengerJumpPacket',
    PhotoTransferPacket = 'PhotoTransferPacket',
    PlayerActionPacket = 'PlayerActionPacket',
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    PlayerFogPacket = 'PlayerFogPacket',
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    PlayerInputPacket = 'PlayerInputPacket',
    PlayerListPacket = 'PlayerListPacket',
    PlayerSkinPacket = 'PlayerSkinPacket',
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    PlaySoundPacket = 'PlaySoundPacket',
    PlayStatusPacket = 'PlayStatusPacket',
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    RemoveActorPacket = 'RemoveActorPacket',
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    RequestAbilityPacket = 'RequestAbilityPacket',
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    RespawnPacket = 'RespawnPacket',
    ScriptMessagePacket = 'ScriptMessagePacket',
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    ServerStatsPacket = 'ServerStatsPacket',
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    SetActorDataPacket = 'SetActorDataPacket',
    SetActorLinkPacket = 'SetActorLinkPacket',
    SetActorMotionPacket = 'SetActorMotionPacket',
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    SetDifficultyPacket = 'SetDifficultyPacket',
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    SetHealthPacket = 'SetHealthPacket',
    SetHudPacket = 'SetHudPacket',
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    SetMovementAuthorityPacket = 'SetMovementAuthorityPacket',
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    SetScorePacket = 'SetScorePacket',
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    SetTimePacket = 'SetTimePacket',
    SettingsCommandPacket = 'SettingsCommandPacket',
    SetTitlePacket = 'SetTitlePacket',
    ShowCreditsPacket = 'ShowCreditsPacket',
    ShowProfilePacket = 'ShowProfilePacket',
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    SimpleEventPacket = 'SimpleEventPacket',
    SimulationTypePacket = 'SimulationTypePacket',
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    StartGamePacket = 'StartGamePacket',
    StopSoundPacket = 'StopSoundPacket',
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    SubChunkPacket = 'SubChunkPacket',
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    SubClientLoginPacket = 'SubClientLoginPacket',
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    TakeItemActorPacket = 'TakeItemActorPacket',
    TextPacket = 'TextPacket',
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    ToastRequestPacket = 'ToastRequestPacket',
    TransferPacket = 'TransferPacket',
    TrimDataPacket = 'TrimDataPacket',
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    UpdateBlockPacket = 'UpdateBlockPacket',
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    UpdateClientOptions = 'UpdateClientOptions',
    UpdateEquipPacket = 'UpdateEquipPacket',
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    UpdateTradePacket = 'UpdateTradePacket',
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
     * This property can be used in early-execution mode.
     *
     */
    key: string;
    /**
     * @remarks
     * 请求标头的值。
     * 
     * Value of the HTTP header.
     *
     * This property can be used in early-execution mode.
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
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
     * This property can be used in early-execution mode.
     *
     */
    body: string;
    /**
     * @remarks
     * 该请求的请求标头集合。
     * 
     * A collection of HTTP headers to add to the outbound request.
     *
     * This property can be used in early-execution mode.
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
     * This property can be used in early-execution mode.
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
     * This property can be used in early-execution mode.
     *
     */
    timeout: number;
    /**
     * @remarks
     * 请求访问的资源 URI。
     * 
     * The HTTP resource to access.
     *
     * This property can be used in early-execution mode.
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
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * 将请求的主体负载内容设定为指定内容。
     * 
     * Updates the content of the body of the HTTP request.
     *
     * @earlyExecution
     *
     */
    setBody(body: string): HttpRequest;
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
     * 设置该请求的最大超时时间，单位为秒。
     * 
     * @earlyExecution
     *
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
}

export class NetworkBeforeEvents {
    private constructor();
    readonly packetReceive: PacketReceiveBeforeEventSignal;
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
    readonly sender?: minecraftserver.Player;
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
    readonly recipients: minecraftserver.Player[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
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
     */
    code: number;
    /**
     * @remarks
     * The platform-provided message for the error.
     *
     */
    message: string;
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
