/* IMPORT */ import { IModalTool, ModalToolCreationParameters } from '..';

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    /**
     * @remarks
     * Create a new tool in the modal tool container represented
     * via button on the tool rail.
     *
     * @param id
     * Unique identifier for the tool
     * @param params
     * Construction parameters for the new tool
     */
    addTool(id: string, params: ModalToolCreationParameters): IModalTool;
    /**
     * @remarks
     * Activates input bindings for the selected tool by enabling
     * viewport focus
     *
     */
    focusToolInputContext(): void;
    /**
     * @remarks
     * Returns identifier of the selected tool.
     *
     */
    getSelectedToolId(): string | undefined;
    /**
     * @remarks
     * Remove an existing tool by id from the tool container
     *
     * @param id
     * Name of the tool to remove.
     */
    removeTool(id: string): void;
    /**
     * @remarks
     * Selects a tool in the container.
     *
     * @param id
     * Identifier of the tool
     */
    setSelectedToolId(id: string | undefined): void;
}
