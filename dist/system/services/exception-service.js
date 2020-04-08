System.register(["tslib", "../exceptions/exception", "../exceptions/unauthorized", "../exceptions/forbidden", "aurelia-fetch-client", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, exception_1, unauthorized_1, forbidden_1, aurelia_fetch_client_1, aurelia_framework_1, ExceptionService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (exception_1_1) {
                exception_1 = exception_1_1;
            },
            function (unauthorized_1_1) {
                unauthorized_1 = unauthorized_1_1;
            },
            function (forbidden_1_1) {
                forbidden_1 = forbidden_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            ExceptionService = /** @class */ (function () {
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
                ExceptionService = tslib_1.__decorate([
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
                ], ExceptionService);
                return ExceptionService;
            }());
            exports_1("ExceptionService", ExceptionService);
        }
    };
});
//# sourceMappingURL=exception-service.js.map