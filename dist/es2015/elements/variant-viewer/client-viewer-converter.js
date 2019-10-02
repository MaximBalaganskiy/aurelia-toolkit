import { ClientEditor } from "../settings-editor/client-editor";
export class ClientViewerValueConverter {
    toView(value) {
        switch (value) {
            case ClientEditor.Boolean: return "boolean";
            case ClientEditor.Select: return "select";
            case ClientEditor.Password: return "password";
            case ClientEditor.Date: return "date";
            default: return "string";
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
