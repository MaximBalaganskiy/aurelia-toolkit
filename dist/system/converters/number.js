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
            NumberValueConverter = class NumberValueConverter {
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
            };
            exports_1("NumberValueConverter", NumberValueConverter);
        }
    };
});
