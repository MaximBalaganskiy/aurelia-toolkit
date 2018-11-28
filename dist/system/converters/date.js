System.register(["moment"], function (exports_1, context_1) {
    "use strict";
    var moment, DateValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            DateValueConverter = class DateValueConverter {
                toView(value, format) {
                    if (!value) {
                        return "";
                    }
                    const m = moment(value);
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
                }
                fromView(value) {
                    if (!value) {
                        return undefined;
                    }
                    return moment(value, "DD/MM/YYYY").toDate();
                }
            };
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
