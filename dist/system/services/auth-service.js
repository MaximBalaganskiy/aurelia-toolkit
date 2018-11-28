System.register(["../aurelia"], function (exports_1, context_1) {
    "use strict";
    var au, logger, AuthService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            logger = au.getLogger("AuthService");
            AuthService = class AuthService extends au.AuthService {
                isAuthenticatedAsync() {
                    this.authentication.responseAnalyzed = false;
                    let authenticated = this.authentication.isAuthenticated();
                    // auto-update token?
                    if (!authenticated
                        && this.config.autoUpdateToken
                        && this.authentication.getAccessToken()
                        && this.authentication.getRefreshToken()) {
                        return this.updateToken()
                            .catch(error => logger.warn(error))
                            .then(() => this.authenticated);
                    }
                    return Promise.resolve(authenticated);
                }
                getTokenPayload() {
                    return super.getTokenPayload();
                }
            };
            exports_1("AuthService", AuthService);
        }
    };
});
