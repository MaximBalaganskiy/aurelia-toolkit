define(["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NumberValueConverter {
        toView(value) {
            if (!value) {
                return undefined;
            }
            else {
                return numeral(value).format("0");
            }
        }
        fromView(value) {
            if (!value) {
                return undefined;
            }
            return numeral(value).value();
        }
    }
    exports.NumberValueConverter = NumberValueConverter;
});
