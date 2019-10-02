"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("../exceptions/exception");
var ExceptionService = /** @class */ (function () {
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
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception-service.js.map