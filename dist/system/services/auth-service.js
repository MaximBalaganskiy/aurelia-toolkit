System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, logger, AuthService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            logger = au.getLogger("AuthService");
            AuthService = /** @class */ (function (_super) {
                tslib_1.__extends(AuthService, _super);
                function AuthService() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                AuthService.prototype.isAuthenticatedAsync = function () {
                    var _this = this;
                    this.authentication.responseAnalyzed = false;
                    var authenticated = this.authentication.isAuthenticated();
                    // auto-update token?
                    if (!authenticated
                        && this.config.autoUpdateToken
                        && this.authentication.getAccessToken()
                        && this.authentication.getRefreshToken()
                        && this.authentication.getRefreshToken() !== "none") {
                        return this.updateToken()
                            .catch(function (error) { return logger.warn(error); })
                            .then(function () { return _this.authenticated; });
                    }
                    return Promise.resolve(authenticated);
                };
                AuthService.prototype.getTokenPayload = function () {
                    return _super.prototype.getTokenPayload.call(this);
                };
                return AuthService;
            }(au.AuthService));
            exports_1("AuthService", AuthService);
        }
    };
});
//# sourceMappingURL=auth-service.js.map