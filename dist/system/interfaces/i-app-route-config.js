System.register([], function (exports_1, context_1) {
    "use strict";
    var AuthStatus;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (AuthStatus) {
                AuthStatus[AuthStatus["All"] = 0] = "All";
                AuthStatus[AuthStatus["Authenticated"] = 1] = "Authenticated";
                AuthStatus[AuthStatus["NonAuthenticated"] = 2] = "NonAuthenticated";
            })(AuthStatus || (AuthStatus = {}));
            exports_1("AuthStatus", AuthStatus);
        }
    };
});
