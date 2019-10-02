define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Exception {
        constructor(apiException) {
            this.name = "Exception";
            if (apiException) {
                this.message = apiException.Message;
                this.class = apiException.ClassName;
                this.data = apiException.Data;
                this.stack = apiException.StackTraceString;
            }
        }
    }
    exports.Exception = Exception;
});
