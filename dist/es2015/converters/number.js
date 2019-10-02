import * as numeral from "numeral";
var NumberValueConverter = /** @class */ (function () {
    function NumberValueConverter() {
    }
    NumberValueConverter.prototype.toView = function (value) {
        if (!value) {
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
export { NumberValueConverter };
//# sourceMappingURL=number.js.map