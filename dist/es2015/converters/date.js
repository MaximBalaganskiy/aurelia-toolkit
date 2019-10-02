import * as moment from "moment";
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value, format) {
        if (!value) {
            return "";
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
export { DateValueConverter };
//# sourceMappingURL=date.js.map