import * as numeral from "numeral";
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
export { CurrencyValueConverter };
//# sourceMappingURL=currency.js.map