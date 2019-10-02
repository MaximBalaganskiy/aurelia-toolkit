define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbnValueConverter = /** @class */ (function () {
        function AbnValueConverter() {
        }
        AbnValueConverter.prototype.toView = function (value) {
            if (!value) {
                return "";
            }
            return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
        };
        AbnValueConverter.prototype.fromView = function (value) {
            throw new Error("Not implemented");
        };
        return AbnValueConverter;
    }());
    exports.AbnValueConverter = AbnValueConverter;
});
//# sourceMappingURL=abn.js.map