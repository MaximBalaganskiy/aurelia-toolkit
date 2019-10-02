define(["require", "exports", "../exceptions/exception"], function (require, exports, exception_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ExceptionService {
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
    }
    exports.ExceptionService = ExceptionService;
});
