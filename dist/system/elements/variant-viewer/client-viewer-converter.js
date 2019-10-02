System.register(["../settings-editor/client-editor"], function (exports_1, context_1) {
    "use strict";
    var client_editor_1, ClientViewerValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (client_editor_1_1) {
                client_editor_1 = client_editor_1_1;
            }
        ],
        execute: function () {
            ClientViewerValueConverter = /** @class */ (function () {
                function ClientViewerValueConverter() {
                }
                ClientViewerValueConverter.prototype.toView = function (value) {
                    switch (value) {
                        case client_editor_1.ClientEditor.Boolean: return "boolean";
                        case client_editor_1.ClientEditor.Select: return "select";
                        case client_editor_1.ClientEditor.Password: return "password";
                        case client_editor_1.ClientEditor.Date: return "date";
                        default: return "string";
                    }
                };
                ClientViewerValueConverter.prototype.fromView = function (value) {
                    throw new Error("Not implemented");
                };
                return ClientViewerValueConverter;
            }());
            exports_1("ClientViewerValueConverter", ClientViewerValueConverter);
        }
    };
});
//# sourceMappingURL=client-viewer-converter.js.map