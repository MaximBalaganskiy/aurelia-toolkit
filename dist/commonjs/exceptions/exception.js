"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exception = /** @class */ (function () {
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
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map