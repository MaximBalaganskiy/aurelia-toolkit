import { ClientEditor } from "../settings-editor/client-editor";
export declare class ClientEditorValueConverter {
    toView(value: ClientEditor): string;
    fromView(value: string): number;
}
