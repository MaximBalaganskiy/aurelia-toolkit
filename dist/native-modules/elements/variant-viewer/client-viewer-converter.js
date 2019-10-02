import { ClientEditor } from "../settings-editor/client-editor";
var ClientViewerValueConverter = /** @class */ (function () {
    function ClientViewerValueConverter() {
    }
    ClientViewerValueConverter.prototype.toView = function (value) {
        switch (value) {
            case ClientEditor.Boolean: return "boolean";
            case ClientEditor.Select: return "select";
            case ClientEditor.Password: return "password";
            case ClientEditor.Date: return "date";
            default: return "string";
        }
    };
    ClientViewerValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return ClientViewerValueConverter;
}());
export { ClientViewerValueConverter };
//# sourceMappingURL=client-viewer-converter.js.map