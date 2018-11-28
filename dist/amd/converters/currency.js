define(["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CurrencyValueConverter {
        toView(value) {
            return numeral(value).format("$0,0.00");
        }
        fromView(value) {
            throw new Error("Not implemented");
        }
    }
    exports.CurrencyValueConverter = CurrencyValueConverter;
});
