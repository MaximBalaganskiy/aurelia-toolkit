System.register(["date-fns"], function (exports_1, context_1) {
    "use strict";
    var date_fns_1, DateValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (date_fns_1_1) {
                date_fns_1 = date_fns_1_1;
            }
        ],
        execute: function () {
            DateValueConverter = /** @class */ (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (value, formatStr) {
                    if (!value) {
                        return "";
                    }
                    if (typeof (value) === "string") {
                        value = date_fns_1.parseISO(value);
                    }
                    formatStr = formatStr || "DD/MM/YYYY";
                    return date_fns_1.format(value, formatStr);
                };
                DateValueConverter.prototype.fromView = function (value, formatStr) {
                    if (!value) {
                        return undefined;
                    }
                    formatStr = formatStr || "DD/MM/YYYY";
                    return date_fns_1.parse(value, formatStr, Date.now());
                };
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
//# sourceMappingURL=date.js.map