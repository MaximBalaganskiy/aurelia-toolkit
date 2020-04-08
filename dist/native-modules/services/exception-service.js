import * as tslib_1 from "tslib";
import { Exception } from "../exceptions/exception";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ForbiddenException } from "../exceptions/forbidden";
var ExceptionService = /** @class */ (function () {
    function ExceptionService(http) {
        this.http = http;
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
    ExceptionService.prototype.assertResponse = function (r) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (r.ok) {
                    return [2 /*return*/, r];
                }
                else if (r.status === 401) {
                    throw new UnauthorizedException();
                }
                else if (r.status === 403) {
                    throw new ForbiddenException();
                }
                else {
                    return [2 /*return*/, r.json().then(function (d) { return _this.throw(d); })];
                }
                return [2 /*return*/];
            });
        });
    };
    ExceptionService.prototype.addHttpInterceptor = function () {
        var _this = this;
        this.http.configure(function (c) {
            c.withInterceptor({ response: function (r) { return _this.assertResponse(r); } });
        });
    };
    return ExceptionService;
}());
export { ExceptionService };
//# sourceMappingURL=exception-service.js.map