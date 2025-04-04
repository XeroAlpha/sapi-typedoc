/* IMPORT */ import { BrushShape, CoreBrushShapeType } from '../index';

/**
 * @remarks
 * Returns a list of default core brush shapes
 *
 * @param excludeList
 * List of shape types to exclude
 */
export declare function getDefaultBrushShapes(excludeList?: CoreBrushShapeType[]): BrushShape[];