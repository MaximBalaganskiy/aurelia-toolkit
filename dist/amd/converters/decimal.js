define(["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DecimalValueConverter {
        toView(value) {
            if (!value) {
                return undefined;
            }
            else {
                return numeral(value).format("0,0.00");
            }
        }
        fromView(value) {
            throw new Error("Not implemented");
        }
    }
    exports.DecimalValueConverter = DecimalValueConverter;
});
