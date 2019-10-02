System.register([], function (exports_1, context_1) {
    "use strict";
    var AbnValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AbnValueConverter = /** @class */ (function () {
                function AbnValueConverter() {
                }
                AbnValueConverter.prototype.toView = function (value) {
                    if (!value) {
                        return "";
                    }
                    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
                };
                AbnValueConverter.prototype.fromView = function (value) {
                    throw new Error("Not implemented");
                };
                return AbnValueConverter;
            }());
            exports_1("AbnValueConverter", AbnValueConverter);
        }
    };
});
//# sourceMappingURL=abn.js.map