define(["require", "exports", "tslib", "../exceptions/exception", "../exceptions/unauthorized", "../exceptions/forbidden"], function (require, exports, tslib_1, exception_1, unauthorized_1, forbidden_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                exceptionType = exception_1.Exception;
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
                        throw new unauthorized_1.UnauthorizedException();
                    }
                    else if (r.status === 403) {
                        throw new forbidden_1.ForbiddenException();
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
    exports.ExceptionService = ExceptionService;
});
//# sourceMappingURL=exception-service.js.map