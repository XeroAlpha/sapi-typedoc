/* IMPORT */ import { IModalTool, ModalToolCreationParameters } from '../index';

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    /**
     * @remarks
     * The id of the selected tool in container.
     *
     */
    readonly selectedOptionId?: string;
    addTool(params: ModalToolCreationParameters): IModalTool;
    dispose(): void;
    hide(): void;
    removeTool(id: string): void;
    setSelectedOptionId(value: string | undefined, update?: boolean): void;
    show(): void;
}