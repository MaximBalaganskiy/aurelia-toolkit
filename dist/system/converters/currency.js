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
            CurrencyValueConverter = class CurrencyValueConverter {
                toView(value) {
                    return numeral(value).format("$0,0.00");
                }
                fromView(value) {
                    throw new Error("Not implemented");
                }
            };
            exports_1("CurrencyValueConverter", CurrencyValueConverter);
        }
    };
});
