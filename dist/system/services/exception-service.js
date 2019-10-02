System.register(["../exceptions/exception"], function (exports_1, context_1) {
    "use strict";
    var exception_1, ExceptionService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (exception_1_1) {
                exception_1 = exception_1_1;
            }
        ],
        execute: function () {
            ExceptionService = /** @class */ (function () {
                function ExceptionService() {
                    this.registry = new Map();
                }
                ExceptionService.prototype.register = function (className, exceptionType) {
                    this.registry.set(className, exceptionType);
                };
                ExceptionService.prototype.throw = function (apiException) {
                    var exceptionType = this.registry.get(apiException.ClassName);
                    if (!exceptionType) {
                        exceptionType = exception_1.Exception;
                    }
                    throw new exceptionType(apiException);
                };
                return ExceptionService;
            }());
            exports_1("ExceptionService", ExceptionService);
        }
    };
});
//# sourceMappingURL=exception-service.js.map