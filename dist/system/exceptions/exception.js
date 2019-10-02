System.register([], function (exports_1, context_1) {
    "use strict";
    var Exception;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Exception = class Exception {
                constructor(apiException) {
                    this.name = "Exception";
                    if (apiException) {
                        this.message = apiException.Message;
                        this.class = apiException.ClassName;
                        this.data = apiException.Data;
                        this.stack = apiException.StackTraceString;
                    }
                }
            };
            exports_1("Exception", Exception);
        }
    };
});
