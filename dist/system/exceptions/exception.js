System.register([], function (exports_1, context_1) {
    "use strict";
    var Exception;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Exception = /** @class */ (function () {
                function Exception(apiException) {
                    this.name = "Exception";
                    if (apiException) {
                        this.message = apiException.Message;
                        this.class = apiException.ClassName;
                        this.data = apiException.Data;
                        this.stack = apiException.StackTraceString;
                    }
                }
                return Exception;
            }());
            exports_1("Exception", Exception);
        }
    };
});
//# sourceMappingURL=exception.js.map