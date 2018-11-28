import { IDictionaryRow } from "../../interfaces/i-dictionary-row";
import { IFileRow } from "./i-file-row";
export declare class Files {
    fileInput: HTMLInputElement;
    selectedFiles: FileList;
    selectedFilesChanged(): void;
    files: IFileRow[];
    maxFileSize: number;
    buttonLabel: string;
    selectTypeLabel: string;
    types: IDictionaryRow[];
    readonly: boolean;
    remove(f: IFileRow): void;
}
