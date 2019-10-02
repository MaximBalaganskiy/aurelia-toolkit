import { Exception } from "../exceptions/exception";
import { IApiException } from "../interfaces/i-api-exception";
export declare class ExceptionService {
    registry: Map<string, typeof Exception>;
    register(className: string, exceptionType: typeof Exception): void;
    throw(apiException: IApiException): void;
}
