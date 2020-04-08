import { Exception } from "../exceptions/exception";
import { IApiException } from "../interfaces/i-api-exception";
import { HttpClient } from "aurelia-fetch-client";
export declare class ExceptionService {
    private http;
    constructor(http: HttpClient);
    registry: Map<string, typeof Exception>;
    register(className: string, exceptionType: typeof Exception): void;
    throw(apiException: IApiException): void;
    assertResponse(r: Response): Promise<Response>;
    addHttpInterceptor(): void;
}
