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
            ExceptionService = class ExceptionService {
                constructor() {
                    this.registry = new Map();
                }
                register(className, exceptionType) {
                    this.registry.set(className, exceptionType);
                }
                throw(apiException) {
                    let exceptionType = this.registry.get(apiException.ClassName);
                    if (!exceptionType) {
                        exceptionType = exception_1.Exception;
                    }
                    throw new exceptionType(apiException);
                }
            };
            exports_1("ExceptionService", ExceptionService);
        }
    };
});
