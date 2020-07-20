System.register(["moment"], function (exports_1, context_1) {
    "use strict";
    var moment, DateValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            DateValueConverter = /** @class */ (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (value, format) {
                    if (!value) {
                        return "";
                    }
                    else if (value === "(empty)") {
                        return value;
                    }
                    var m = moment(value);
                    if (m.isAfter("9999-12-31")) {
                        return "";
                    }
                    else {
                        if (!format) {
                            return m.toDate().toLocaleDateString("en-AU");
                        }
                        else {
                            return m.format(format);
                        }
                    }
                };
                DateValueConverter.prototype.fromView = function (value) {
                    if (!value) {
                        return undefined;
                    }
                    return moment(value, "DD/MM/YYYY").toDate();
                };
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
//# sourceMappingURL=date.js.map