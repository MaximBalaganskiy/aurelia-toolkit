System.register(["../settings-editor/client-editor"], function (exports_1, context_1) {
    "use strict";
    var client_editor_1, ClientEditorValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (client_editor_1_1) {
                client_editor_1 = client_editor_1_1;
            }
        ],
        execute: function () {
            ClientEditorValueConverter = /** @class */ (function () {
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
            exports_1("ClientEditorValueConverter", ClientEditorValueConverter);
        }
    };
});
//# sourceMappingURL=client-editor-converter.js.map