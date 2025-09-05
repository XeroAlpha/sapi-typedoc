/* IMPORT */ import { SelectionContainerEntity, SelectionContainerVolume } from '..';

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link @minecraft/server-editor.Selection} objects, and
 * provides the user the ability to create new {@link
 * @minecraft/server-editor.Selection} objects for use within
 * an extension.
 */
export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
}
