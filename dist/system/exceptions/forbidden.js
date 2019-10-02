System.register(["tslib", "./exception"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, exception_1, ForbiddenException;
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
            ForbiddenException = /** @class */ (function (_super) {
                tslib_1.__extends(ForbiddenException, _super);
                function ForbiddenException() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ForbiddenException;
            }(exception_1.Exception));
            exports_1("ForbiddenException", ForbiddenException);
        }
    };
});
//# sourceMappingURL=forbidden.js.map