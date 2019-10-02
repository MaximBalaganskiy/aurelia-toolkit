import { ClientEditor } from "../settings-editor/client-editor";
var ClientEditorValueConverter = /** @class */ (function () {
    function ClientEditorValueConverter() {
    }
    ClientEditorValueConverter.prototype.toView = function (value) {
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
    };
    ClientEditorValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return ClientEditorValueConverter;
}());
export { ClientEditorValueConverter };
//# sourceMappingURL=client-editor-converter.js.map