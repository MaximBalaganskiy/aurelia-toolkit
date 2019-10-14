import { parse, parseISO, format } from "date-fns";
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value, formatStr) {
        if (!value) {
            return "";
        }
        if (typeof (value) === "string") {
            value = parseISO(value);
        }
        formatStr = formatStr || "DD/MM/YYYY";
        return format(value, formatStr);
    };
    DateValueConverter.prototype.fromView = function (value, formatStr) {
        if (!value) {
            return undefined;
        }
        formatStr = formatStr || "DD/MM/YYYY";
        return parse(value, formatStr, Date.now());
    };
    return DateValueConverter;
}());
export { DateValueConverter };
//# sourceMappingURL=date.js.map