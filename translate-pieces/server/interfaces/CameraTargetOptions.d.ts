/* IMPORT */ import { Entity, Vector3 } from '../index';

/**
 * @beta
 */
export interface CameraTargetOptions {
    offsetFromTargetCenter?: Vector3;
    targetEntity: Entity;
}