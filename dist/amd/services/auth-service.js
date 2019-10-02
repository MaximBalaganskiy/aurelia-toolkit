define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logger = au.getLogger("AuthService");
    var AuthService = /** @class */ (function (_super) {
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
    exports.AuthService = AuthService;
});
//# sourceMappingURL=auth-service.js.map