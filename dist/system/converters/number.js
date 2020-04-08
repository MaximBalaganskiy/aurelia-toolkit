System.register(["numeral"], function (exports_1, context_1) {
    "use strict";
    var numeral, NumberValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (numeral_1) {
                numeral = numeral_1;
            }
        ],
        execute: function () {
            NumberValueConverter = /** @class */ (function () {
                function NumberValueConverter() {
                }
                NumberValueConverter.prototype.toView = function (value) {
                    if (value === undefined || value === null || value === "") {
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
            exports_1("NumberValueConverter", NumberValueConverter);
        }
    };
});
//# sourceMappingURL=number.js.map