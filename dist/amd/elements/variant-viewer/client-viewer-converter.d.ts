import { ClientEditor } from "../settings-editor/client-editor";
export declare class ClientViewerValueConverter {
    toView(value: ClientEditor): string;
    fromView(value: string): number;
}
