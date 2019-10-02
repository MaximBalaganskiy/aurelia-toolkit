"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeral = require("numeral");
var CurrencyValueConverter = /** @class */ (function () {
    function CurrencyValueConverter() {
    }
    CurrencyValueConverter.prototype.toView = function (value) {
        return numeral(value).format("$0,0.00");
    };
    CurrencyValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return CurrencyValueConverter;
}());
exports.CurrencyValueConverter = CurrencyValueConverter;
//# sourceMappingURL=currency.js.map