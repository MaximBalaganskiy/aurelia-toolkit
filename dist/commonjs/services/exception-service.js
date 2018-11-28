"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("../exceptions/exception");
class ExceptionService {
    constructor() {
        this.registry = new Map();
    }
    register(className, exceptionType) {
        this.registry.set(className, exceptionType);
    }
    throw(apiException) {
        let exceptionType = this.registry.get(apiException.ClassName);
        if (!exceptionType) {
            exceptionType = exception_1.Exception;
        }
        throw new exceptionType(apiException);
    }
}
exports.ExceptionService = ExceptionService;
