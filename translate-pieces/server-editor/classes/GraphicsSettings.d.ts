/* IMPORT */ import { GraphicsSettingsPropertyTypeMap } from '../index';

/**
 * Settings category that manages {@link
 * GraphicsSettingsProperty} configurations.
 */
export class GraphicsSettings {
    private constructor();
    /**
     * @remarks
     * Retrieves a graphics settings property value.
     *
     * @param property
     * Property identifier.
     * @returns
     * Returns the property value if it is found. If the property
     * is not available, it returns undefined.
     */
    get<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T): GraphicsSettingsPropertyTypeMap[T] | undefined;
    /**
     * @remarks
     * Retrieves all graphics settings properties and their values.
     *
     * @returns
     * Returns a property value map for all available properties.
     */
    getAll(): GraphicsSettingsPropertyTypeMap;
    /**
     * @remarks
     * Modifies a graphics settings property value.
     *
     * @worldMutation
     *
     * @param property
     * Property identifier.
     * @param value
     * New property value.
     * @throws This function can throw errors.
     */
    set<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T, value: GraphicsSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * Modify multiple graphics settings properties.
     *
     * @worldMutation
     *
     * @param properties
     * Property map to set available property values. If the
     * property is not defined in the map, it will not be modified.
     * @throws This function can throw errors.
     */
    setAll(properties: GraphicsSettingsPropertyTypeMap): void;
}