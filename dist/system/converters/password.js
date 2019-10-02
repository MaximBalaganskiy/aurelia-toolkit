System.register([], function (exports_1, context_1) {
    "use strict";
    var PasswordValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PasswordValueConverter = /** @class */ (function () {
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
            exports_1("PasswordValueConverter", PasswordValueConverter);
        }
    };
});
//# sourceMappingURL=password.js.map