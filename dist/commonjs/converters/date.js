"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var DateValueConverter = /** @class */ (function () {
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
exports.DateValueConverter = DateValueConverter;
//# sourceMappingURL=date.js.map