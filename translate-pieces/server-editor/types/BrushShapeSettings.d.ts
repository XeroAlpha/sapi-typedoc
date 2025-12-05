/* IMPORT */ import { ConeBrushShapeSettings, CuboidBrushShapeSettings, CylinderBrushShapeSettings, EllipsoidBrushShapeSettings, PyramidBrushShapeSettings } from '..';

/**
 * Setting types for all brush shapes
 */
export type BrushShapeSettings =
    | ConeBrushShapeSettings
    | CuboidBrushShapeSettings
    | CylinderBrushShapeSettings
    | EllipsoidBrushShapeSettings
    | PyramidBrushShapeSettings
    | undefined;
