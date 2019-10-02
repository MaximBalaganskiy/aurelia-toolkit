define(["require", "exports", "../settings-editor/client-editor"], function (require, exports, client_editor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
