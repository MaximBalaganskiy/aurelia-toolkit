define(["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberValueConverter = /** @class */ (function () {
        function NumberValueConverter() {
        }
        NumberValueConverter.prototype.toView = function (value) {
            if (!value) {
                return undefined;
            }
            else {
                return numeral(value).format("0");
            }
        };
        NumberValueConverter.prototype.fromView = function (value) {
            if (!value) {
                return undefined;
            }
            return numeral(value).value();
        };
        return NumberValueConverter;
    }());
    exports.NumberValueConverter = NumberValueConverter;
});
//# sourceMappingURL=number.js.map