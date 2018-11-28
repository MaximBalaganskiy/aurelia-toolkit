System.register(["./exception"], function (exports_1, context_1) {
    "use strict";
    var exception_1, InvalidCredentialsException;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (exception_1_1) {
                exception_1 = exception_1_1;
            }
        ],
        execute: function () {
            InvalidCredentialsException = class InvalidCredentialsException extends exception_1.Exception {
            };
            exports_1("InvalidCredentialsException", InvalidCredentialsException);
        }
    };
});
