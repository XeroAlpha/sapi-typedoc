/* IMPORT */ import { Entity } from '..';

/**
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
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
