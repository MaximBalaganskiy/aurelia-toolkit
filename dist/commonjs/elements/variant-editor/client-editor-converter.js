"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_editor_1 = require("../settings-editor/client-editor");
var ClientEditorValueConverter = /** @class */ (function () {
    function ClientEditorValueConverter() {
    }
    ClientEditorValueConverter.prototype.toView = function (value) {
        switch (value) {
            case client_editor_1.ClientEditor.Boolean: return "boolean";
            case client_editor_1.ClientEditor.Integer: return "integer";
            case client_editor_1.ClientEditor.Select: return "select";
            case client_editor_1.ClientEditor.String: return "string";
            case client_editor_1.ClientEditor.Textarea: return "textarea";
            case client_editor_1.ClientEditor.Password: return "password";
            case client_editor_1.ClientEditor.Date: return "date";
            case client_editor_1.ClientEditor.Decimal: return "decimal";
            default: return "string";
        }
    };
    ClientEditorValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return ClientEditorValueConverter;
}());
exports.ClientEditorValueConverter = ClientEditorValueConverter;
//# sourceMappingURL=client-editor-converter.js.map