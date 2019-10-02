System.register(["./exception"], function (exports_1, context_1) {
    "use strict";
    var exception_1, UnconfirmedEmailException;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (exception_1_1) {
                exception_1 = exception_1_1;
            }
        ],
        execute: function () {
            UnconfirmedEmailException = class UnconfirmedEmailException extends exception_1.Exception {
            };
            exports_1("UnconfirmedEmailException", UnconfirmedEmailException);
        }
    };
});
