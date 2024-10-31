/* IMPORT */ import { IModalTool, ModalToolCreationParameters } from '../index';

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    addTool(id: string, params: ModalToolCreationParameters): IModalTool;
    focusToolInputContext(): void;
    getSelectedToolId(): string | undefined;
    removeTool(id: string): void;
    setSelectedToolId(id: string | undefined): void;
}