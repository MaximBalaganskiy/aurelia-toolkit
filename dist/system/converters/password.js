System.register([], function (exports_1, context_1) {
    "use strict";
    var PasswordValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PasswordValueConverter = class PasswordValueConverter {
                toView(value, isPassword) {
                    return isPassword ? (value.length ? Array(value.length + 1).join("•") : "") : value;
                }
                fromView(value) {
                    throw new Error("Not implemented");
                }
            };
            exports_1("PasswordValueConverter", PasswordValueConverter);
        }
    };
});
