import { Exception } from "../exceptions/exception";
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
            exceptionType = Exception;
        }
        throw new exceptionType(apiException);
    };
    return ExceptionService;
}());
export { ExceptionService };
//# sourceMappingURL=exception-service.js.map