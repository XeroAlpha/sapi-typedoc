/* IMPORT */ import { Entity } from '../index';

/**
 * @beta
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 * @example createExplosions.ts
 * ```typescript
 * // Creates an explosion of radius 15 that does not break blocks
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function createExplosions(location: DimensionLocation) {
 *     // Creates an explosion of radius 15 that does not break blocks
 *     location.dimension.createExplosion(location, 15, { breaksBlocks: false });
 *
 *     // Creates an explosion of radius 15 that does not cause fire
 *     location.dimension.createExplosion(location, 15, { causesFire: true });
 *
 *     // Creates an explosion of radius 10 that can go underwater
 *     location.dimension.createExplosion(location, 10, { allowUnderwater: true });
 * }
 * ```
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}