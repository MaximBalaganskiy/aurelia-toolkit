import { IDictionaryRow } from "../../interfaces/i-dictionary-row";
export interface IFileRow {
    file?: File;
    fileName: string;
    type?: IDictionaryRow;
    isTooBig?: boolean;
}
