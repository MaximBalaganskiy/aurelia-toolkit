System.register(["tslib", "./exception"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, exception_1, TooManyRecordsException;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (exception_1_1) {
                exception_1 = exception_1_1;
            }
        ],
        execute: function () {
            TooManyRecordsException = /** @class */ (function (_super) {
                tslib_1.__extends(TooManyRecordsException, _super);
                function TooManyRecordsException() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return TooManyRecordsException;
            }(exception_1.Exception));
            exports_1("TooManyRecordsException", TooManyRecordsException);
        }
    };
});
//# sourceMappingURL=too-many-records.js.map