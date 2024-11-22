/* IMPORT */ import { Entity, Vector3 } from '../index';

/**
 * @beta
 *
 * Required Experiments:
 * - Focus Target Camera
 *
 */
export interface CameraTargetOptions {
    offsetFromTargetCenter?: Vector3;
    targetEntity: Entity;
}