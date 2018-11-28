System.register([], function (exports_1, context_1) {
    "use strict";
    var AbnValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AbnValueConverter = class AbnValueConverter {
                toView(value) {
                    if (!value) {
                        return "";
                    }
                    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
                }
                fromView(value) {
                    throw new Error("Not implemented");
                }
            };
            exports_1("AbnValueConverter", AbnValueConverter);
        }
    };
});
