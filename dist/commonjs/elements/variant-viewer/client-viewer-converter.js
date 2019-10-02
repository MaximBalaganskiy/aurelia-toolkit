"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_editor_1 = require("../settings-editor/client-editor");
var ClientViewerValueConverter = /** @class */ (function () {
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
exports.ClientViewerValueConverter = ClientViewerValueConverter;
//# sourceMappingURL=client-viewer-converter.js.map