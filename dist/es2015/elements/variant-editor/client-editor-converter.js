import { ClientEditor } from "../settings-editor/client-editor";
export class ClientEditorValueConverter {
    toView(value) {
        switch (value) {
            case ClientEditor.Boolean: return "boolean";
            case ClientEditor.Integer: return "integer";
            case ClientEditor.Select: return "select";
            case ClientEditor.String: return "string";
            case ClientEditor.Textarea: return "textarea";
            case ClientEditor.Password: return "password";
            case ClientEditor.Date: return "date";
            case ClientEditor.Decimal: return "decimal";
            default: return "string";
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
