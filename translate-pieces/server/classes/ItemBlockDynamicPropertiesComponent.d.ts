/* IMPORT */ import { InvalidItemStackError, ItemComponent, Vector3 } from '..';

/**
 * @beta
 * Represents the dynamic properties of a block. Only available
 * from block entities. Up to 1KBytes of data can be stored per
 * content pack per block entity in their dynamic properties
 * storage.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * Returns a DynamicProperty that was stored with the provided
     * key. Keys are unique to each content pack and cannot be used
     * to retrieve dynamic properties set from other content packs.
     * Returns undefined if the key was not found.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Sets a dynamic property with the provided key and value.
     * Keys are unique to each content pack and cannot be used to
     * set dynamic properties for other content packs. Values can
     * be either a Number, a String or a Vector3. Setting a
     * property with an undefined value will remove it from the
     * storage. Storage size usage is counted towards the 1KBytes
     * limit per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Returns the current size, in bytes, of the dynamic
     * properties storage for this block. The byte count only
     * accounts for properties set by your content pack. The
     * 1KBytes limit is per content pack.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}
