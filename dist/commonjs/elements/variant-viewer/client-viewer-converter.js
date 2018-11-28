"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_editor_1 = require("../settings-editor/client-editor");
class ClientViewerValueConverter {
    toView(value) {
        switch (value) {
            case client_editor_1.ClientEditor.Boolean: return "boolean";
            case client_editor_1.ClientEditor.Select: return "select";
            case client_editor_1.ClientEditor.Password: return "password";
            case client_editor_1.ClientEditor.Date: return "date";
            default: return "string";
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
exports.ClientViewerValueConverter = ClientViewerValueConverter;
