System.register(["numeral"], function (exports_1, context_1) {
    "use strict";
    var numeral, DecimalValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (numeral_1) {
                numeral = numeral_1;
            }
        ],
        execute: function () {
            DecimalValueConverter = /** @class */ (function () {
                function DecimalValueConverter() {
                }
                DecimalValueConverter.prototype.toView = function (value) {
                    if (!value) {
                        return undefined;
                    }
                    else {
                        return numeral(value).format("0,0.00");
                    }
                };
                DecimalValueConverter.prototype.fromView = function (value) {
                    throw new Error("Not implemented");
                };
                return DecimalValueConverter;
            }());
            exports_1("DecimalValueConverter", DecimalValueConverter);
        }
    };
});
//# sourceMappingURL=decimal.js.map