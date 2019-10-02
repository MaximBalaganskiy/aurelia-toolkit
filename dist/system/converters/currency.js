System.register(["numeral"], function (exports_1, context_1) {
    "use strict";
    var numeral, CurrencyValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (numeral_1) {
                numeral = numeral_1;
            }
        ],
        execute: function () {
            CurrencyValueConverter = /** @class */ (function () {
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
            exports_1("CurrencyValueConverter", CurrencyValueConverter);
        }
    };
});
//# sourceMappingURL=currency.js.map