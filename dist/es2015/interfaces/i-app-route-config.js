export var AuthStatus;
(function (AuthStatus) {
    AuthStatus[AuthStatus["All"] = 0] = "All";
    AuthStatus[AuthStatus["Authenticated"] = 1] = "Authenticated";
    AuthStatus[AuthStatus["NonAuthenticated"] = 2] = "NonAuthenticated";
})(AuthStatus || (AuthStatus = {}));
