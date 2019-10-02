import { Exception } from "../exceptions/exception";
export class ExceptionService {
    constructor() {
        this.registry = new Map();
    }
    register(className, exceptionType) {
        this.registry.set(className, exceptionType);
    }
    throw(apiException) {
        let exceptionType = this.registry.get(apiException.ClassName);
        if (!exceptionType) {
            exceptionType = Exception;
        }
        throw new exceptionType(apiException);
    }
}
