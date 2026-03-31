/* IMPORT */ import { DimensionLocation, PrimitiveShape, RGBA, RawMessage, RawMessageError, Vector3 } from '..';

/**
 * @beta
 * A primitive shape class that represents a text label in the
 * world with a background.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the background. Defaults to true but will always be false
     * if 'useRotation' is set to false.
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * The color of the background plate of the text. If set to
     * undefined, it will use the default color.
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * If set to true, the text will be hidden behind blocks or
     * entities. By default this is set to false (will always
     * render).
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * Get the text of the debug text shape. Returns the RawText of
     * the debug text if `setText` was called with a RawMessage or
     * a RawText object, otherwise returns a string.
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * If set to true, the text primitive will render the back-face
     * of the text. Defaults to true but will always be false if
     * 'useRotation' is set to false.
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * If set to true, the text will not face the camera and
     * instead will use the rotation from the shape.
     *
     */
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * Sets the text to display.
     *
     * @throws This function can throw errors.
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}
