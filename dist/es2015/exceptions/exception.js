export class Exception {
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
