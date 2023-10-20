/**
 * All possible MinecraftCameraPresetsTypes
 */
export declare enum MinecraftCameraPresetsTypes {
    /** 第一人称视角。 */
    FirstPerson = "minecraft:first_person",
    /** 自由视角。 */
    Free = "minecraft:free",
    /** 第三人称背面视角。 */
    ThirdPerson = "minecraft:third_person",
    /** 第三人称正面视角。 */
    ThirdPersonFront = "minecraft:third_person_front"
}
/**
 * Union type equivalent of the MinecraftCameraPresetsTypes enum.
 */
export type MinecraftCameraPresetsTypesUnion = keyof typeof MinecraftCameraPresetsTypes;
