"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValueConverter = /** @class */ (function () {
    function PasswordValueConverter() {
    }
    PasswordValueConverter.prototype.toView = function (value, isPassword) {
        return isPassword ? (value.length ? Array(value.length + 1).join("•") : "") : value;
    };
    PasswordValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return PasswordValueConverter;
}());
exports.PasswordValueConverter = PasswordValueConverter;
//# sourceMappingURL=password.js.map