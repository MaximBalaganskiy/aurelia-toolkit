import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";
import { ISelectOption } from "../settings-editor/i-select-option";
export declare class VariantViewer {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    value: any;
    dataType: ClientEditor;
    selectWidth: string;
    options: ISelectOption[];
    edit(): void;
    change(e: Event): void;
}
