/* IMPORT */ import { AABB, BlockVolume, Vector3 } from '../../server';

/**
 * Utilities operating on AABB objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class AABBUtils {
    private constructor();
    /**
     * EPSILON
     *
     * The internal epsilon value that determines validity and used for block volume tolerance.
     */
    static EPSILON: number;
    /**
     * createFromCornerPoints
     *
     * Gets an AABB from points defining it's corners, the order doesn't matter.
     * @param pointA - The first corner point.
     * @param pointB - The second corner point.
     * @throws {@link AABBInvalidExtentError}
         * This exception is thrown if the resulting AABB is invalid.
         *
         * @returns - The resulting AABB.
         */
     static createFromCornerPoints(pointA: Vector3, pointB: Vector3): AABB;
     /**
      * isValid
      *
      * Determines if the AABB has non-zero extent on all axes.
      * @param aabb - The AABB to test for validity.
      * @returns - True if all extent axes are non-zero, otherwise false.
      */
     static isValid(aabb: AABB): boolean;
     /**
      * throwErrorIfInvalid
      *
      * Throws an error if the AABB is invalid.
      * @param aabb - The AABB to test for validity.
      * @throws {@link AABBInvalidExtentError}
          * This exception is thrown if the input AABB is invalid.
          */
      static throwErrorIfInvalid(aabb: AABB): void;
      /**
       * equals
       *
       * Compares the equality of two AABBs.
       * @param aabb - The first AABB in the comparison.
       * @param other - The second AABB in the comparison.
       * @throws {@link AABBInvalidExtentError}
           * This exception is thrown if either of the input AABBs are invalid.
           *
           * @returns - True if the center and extent of both AABBs are equal.
           */
       static equals(aabb: AABB, other: AABB): boolean;
       /**
        * getMin
        *
        * Gets the minimum corner of an AABB.
        * @param aabb - The AABB to retrieve the minimum corner of.
        * @throws {@link AABBInvalidExtentError}
            * This exception is thrown if the input AABB is invalid.
            *
            * @returns - The minimum corner of the AABB.
            */
        static getMin(aabb: AABB): Vector3;
        /**
         * getMax
         *
         * Gets the maximum corner of an AABB.
         * @param aabb - The AABB to retrieve the maximum corner of.
         * @throws {@link AABBInvalidExtentError}
             * This exception is thrown if the input AABB is invalid.
             *
             * @returns - The maximum corner of the AABB.
             */
         static getMax(aabb: AABB): Vector3;
         /**
          * getSpan
          *
          * Gets the span of an AABB.
          * @param aabb - The AABB to retrieve the span of.
          * @throws {@link AABBInvalidExtentError}
              * This exception is thrown if the input AABB is invalid.
              *
              * @returns - The span of the AABB.
              */
          static getSpan(aabb: AABB): Vector3;
          /**
           * getBlockVolume
           *
           * Creates the smallest BlockVolume that includes all of a source AABB.
           * @param aabb - The source AABB.
           * @throws {@link AABBInvalidExtentError}
               * This exception is thrown if the input AABB is invalid.
               *
               * @returns - The BlockVolume containing the source AABB.
               */
           static getBlockVolume(aabb: AABB): BlockVolume;
           /**
            * translate
            *
            * Creates a translated AABB given a source AABB and translation vector.
            * @param aabb - The source AABB.
            * @param delta - The translation vector to add to the AABBs center.
            * @throws {@link AABBInvalidExtentError}
                * This exception is thrown if the input AABB is invalid.
                *
                * @returns - The resulting translated AABB.
                */
            static translate(aabb: AABB, delta: Vector3): AABB;
            /**
             * dilate
             *
             * Creates a dilated AABB given a source AABB and dilation vector.
             * @param aabb - The source AABB.
             * @param size - The dilation vector to add to the AABBs extent.
             * @throws {@link AABBInvalidExtentError}
                 * This exception is thrown if the input AABB is invalid.
                 *
                 * @returns - The resulting dilated AABB.
                 */
             static dilate(aabb: AABB, size: Vector3): AABB;
             /**
              * expand
              *
              * Creates an expanded AABB given two source AABBs.
              * @param aabb - The first source AABB.
              * @param other - The second source AABB.
              * @throws {@link AABBInvalidExtentError}
                  * This exception is thrown if either of the input AABBs are invalid.
                  *
                  * @returns - The resulting expanded AABB.
                  */
              static expand(aabb: AABB, other: AABB): AABB;
              /**
               * getIntersection
               *
               * Creates an AABB of the intersecting area of two source AABBs.
               * @param aabb - The first source AABB.
               * @param other - The second source AABB.
               * @throws {@link AABBInvalidExtentError}
                   * This exception is thrown if either of the input AABBs are invalid.
                   *
                   * @returns - The resulting intersecting AABB if they intersect, otherwise returns undefined.
                   */
               static getIntersection(aabb: AABB, other: AABB): AABB | undefined;
               /**
                * intersects
                *
                * Calculates if two AABBs are intersecting.
                * @param aabb - The first AABB.
                * @param other - The second AABB.
                * @throws {@link AABBInvalidExtentError}
                    * This exception is thrown if either of the input AABBs are invalid.
                    *
                    * @returns - True if the AABBs are intersecting, otherwise false.
                    */
                static intersects(aabb: AABB, other: AABB): boolean;
                /**
                 * isInside
                 *
                 * Calculates if a position is inside of an AABB.
                 * @param aabb - The AABB to test against.
                 * @param pos - The position to test.
                 * @throws {@link AABBInvalidExtentError}
                     * This exception is thrown if the input AABB is invalid.
                     *
                     * @returns True if the position is inside of the AABB, otherwise returns false.
                     */
                 static isInside(aabb: AABB, pos: Vector3): boolean;
                }
