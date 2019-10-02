import { IDictionaryRow } from "../../interfaces/i-dictionary-row";
import { IFileRow } from "./i-file-row";
export declare class Files {
    private element;
    constructor(element: Element);
    fileInput: HTMLInputElement;
    selectedFiles: FileList;
    selectedFilesChanged(): void;
    files: IFileRow[];
    maxFileSize: number;
    maxFileSizeText: string;
    buttonLabel: string;
    selectTypeLabel: string;
    accept: string;
    types: IDictionaryRow[];
    readonly: boolean;
    remove(f: IFileRow): void;
}
