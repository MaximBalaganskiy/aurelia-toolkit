"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeral = require("numeral");
var DecimalValueConverter = /** @class */ (function () {
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
exports.DecimalValueConverter = DecimalValueConverter;
//# sourceMappingURL=decimal.js.map