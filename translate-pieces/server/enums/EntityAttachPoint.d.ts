/**
 * @rc
 * 实体的绑定位点。
 * 包含头部、身体、腿部等用于将摄像机绑定的位点。
 * 
 * The entity's attach location point. Contains points such as
 * head, body, leg, etc to attach the camera to.
 */
export enum EntityAttachPoint {
    Body = 'Body',
    BreathingPoint = 'BreathingPoint',
    DropAttachPoint = 'DropAttachPoint',
    ExplosionPoint = 'ExplosionPoint',
    Eyes = 'Eyes',
    Feet = 'Feet',
    Head = 'Head',
    Mouth = 'Mouth',
    WeaponAttachPoint = 'WeaponAttachPoint',
}
