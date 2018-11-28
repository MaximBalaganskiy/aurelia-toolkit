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
            ClientEditorValueConverter = class ClientEditorValueConverter {
                toView(value) {
                    switch (value) {
                        case client_editor_1.ClientEditor.Boolean: return "boolean";
                        case client_editor_1.ClientEditor.Number: return "number";
                        case client_editor_1.ClientEditor.Select: return "select";
                        case client_editor_1.ClientEditor.String: return "string";
                        case client_editor_1.ClientEditor.Textarea: return "textarea";
                        case client_editor_1.ClientEditor.Password: return "password";
                        case client_editor_1.ClientEditor.Date: return "date";
                        default: return "string";
                    }
                }
                fromView(value) {
                    throw new Error("Not implemented");
                }
            };
            exports_1("ClientEditorValueConverter", ClientEditorValueConverter);
        }
    };
});
